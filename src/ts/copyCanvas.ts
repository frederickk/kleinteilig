interface ShaderDef {
  vertexShader: string;
  fragmentShader: string;
}

// https://www.shadertoy.com/view/wlcBRr
// https://stackoverflow.com/questions/44927327/webgl-javascript-canvas-texture-content-copy-to-another-context-texture-obje
// https://stackoverflow.com/questions/12590685/blend-two-canvases-onto-one-with-webgl
export class CopyCanvas {
  src!: HTMLCanvasElement;
  canvasGl!: HTMLCanvasElement;
  texture!: WebGLTexture;

  private shader_!: ShaderDef;
  private gl_!: WebGLRenderingContext;
  private shaderProgram_!: WebGLProgram;
  private aPosLoc_!: number;
  private aTexLoc_!: number;
  private uResLoc_!: WebGLUniformLocation | null;

  constructor(selector = '#canvas', shader: ShaderDef) {
    this.src = document.querySelector(selector) as HTMLCanvasElement;
    const ctx = this.src.getContext('2d');
    this.shader_ = shader;

    this.canvasGl = document.querySelector('#canvas-gl') as HTMLCanvasElement
    if (!this.canvasGl) {
      this.canvasGl = document.createElement('canvas');
      this.canvasGl.id = 'canvas-gl';
      this.canvasGl.classList.add('canvas-gl');
      document.body.appendChild(this.canvasGl);
    }
    this.canvasGl.height = ctx?.canvas.clientHeight || document.body.clientHeight;
    this.canvasGl.width = ctx?.canvas.clientWidth || document.body.clientWidth;

    this.gl_ = (this.canvasGl.getContext('webgl') as WebGLRenderingContext);

    this.initGL_();
  }

  private initGL_() {
    // Setup GLSL program.
    const vertShader = this.gl_.createShader(this.gl_.VERTEX_SHADER) as WebGLShader;
    this.gl_.shaderSource(vertShader, this.shader_.vertexShader);
    this.gl_.compileShader(vertShader);

    const fragShader = this.gl_.createShader(this.gl_.FRAGMENT_SHADER) as WebGLShader;
    this.gl_.shaderSource(fragShader, this.shader_.fragmentShader);
    this.gl_.compileShader(fragShader);

    this.shaderProgram_ = this.gl_.createProgram() as WebGLProgram;
    this.gl_.attachShader(this.shaderProgram_, vertShader);
    this.gl_.attachShader(this.shaderProgram_, fragShader);
    this.gl_.deleteShader(vertShader);
    this.gl_.deleteShader(fragShader);
    this.gl_.linkProgram(this.shaderProgram_);
    this.gl_.useProgram(this.shaderProgram_);

    // Define attributes.
    this.aPosLoc_ = this.gl_.getAttribLocation(this.shaderProgram_, 'a_position');
    this.aTexLoc_ = this.gl_.getAttribLocation(this.shaderProgram_, 'a_texCoord');

    const positions = new Float32Array([
      0.0,  0.0,
      1.0,  0.0,
      0.0,  1.0,
      0.0,  1.0,
      1.0,  0.0,
      1.0,  1.0,
    ]);
    const texCoordBuffer = this.gl_.createBuffer();
    this.gl_.bindBuffer(this.gl_.ARRAY_BUFFER, texCoordBuffer);
    this.gl_.bufferData(this.gl_.ARRAY_BUFFER, positions, this.gl_.STATIC_DRAW);
    this.gl_.enableVertexAttribArray(this.aTexLoc_);
    this.gl_.vertexAttribPointer(this.aTexLoc_, 2, this.gl_.FLOAT, false, 0, 0);

    // Define uniforms.
    this.uResLoc_ = this.gl_.getUniformLocation(this.shaderProgram_, 'u_resolution');
    this.gl_.uniform3f(this.uResLoc_, this.gl_.drawingBufferWidth, this.gl_.drawingBufferHeight, 1.0);

    const buffer = this.gl_.createBuffer();
    this.gl_.bindBuffer(this.gl_.ARRAY_BUFFER, buffer);
    this.setRectangle_(0, 0, this.canvasGl.width, this.canvasGl.height);
    this.gl_.enableVertexAttribArray(this.aPosLoc_);
    this.gl_.vertexAttribPointer(this.aPosLoc_, 2, this.gl_.FLOAT, false, 0, 0);

    // Create textures.
    this.setupTexture_(this.src, 0, this.shaderProgram_, 'u_image');
    const bayer = new Image();
    bayer.crossOrigin = 'Anonymous';
    bayer.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAEklEQVR42mNg+A+DkyCQgSwRAJbzKQFvL1HGAAAAAElFTkSuQmCC';
    this.setupTexture_(bayer, 1, this.shaderProgram_, 'u_bayer');

    this.gl_.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl_.clearDepth(1.0);
    this.gl_.enable(this.gl_.DEPTH_TEST);
    this.gl_.depthFunc(this.gl_.LEQUAL);
    // this.gl_.clear(this.gl_.COLOR_BUFFER_BIT | this.gl_.DEPTH_BUFFER_BIT);
    this.gl_.drawArrays(this.gl_.TRIANGLES, 0, 6);
  }

