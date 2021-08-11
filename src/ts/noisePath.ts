import * as paper from 'paper';
import {Noise} from './noise';
import {map, radians, stepper} from './utils';

export interface NoisePathObject {
  [key: string]: NoisePath;
}

interface NoisePathProps {
  blendMode?: string;
  fillColor?: paper.Color;
  interval: number;
  name?: string;
  opacity?: number;
  radius: number;
  shape?: string;
  smooth?: boolean;
  strokeColor?: paper.Color;
  strokeWidth?: number;
}

export class NoisePath {
  private offset_ = {
    x: 0,
    y: 0,
  };
  private radius_ = 1;
  private distort_ = 1;
  private multiplier_ = 1;

  angleStart = -90;

  paths: Array<paper.Path> = [];

  constructor(props: Array<NoisePathProps>) {
    props.forEach((p) => {
      this.paths.push(this.circle_(paper.view.bounds.center, p));
    });

    this.attach_();
    this.resizeHandler_();
  }

  private circle_(center: paper.Point, props: NoisePathProps) {
    const path = new paper.Path();
    const int = Math.floor(360 / props.interval);
    for (let angle = 0; angle < 360 + int; angle += int) {
      path.add(new paper.Point(
        center.x + (props.radius * Math.cos(radians(angle))),
        center.y + (props.radius * Math.sin(radians(angle)))
      ));
    }
    this.basePath_(path, props);

    return path;
  }

  private basePath_(path: paper.Path, props: NoisePathProps) {
    path.data.props = Object.assign({}, props);
    path.data.radius = props.radius || this.radius_;
    path.data.shape = props.shape || 'circle';
    path.data.translate = new paper.Point(0, 0);
    path.opacity = props.opacity || 1;
    path.strokeWidth = props.strokeWidth || 2;
    path.strokeCap = 'round';
    path.blendMode = props.blendMode || 'normal';
    path.closed = true;
    if (props.smooth !== false) {
      path.smooth();
    }
    if (props.strokeColor) {
      path.strokeColor = props.strokeColor;
    }
    if (props.fillColor) {
      path.fillColor = props.fillColor;
    }

    return path;
  }

  private attach_() {
    // window.addEventListener('resize', this.resizeHandler_.bind(this));
  }

  private resizeHandler_() {
    // this.radius_ = (paper.view.bounds.height > paper.view.bounds.width)
    //   ? paper.view.bounds.width / 3
    //   : paper.view.bounds.height / 3;
  }

  // modulate(pt: paper.Point, multiplier = 1) {
  modulate(val: number, multiplier = 1) {
    this.distort_ = val;
    this.multiplier_ = multiplier;
  }

  reset() {
    this.modulate(1, 1);

    for (let p in this.paths) {
      let path = this.paths[p] as paper.Path;
      path.data.radius = path.data.props.radius;
    }
  }

  update(_event?: paper.Event) {
    for (let p in this.paths) {
      let path = this.paths[p] as paper.Path;

      this.offset_.x = 0;

      if (path.data.radius > path.data.props.radius * 1.5) {
        stepper(300, (_i, t) => {
          path.data.radius -= path.data.props.radius * t;

          if (path.data.radius <= path.data.props.radius) {
            return true;
          }
          return false;
        });
      }
      if (path.data.radius < path.data.props.radius * .66) {
        stepper(300, (_i, t) => {
          path.data.radius += path.data.props.radius * t;

          if (path.data.radius >= path.data.props.radius) {
            return true;
          }
          return false;
        });
      }

      if (path.segments.length > 100) {
        path.segments = path.segments.slice(0, 100 - path.data.props.interval);
      }

      for (let i = 0; i < path.segments.length; ++i) {
        let angle = ((i / path.segments.length) * 360) + this.angleStart;
        let segment = path.segments[i];
        let sin = Math.sin(radians(angle));
        let cos = Math.cos(radians(angle));

        // 2D Noise
        segment.point.y = map(
          new Noise(this.offset_.y, i).perlin() * this.multiplier_,
          0,
          1,
          (paper.view.bounds.center.y + path.data.translate.y) + path.data.radius * (sin * this.distort_),
          (paper.view.bounds.center.y + path.data.translate.y) + (path.data.radius * sin),
        );

        // 3D Noise
        segment.point.x = map(
          new Noise(this.offset_.x, i).perlin() * this.multiplier_,
          0,
          1,
          (paper.view.bounds.center.x + path.data.translate.x) + path.data.radius * (cos * this.distort_),
          (paper.view.bounds.center.x + path.data.translate.x) + (path.data.radius * cos),
        );

        this.offset_.x += .05;
      }

      if (path.data.props.smooth !== false) {
        path.smooth();
      }
    }

    this.offset_.y += .05;
  }
}