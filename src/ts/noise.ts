import {fade, grad, lerp, scale} from './utils';

/**
 * This is a port of Ken Perlin's Java code.
 * The original Java code is at http://cs.nyu.edu/%7Eperlin/noise/
 * http://asserttrue.blogspot.de/2011/12/perlin-noise-in-javascript_31.html
 *
 * @param  x  x-coordinate in noise space.
 * @param  y  y-coordinate in noise space (optional).
 * @param  z  z-coordinate in noise space (optional).
 * @return Float value between 0.0 and 1.0.
 */
export class Noise {
  private permutation_ = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
  private x_!: number;
  private y_!: number;
  private z_!: number;
  private p_!: Array<number>;

  constructor(x = 0, y = 0, z = 0) {
    this.x_ = x;
    this.y_ = y;
    this.z_ = z;

    this.p_ = new Array(512)
    for (let i = 0; i < 256; i++) {
      this.p_[256 + i] = this.p_[i] = this.permutation_[i];
    }
  }

  perlin() {
    const x = Math.floor(this.x_) & 255;
    // find unit cube that...
    const y = Math.floor(this.y_) & 255;
    // contains point
    const z = Math.floor(this.z_) & 255;

    this.x_ -= Math.floor(this.x_); // find relative x, y, z...
    this.y_ -= Math.floor(this.y_); // of point in cube
    this.z_ -= Math.floor(this.z_);

    const u = fade(this.x_);
    // compute fade curves...
    const v = fade(this.y_);
    // for each x, y, z
    const w = fade(this.z_);

    const A = this.p_[x] + y;
    const AA = this.p_[A] + z;
    const AB = this.p_[A + 1] + z;
    // hash coordinates of...
    const B = this.p_[x + 1] + y;
    const BA = this.p_[B] + z;
    const BB = this.p_[B + 1] + z; // the 8 cube corners

    return scale(
      lerp(w,
        lerp(v, lerp(u, grad(this.p_[AA], this.x_, this.y_, this.z_), // and add..
        grad(this.p_[BA], this.x_ - 1, this.y_, this.z_)), // blended...
        lerp(u, grad(this.p_[AB], this.x_, this.y_ - 1, this.z_), // results...
        grad(this.p_[BB], this.x_ - 1, this.y_ - 1, this.z_))), // from 8...
        lerp(v, lerp(u, grad(this.p_[AA + 1], this.x_, this.y_, this.z_ - 1), // corners...
          grad(this.p_[BA + 1], this.x_ - 1, this.y_, this.z_ - 1)), // of cube
          lerp(u, grad(this.p_[AB + 1], this.x_, this.y_ - 1, this.z_ - 1),
            grad(this.p_[BB + 1], this.x_ - 1, this.y_ - 1, this.z_ - 1)
          )
        )
      )
    );
  }
}