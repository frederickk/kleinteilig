import {Sketch, OPZ, defs} from './_sketchBase';
import {radians} from '../utils';

export class _0x16 extends Sketch {
  colors = {
    'red': new paper.Color(.81, .1, .09, .8),
    'yellow': new paper.Color(.95, .74, .03, .8),
    'blue': new paper.Color(.60, .77, .86, .8),
  };

  count = 0;
  strokeWidthMax = 0;

  setup() {
    this.background.fillColor = defs.colors.white;

    for (let key in this.noisePaths) {
      this.noisePaths[key].modulate(.7, .5);

      for(let p of this.noisePaths[key].paths) {
        this.strokeWidthMax = p.bounds.width;

        p.blendMode = 'overlay';
        // p.strokeColor = utils.randomObj(this.colors);
        p.strokeColor = defs.randomColor();
      }
    }
  }

  draw() {
    for (let key in this.noisePaths) {
      for(let p of this.noisePaths[key].paths) {
        p.strokeWidth = 2 + Math.abs(this.strokeWidthMax * Math.sin(radians(this.count)));
        // p.dashArray = [len / 360, 36 * Math.cos(radians(this.count))];
      }
    }
  }

  update(_event?: paper.Event) {
    super.update(_event);

    // this.count = (_event as any).count;
    if ((_event as any).count % 4 === 0) {
      this.count++;
    }

    this.draw();
  }

  dataHandler(midiData: any) {
    const o = OPZ.decode(midiData);
    // console.log('o', o);

    if (o.action) {
      if (o.action === 'dial') {
      }
    }

    if (o.value.value) {
      if (o.track === 'kick' && o.velocity > 0) {
        this.count = 1;
        // defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
        //   for(let p of paths) {
        //     p.strokeWidth = 20;
        //   }
        // });
      }
      if (o.track === 'snare' || o.track === 'perc') {
      }

      if (o.track === 'bass' || o.track === 'chord') {
        this.count = 16;
        this.distort += 0.01;
        this.multiplier -= Math.random() / 10;

        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          const r = Math.floor(Math.random() * paths.length);

          paths[r].tweenTo({
            fillColor: defs.randomColor(),
          }, defs.duration);
        });
      }
      if (o.track === 'lead' || o.track === 'arp') {
        this.distort -= 0.01;
        this.multiplier += Math.random() / 10;

        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          const r = Math.floor(Math.random() * paths.length);

          paths[r].tweenTo({
            fillColor: defs.randomColor(),
          }, defs.duration);
        });
      }

      if (o.track === 'perform') {
      }

      this.noisePaths['synth']?.modulate(this.distort, this.multiplier);
    }

    if (o.track === 'stop' || this.distort < -1.25 || this.distort > 1.25) {
      this.distort = .8;
    }

    if (o.track === 'stop' || this.multiplier < -1.1 || this.multiplier > 1.1) {
      this.multiplier = 1;
    }
  }
}