import * as Two from 'twojs-ts';
import {Kleinteilig} from './kleinteilig';
import {_0x18tj as Sketch} from './ts/sketch/0x18Twojs';

export class IndexTwojs extends Kleinteilig {
  protected sketch_?: Sketch;
  protected two_!: Two;

  constructor() {
    super();

    window.addEventListener('DOMContentLoaded', this.setup.bind(this));

    this.sketch_ = new Sketch();
    this.sketch_?.init();
    this.attach_(this.sketch_);
  }

  setup() {
    this.two_ = new Two({
      autostart: true,
      domElement: this.canvas_,
      fullscreen: true,
      type: Two.Types.webgl,
    });

    this.sketch_?.setup(this.two_);

    this.two_.bind(Two.Events.update, (_arr) => {
      this.sketch_?.update(_arr);
    });

    this.draw();
  }

  draw() {
    this.sketch_?.draw();
    // this.two_.render();
    this.two_.update();
  }
}

new IndexTwojs();

