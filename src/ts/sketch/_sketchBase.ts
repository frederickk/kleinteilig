import * as paper from 'paper';
import * as OPZ from 'opzjs';
import {NoisePath, NoisePathObject} from '../noisePath';
import * as defs from './_defs';

class Sketch {
  protected noisePaths: NoisePathObject = {};
  protected background: paper.Path;
  protected foreground: paper.Path;
  protected blendMode = 'multiply'; //'difference';
  protected distort = 1;
  protected multiplier = 1;

  constructor() {
    this.background = new paper.Path.Rectangle(paper.view.bounds);
    this.background.fillColor = defs.colors.clear;
    this.foreground = new paper.Path.Rectangle(paper.view.bounds);
    this.foreground.fillColor = defs.colors.clear;

    // const radius = paper.view.bounds.height / 4;
    // this.noisePaths = {
    //   'synth': new NoisePath([{
    //     blendMode: this.blendMode,
    //     name: 'bass',
    //     strokeColor: defs.colors.grey,
    //     interval: 24,
    //     radius,
    //   }, {
    //     blendMode: this.blendMode,
    //     name: 'lead',
    //     strokeColor: defs.colors.grey,
    //     interval: 12,
    //     radius,
    //   }, {
    //     blendMode: this.blendMode,
    //     name: 'arp',
    //     strokeColor: defs.colors.grey,
    //     interval: 8,
    //     radius,
    //   }, {
    //     blendMode: this.blendMode,
    //     name: 'chord',
    //     strokeColor: defs.colors.grey,
    //     interval: 20,
    //     radius,
    //   }]),
    // }
  }

  setup() {}

  draw() {}

  update(_event?: paper.Event) {
    for (let key in this.noisePaths) {
      this.noisePaths[key]?.update(_event);
    }
  }
}

export {Sketch, paper, OPZ, NoisePath, defs};

