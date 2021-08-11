import * as THREE from 'three';
import {Kleinteilig} from './kleinteilig';
import {_0x18t as Sketch} from './ts/sketch/0x18.twojs';

export class indexth extends Kleinteilig {
  protected sketch_?: Sketch;
  protected three_!: THREE;

  constructor() {
    super();

    window.addEventListener('DOMContentLoaded', this.setup.bind(this));

    this.sketch_ = new Sketch();
    this.sketch_?.init();
    this.attach_(this.sketch_);
  }

  setup() {
    this.three_ = new Three({
      autostart: true,
      domElement: this.canvas_,
      fullscreen: true,
      type: Three.Types.webgl,
    });

    this.sketch_?.setup(this.three_);

    this.three_.bind(Three.Events.update, (_arr) => {
      this.sketch_?.update(_arr);
    });

    this.draw();
  }

  draw() {
    this.sketch_?.draw();
    // this.three_.render();
    this.three_.update();
  }
}

new indext();

