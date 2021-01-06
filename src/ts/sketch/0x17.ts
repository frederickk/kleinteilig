import {Sketch, NoisePath, OPZ, paper, defs} from './_sketchBase';
import {clamp, radians} from '../utils';

export class _0x17 extends Sketch {
  duration = 500;
  distort = 1;

  constructor() {
    super();

    const radius = paper.view.bounds.height / 4;
    this.noisePaths = {
      'synth': new NoisePath([{
        blendMode: this.blendMode,
        name: 'kick',
        fillColor: defs.colors.grey,
        interval: 24,
        radius,
      }, {
        blendMode: this.blendMode,
        name: 'lead',
        fillColor: defs.colors.clear,
        interval: 12,
        radius,
      }, {
        blendMode: this.blendMode,
        name: 'arp',
        fillColor: defs.colors.clear,
        interval: 8,
        radius,
      }, {
        blendMode: this.blendMode,
        name: 'chord',
        fillColor: defs.colors.clear,
        interval: 20,
        radius,
      }]),
    }
  }

  draw() {
    this.background.fillColor = defs.colors.white;
    this.foreground.fillColor = defs.colors.clear;
    this.foreground.blendMode = this.blendMode; //'color-dodge';
    this.foreground.opacity = 1;
  }

  update(event: paper.Event) {
    super.update(event);

    const rad = radians((event as any).count);
    this.distort = Math.sin(rad);
  }

  dataHandler(midiData: any) {
    const o = OPZ.decode(midiData);
    // console.log('o', o);

    if (o.action) {
      if (o.action === 'dial') {
        this.foreground?.tweenTo({
          fillColor: defs.colors[o.value.pageColor],
          opacity: 1,
        }, defs.duration);
      } else {
        this.foreground?.tweenTo({
          fillColor: defs.colors.white,
          opacity: 0,
        }, defs.duration);
      }
    }

    if (o.value.value) {
      let distort = clamp(this.distort, .7, 1); //o.value.value / 127;
      let multiplier = -this.distort;
      // let multiplier = (o.velocity > 0)
      //   ? o.velocity / 127
      //   : 1;

      if (o.track === 'kick') {
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          const r = Math.floor(Math.random() * paths.length);

          paths[r].tweenTo({
            fillColor: defs.randomColor(),
          }, defs.duration);

          paths[0].tweenTo({
            fillColor: defs.colors.grey,
          }, this.duration).then(() => {
            paths[0].tweenTo({
              fillColor: defs.colors.clear, //randomColor(),
            }, this.duration);
          });
        });
      }

      if (o.track === 'lead') {
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          paths[1].tweenTo({
            fillColor: defs.randomColor(),
          }, this.duration)
        });
      }
      if (o.track === 'arp') {
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          paths[2].tweenTo({
            fillColor: defs.randomColor(),
          }, this.duration);
        });
      }
      if (o.track === 'chord') {
        // multiplier *= 2;
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          const r = Math.floor(Math.random() * paths.length);

          paths[r].tweenTo({
            fillColor: defs.randomColor(),
            opacity: 1,
          }, this.duration).then(() => {
            paths[r].tweenTo({
              opacity: Math.random(),
            }, this.duration);
          });
        });
      }

      this.noisePaths['synth']?.modulate(distort, multiplier);
    }

    if (o.track === 'stop') {
      this.foreground?.tweenTo({
        fillColor: defs.colors.white,
        opacity: 0,
      }, defs.duration);
      this.background?.tweenTo({
        fillColor: defs.colors.white,
      }, defs.duration);

      for (let key in this.noisePaths) {
        this.noisePaths[key]?.reset();
      }
    }
  }
}