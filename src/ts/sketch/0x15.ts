import {Sketch, OPZ, paper, defs} from './_sketchBase';

export class _0x15 extends Sketch {
  colors = {
    'pink': new paper.Color(.88, .65, .88, .8),
    'purple': new paper.Color(.17, .16, .43, .8),
    'bronze': new paper.Color(.52, .47, .40, .8),
    'white': defs.colors.white,
    'grey': defs.colors.grey,

    'green': new paper.Color(.40, .45, .33, .8).multiply(1.5),
    'darkgreen': new paper.Color(.19, .22, .18, .8).multiply(1.5),
    'darkblue': new paper.Color(.16, .18, .21, .8).multiply(1.5),
    'peach': new paper.Color(.62, .45, .46, .8).multiply(1.5),
    'darkpeach': new paper.Color(.50, .22, .19, .8).multiply(1.5),
  };

  draw() {
    this.background.fillColor = {
      // @ts-ignore
      gradient: {
        stops: [
          new paper.GradientStop(defs.colors.white, 0),
          new paper.GradientStop(defs.colors.white, 1),
        ],
        radial: true,
      },
      origin: this.background.position,
      destination: this.background.bounds.rightCenter,
    };
    this.foreground.fillColor = defs.colors.white;
    this.foreground.blendMode = 'color-dodge';
    this.foreground.opacity = 0;
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
      if (o.track === 'kick' && o.velocity > 0) {
        this.multiplier = 1;
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          const r = Math.floor(Math.random() * paths.length);

          paths[r].tweenTo({
            fillColor: defs.colors.white,
          }, defs.duration);
        });
      }
      if (o.track === 'snare' || o.track === 'perc') {
        this.multiplier -= 0.01;
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          const r = Math.floor(Math.random() * paths.length);

          paths[r].blendMode = 'multiply';
          paths[r].tweenTo({
            fillColor: defs.randomArr([
              this.colors.pink,
              this.colors.purple,
              // utils.colors.green,
              defs.colors.blue,
              defs.colors.darkblue,
              // utils.colors.grey,
            ]),
          }, defs.duration);
        });
      }

      if (o.track === 'bass' || o.track === 'arp') {
        this.distort = 1;
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          const r = Math.floor(Math.random() * paths.length);

          paths[r].blendMode = 'overlay';
          paths[r].tweenTo({
            fillColor: defs.randomArr([
              this.colors.bronze,
              this.colors.grey,
              // utils.colors.red,
              defs.colors.redorange,
              // utils.colors.yellow,
              defs.colors.darkorange,
            ]),
          }, defs.duration);
        });
      }
      if (o.track === 'lead' || o.track === 'chord') {
        this.distort += 0.01;
      }
      if (o.track === 'perform') {
        this.distort += Math.random() / 10;
        this.multiplier += Math.random() / 10;

        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          for (let p of paths) {
            p.blendMode = 'multiply';
            p.tweenTo({
              fillColor: new paper.Color(1, 1, 1, 0),
            }, defs.duration / 2);
          }
        });
      }

      this.noisePaths['synth']?.modulate(this.distort, this.multiplier);
    }

    if (o.track === 'stop') {
      for (let key in this.noisePaths) {
        this.noisePaths[key]?.reset();
      }

      defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
        for (let p of paths) {
          p.blendMode = 'multiply';
          p.tweenTo({
            fillColor: new paper.Color(1, 1, 1, 0),
          }, defs.duration);
        }
      });
    }
  }
}