
import {shader, textureBlob} from '../shader/shaderDitherDefs';
// import * as VideoContext from 'videocontext';
import VideoContext from '../videocontext';
import {defs, Sketch, OPZ, paper} from './_sketchBase';

export class _0x18 extends Sketch {
  duration = 500;
  videoCtx!: any;

  setup() {
    (paper.view as any).draw();

    const canvasGl = document.querySelector('#canvas-gl') as HTMLCanvasElement;
    canvasGl.classList.remove('--invisible');
    canvasGl.width = paper.view.element.width;
    canvasGl.height = paper.view.element.height;

    if (canvasGl) {
      this.videoCtx = new VideoContext(canvasGl);
      const bayer = this.videoCtx.image(textureBlob);
      const stream = (paper.view.element as any).captureStream();
      const videoNode = this.videoCtx.video(stream);
      const ditherEffect = this.videoCtx.effect(shader);
      videoNode.start(0);
      videoNode.connect(ditherEffect);
      bayer.connect(ditherEffect);
      ditherEffect.connect(this.videoCtx.destination);

      window.addEventListener('click', () => {
        this.videoCtx.play();
      });
    }
  }

  draw() {
    this.noisePaths['synth']?.modulate(0.8, 1.2);
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
      let distort = 0.9; //o.value.value / 127;
      let multiplier = (o.velocity > 0)
        ? o.velocity / 127
        : 1;

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