  private setupTexture_(srcElem: HTMLCanvasElement | HTMLImageElement,
        unit: number, program: WebGLProgram, uniformName: string) {
    const tex = this.gl_.createTexture() as WebGLTexture;
    if (unit == 0) {
      this.texture = tex;
      this.updateTexture_(srcElem, unit, this.texture);
    } else {
      this.updateTexture_(srcElem, unit, tex);
    }

    this.gl_.texParameteri(this.gl_.TEXTURE_2D, this.gl_.TEXTURE_WRAP_S, this.gl_.REPEAT);
    this.gl_.texParameteri(this.gl_.TEXTURE_2D, this.gl_.TEXTURE_WRAP_T, this.gl_.REPEAT);
    this.gl_.texParameteri(this.gl_.TEXTURE_2D, this.gl_.TEXTURE_MIN_FILTER, this.gl_.NEAREST);
    this.gl_.texParameteri(this.gl_.TEXTURE_2D, this.gl_.TEXTURE_MAG_FILTER, this.gl_.NEAREST);

    const location = this.gl_.getUniformLocation(program, uniformName);
    this.gl_.uniform1i(location, unit);
  }

  private updateTexture_(srcElem: HTMLCanvasElement | HTMLImageElement,
        unit: number, tex: WebGLTexture) {
    this.gl_.activeTexture(this.gl_.TEXTURE0 + unit);
    this.gl_.bindTexture(this.gl_.TEXTURE_2D, tex);
    this.gl_.pixelStorei(this.gl_.UNPACK_COLORSPACE_CONVERSION_WEBGL, this.gl_.NONE);
    this.gl_.pixelStorei(this.gl_.UNPACK_FLIP_Y_WEBGL, true);
    this.gl_.texImage2D(this.gl_.TEXTURE_2D, 0, this.gl_.RGBA, this.gl_.RGBA, this.gl_.UNSIGNED_BYTE, srcElem);
  }

  private setRectangle_(x: number, y: number, width: number, height: number) {
    const x1 = x + width;
    const y1 = y + height;

    const coords = new Float32Array([
      x, y,
      x1, y,
      x, y1,
      x, y1,
      x1, y,
      x1, y1,
    ]);
    this.gl_.bufferData(this.gl_.ARRAY_BUFFER, coords, this.gl_.STATIC_DRAW);
  }

  render(srcElem: HTMLCanvasElement | HTMLImageElement) {
    if (srcElem) {
      this.updateTexture_(srcElem, 0, this.texture);
    } else {
      this.updateTexture_(this.src, 0, this.texture);
    }
  }
}