// @ts-nocheck
import * as Two from 'twojs-ts';
import {Noise} from './noise';
import {map, radians, stepper} from './utils';

export interface NoisePathtObject {
  [key: string]: any;
}

interface NoisePathtProps {
  fill?: string;
  interval: number;
  name?: string;
  opacity?: number;
  radius: number;
  shape?: string;
  smooth?: boolean;
  stroke?: string;
  linewidth?: number;
}

export class NoisePatht {
  private two_!: Two;
  private offset_ = {
    x: (Math.random() * 2),
    y: (Math.random() * 2),
  };
  private radius_ = 1;
  private distort_ = 1;
  private multiplier_ = 1;

  angleStart = -90;

  paths: Array<Two.Path> = [];

  constructor(two: Two, props: Array<NoisePathtProps>) {
    this.two_ = two;

    props.forEach((p) => {
      this.paths.push(this.circle_([
        this.two_.width / 2,
        this.two_.height / 2], p)
      );
    });
  }

  private circle_(center: Array<number>, props: NoisePathtProps) {
    const path = (this.two_ as any).makeCircle(
      center[0],
      center[1], props.radius, props.interval);
    this.basePath_(path, props);
    path.translation.set(center[0], center[1]);

    return path;
  }

  private basePath_(path: Two.Path, props: NoisePathtProps) {
    (path as any).data = {
      props: Object.assign({}, props),
      radius: props.radius || this.radius_,
      shape: props.shape || 'circle',
      translate: {
        x: 0,
        y: 0
      },
    };
    path.opacity = props.opacity || 1;
    path.linewidth = props.linewidth || 2;
    path.cap = 'round';
    path.closed = true;
    if (props.smooth !== false) {
      path.automatic = true;
    }
    if (props.stroke) {
      path.stroke = props.stroke;
    } else {
      path.noStroke();
    }
    if (props.fill) {
      path.fill = props.fill;
    }

    return path;
  }

  modulate(val: number, multiplier = 1) {
    this.distort_ = val;
    this.multiplier_ = multiplier;
  }

  reset() {
    this.modulate(1, 1);

    for (let p in this.paths) {
      const path = this.paths[p] as Two.Path;
      const data = (path as any).data;
      data.radius = data.props.radius;
    }
  }

  update() {
    for (let p in this.paths) {
      const path = this.paths[p] as Two.Path;
      const data = (path as any).data;

      this.offset_.x = 0;

      if (data.radius > data.props.radius * 1.5) {
        stepper(300, (_i, t) => {
          data.radius -= data.props.radius * t;

          if (data.radius <= data.props.radius) {
            return true;
          }
          return false;
        });
      }
      if (data.radius < data.props.radius * .66) {
        stepper(300, (_i, t) => {
          data.radius += data.props.radius * t;

          if (data.radius >= data.props.radius) {
            return true;
          }
          return false;
        });
      }

    //   if (path.vertices.length > 100) {
    //     path.vertices = path.vertices.slice(0, 100 - data.props.interval);
    //   }

      for (let i = 0; i < path.vertices.length; ++i) {
        let angle = ((i / path.vertices.length) * 360) + this.angleStart;
        let vertice = path.vertices[i];
        let sin = Math.sin(radians(angle));
        let cos = Math.cos(radians(angle));

        // 2D Noise
        vertice.y = map(
          new Noise(this.offset_.y, i).perlin() * this.multiplier_,
          0,
          1,
          data.radius * (sin * this.distort_),
          (data.radius * sin),
        );

        // 3D Noise
        vertice.x = map(
          new Noise(this.offset_.x, i).perlin() * this.multiplier_,
          0,
          1,
          data.radius * (cos * this.distort_),
          (data.radius * cos),
        );

        this.offset_.x += .05;
      }

      if (data.props.smooth !== false) {
        path.automatic = true;
      }
    }

    this.offset_.y += .05;
  }
}