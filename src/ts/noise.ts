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
  static perlin(x = 0, y = 0, z = 0) {
    const permutation_ = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];

    const p = new Array(512)
    for (let i = 0; i < 256; i++) {
      p[256 + i] = p[i] = permutation_[i];
    }

    const x_ = Math.floor(x) & 255;
    // find unit cube that...
    const y_ = Math.floor(y) & 255;
    // contains point
    const z_ = Math.floor(z) & 255;
    x -= Math.floor(x); // find relative x, y, z...
    y -= Math.floor(y); // of point in cube
    z -= Math.floor(z);

    const u = fade(x);
    // compute fade curves...
    const v = fade(y);
    // for each x, y, z
    const w = fade(z);

    const A = p[x_] + y_;
    const AA = p[A] + z_;
    const AB = p[A + 1] + z_;
    // hash coordinates of...
    const B = p[x_ + 1] + y_;
    const BA = p[B] + z_;
    const BB = p[B + 1] + z_; // the 8 cube corners

    return scale(
      lerp(
        w,
        lerp(v, lerp(u, grad(p[AA], x, y, z), // and add..
        grad(p[BA], x - 1, y, z)), // blended...
        lerp(u, grad(p[AB], x, y - 1, z), // results...
        grad(p[BB], x - 1, y - 1, z))), // from 8...
        lerp(v, lerp(u, grad(p[AA + 1], x, y, z - 1), // corners...
          grad(p[BA + 1], x - 1, y, z - 1)), // of cube
          lerp(u, grad(p[AB + 1], x, y - 1, z - 1),
            grad(p[BB + 1], x - 1, y - 1, z - 1)
          )
        )
      )
    );
  }
}