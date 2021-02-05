import * as paper from 'paper';
import {Kleinteilig} from './kleinteilig';
// import {_0x14 as Sketch} from './ts/sketch/0x14';
// import {_0x15 as Sketch} from './ts/sketch/0x15';
// import {_0x16 as Sketch} from './ts/sketch/0x16';
// import {_0x17 as Sketch} from './ts/sketch/0x17';
import {_0x18 as Sketch} from './ts/sketch/0x18';

export class Index extends Kleinteilig {
  protected sketch_?: Sketch;

  constructor() {
    super();

    // paper.install(window);
    paper.setup(this.canvas_);
    window.addEventListener('DOMContentLoaded', this.setup.bind(this));

    paper.view.onResize = (event: paper.Event) => {
      console.log('resize', event);
    }

    this.sketch_ = new Sketch();
    this.attach_(this.sketch_);
  }

  setup() {
    paper.view.onFrame = (_event: paper.Event) => {
      this.sketch_?.update(_event);
      paper.view.update();
    };

    this.sketch_?.setup();
    this.draw();

    paper.view.update();
  }

  draw() {
    this.sketch_?.draw();
    (paper as any).view.draw();
  }
}

new Index();