
// import {shader} from '../twojs-shader-defs';
import {shader} from '../gameboy-shader-defs';
import {Sketch, Two} from './_sketchBaseTwojs';

export class _0x18tj extends Sketch {
  init() {
    // @ts-ignore
    Two[Two.Types.webgl].Utils.shaders.vertex = shader.vertex;
    // @ts-ignore
    Two[Two.Types.webgl].Utils.shaders.fragment = shader.fragment;
  }

  draw() {
    const circle = this.two_.makeCircle(72, 100, 50);
    const rect = this.two_.makeRectangle(213, 100, 100, 100);

    circle.fill = '#FF8000';
    circle.stroke = 'orangered';
    circle.linewidth = 5;

    rect.fill = 'rgb(0, 200, 255)';
    rect.opacity = 0.75;
    rect.noStroke();
  }

  dataHandler(_midiData: any) {
    // const o = OPZ.decode(midiData);
    // console.log('o', o);
  }
}
