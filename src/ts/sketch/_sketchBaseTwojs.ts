import * as Two from 'twojs-ts';
import * as OPZ from 'opzjs';
import * as defs from './_defs';

class Sketch {
  protected two_!: Two;
  protected background?: Two.Path;
  protected foreground?: Two.Path;
  protected blendMode = 'multiply'; //'difference';
  protected distort = 1;
  protected multiplier = 1;

  constructor(two?: Two) {
    if (two) {
      this.two_ = two;
    }
  }

  init() {}

  setup(two?: Two) {
    if (two) {
      this.two_ = two;
    }
  }

  draw() {}

  update(_event?: any) {}
}

export {Sketch, Two, OPZ, defs};

