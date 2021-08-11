import * as Two from 'twojs-ts';
import * as OPZ from 'opzjs';
import {NoisePatht, NoisePathtObject} from '../noisePath.twojs';
import * as defs from './_defs.twojs';

class Sketch {
  protected two_!: Two;
  protected noisePaths: NoisePathtObject = {};
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
    if (two || this.two_) {
      this.two_ = two || this.two_;

      this.background = this.foreground = this.two_.makeRectangle(
        this.two_.width / 2,
        this.two_.height / 2,
        this.two_.width,
        this.two_.height
      );
      this.background.noStroke();
      this.background.fill = defs.colors.clear;
      this.foreground.noStroke();
      this.foreground.fill = defs.colors.clear;

      const radius = this.two_.height / 4;
      this.noisePaths = {
        'synth': [
          new NoisePatht(this.two_, [{
            name: 'bass',
            fill: defs.colors.grey,
            interval: 24,
            radius,
          }]),
          new NoisePatht(this.two_, [{
            name: 'lead',
            fill: defs.colors.grey,
            interval: 12,
            radius,
          }]),
          new NoisePatht(this.two_, [{
            name: 'arp',
            fill: defs.colors.grey,
            interval: 8,
            radius,
          }]),
          new NoisePatht(this.two_, [{
            name: 'chord',
            fill: defs.colors.grey,
            interval: 20,
            radius,
          }])
        ],
      };
    }
  }

  draw() {}

  update(_event?: any) {
    for (let key in this.noisePaths) {
      for(let np of this.noisePaths[key]) {
        np?.update();
      }
    }
  }
}

export {defs, Sketch, Two, NoisePatht, OPZ};

