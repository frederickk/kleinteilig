import * as Two from 'twojs-ts';
// import {shader} from '../shader/shaderTwojsDefs';
import {shader} from '../shader/shaderGameboyDefs';
import {defs, Sketch} from './_sketchBase.twojs';

export class _0x18t extends Sketch {
  gl_!: WebGLRenderingContext;

  init() {
    // @ts-ignore
    Two[Two.Types.webgl].Utils.shaders.vertex = shader.vertex;
    // @ts-ignore
    Two[Two.Types.webgl].Utils.shaders.fragment = shader.fragment;
  }

  setup(_two: Two) {
    super.setup(_two);

    this.background!.fill = defs.colors.white;

    for (let key in this.noisePaths) {
      for(let np of this.noisePaths[key]) {
        np.modulate(.8, 1);

        for(let p of np.paths) {
          p.fill = defs.randomColor();
        }
      }
    }
  }

  draw() {
    // // create texture.
    // const bayer = new Image();
    // bayer.onload = () => {
    //   this.gl_ = (this.two_ as any).renderer.ctx;
    //   const tex = this.gl_.createTexture() as WebGLTexture;

    //   this.gl_.activeTexture(this.gl_.TEXTURE0 + 1);
    //   this.gl_.bindTexture(this.gl_.TEXTURE_2D, tex);
    //   this.gl_.pixelStorei(this.gl_.UNPACK_COLORSPACE_CONVERSION_WEBGL, this.gl_.NONE);
    //   this.gl_.pixelStorei(this.gl_.UNPACK_FLIP_Y_WEBGL, true);
    //   this.gl_.texImage2D(this.gl_.TEXTURE_2D, 0, this.gl_.RGBA, this.gl_.RGBA, this.gl_.UNSIGNED_BYTE, bayer);

    //   this.gl_.texParameteri(this.gl_.TEXTURE_2D, this.gl_.TEXTURE_WRAP_S, this.gl_.REPEAT);
    //   this.gl_.texParameteri(this.gl_.TEXTURE_2D, this.gl_.TEXTURE_WRAP_T, this.gl_.REPEAT);
    //   this.gl_.texParameteri(this.gl_.TEXTURE_2D, this.gl_.TEXTURE_MIN_FILTER, this.gl_.NEAREST);
    //   this.gl_.texParameteri(this.gl_.TEXTURE_2D, this.gl_.TEXTURE_MAG_FILTER, this.gl_.NEAREST);

    //   const program = (this.two_ as any).renderer.program;
    //   const location = this.gl_.getUniformLocation(program, 'u_bayer');
    //   this.gl_.uniform1i(location, 1);
    // };
    // bayer.src = textureBlob;

    // FIX: Image does not appear with WebGL renderer.
    // const texture = new (Two as any).Texture('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Pluto-01_Stern_03_Pluto_Color_TXT.jpg/300px-Pluto-01_Stern_03_Pluto_Color_TXT.jpg', () => {
    //     const shape = this.two_.makeRectangle(
    //       this.two_.width / 2,
    //       this.two_.height / 2,
    //       texture.image.width,
    //       texture.image.height
    //     );
    //     shape.noStroke();
    //     shape.fill = texture;
    // });

  }

  dataHandler(_midiData: any) {
    // const o = OPZ.decode(midiData);
    // console.log('o', o);
  }
}