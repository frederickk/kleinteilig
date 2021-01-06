export class CanvasChar {
  private canvas_: HTMLCanvasElement | null;
  private context_: CanvasRenderingContext2D | null | undefined;
  private monitor_: HTMLElement | null;

  chars = '█▓▒░';

  constructor(canvasSelector: string) {
    this.canvas_ = document.querySelector(canvasSelector);
    this.context_ = this.canvas_?.getContext('2d');
    this.monitor_ = document.querySelector('.monitor');

    this.assignChar_(0);
  }

  /**
   * Assigns ASCII block character based on brightness value.
   * @param val  brightness value
   * @return block char class value
   */
  private assignChar_(val: number) {
    if (val < 0.25) {
      return this.chars.charAt(0);
    } else if (val > 0.25 && val < .25) {
      return this.chars.charAt(1);
    } else if (val > 0.5 && val < .75) {
      return this.chars.charAt(2);
    } else if (val > 0.75 && val < 1) {
      return this.chars.charAt(3);
    }

    return ' ';
  }

  /**
   * Injects block character into DOM based on brightness value.
   */
  private brightnessToChar_() {
    if (this.canvas_ && this.context_ && this.monitor_) {
      this.monitor_.innerText = '';

      const size = {
        height: Math.min(this.canvas_.height, 96),
        width: Math.min(this.canvas_.width, 128),
      };
      const img = {
        height: this.canvas_.height,
        width: this.canvas_.width,
        pixels: this.context_.getImageData(0, 0, this.canvas_.width, this.canvas_.height),
      };
      const inc = {
        height: Math.ceil(img.height / size.height) * 2,
        width: Math.ceil(img.width / size.width) * 2,
      };

      // console.log(size, img, inc);

      for (let y = 0; y < img.height; y+= inc.height) {
        for (let x = 0; x < img.width; x+= inc.width) {
          let i = (y * 4) * img.width + x * 4;
          let avg = (img.pixels.data[i] + img.pixels.data[i + 1] + img.pixels.data[i + 2]) / 3;
          avg /= 255;
          // console.log(x, y, 'avg', avg);

          this.monitor_.innerText += this.assignChar_(avg);
          if (x === img.width - inc.width - 1) {
            this.monitor_.innerText += '\r\n';
          }
        }
      }
    }
  }

  draw() {
    this.brightnessToChar_();
  }
}
