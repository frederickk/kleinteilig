import {Sketch, OPZ, defs} from './_sketchBase';

export class _0x14 extends Sketch {
  draw() {
    this.background.fillColor = defs.colors.white;
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
      let distort = o.value.value / 127;
      let multiplier = (o.velocity > 0)
        ? o.velocity / 127
        : 1;

      if (o.track === 'kick' && o.velocity > 0) {
        multiplier *= 4;
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          paths[0].tweenTo({
            fillColor: defs.colors.grey,
          }, defs.duration / 2).then(() => {
            paths[0].tweenTo({
              fillColor: defs.randomColor(),
            }, defs.duration / 2);
          });
        });
      }
      if (o.track === 'snare' || o.track === 'perc') {
        multiplier *= 2;
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          const r = Math.floor(Math.random() * paths.length);

          paths[r].tweenTo({
            fillColor: defs.randomColor(),
          }, defs.duration);
        });
      }

      if (o.track === 'bass' || o.track === 'arp') {
        multiplier *= 2;
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          for (let path of paths) {
            path.data.radius += 1;
          }
        });
      }
      if (o.track === 'lead' || o.track === 'chord') {
        multiplier *= 2;
        defs.opzInputHandler(this.noisePaths['synth'], (paths: Array<paper.Path>) => {
          for (let path of paths) {
            path.data.radius -= 1;
          }
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