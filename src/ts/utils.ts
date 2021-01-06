// import * as paper from 'paper';

export const fade = (t: number): number => {
  return t * t * t * (t * (t * 6 - 15) + 10);
};

export const lerp = (t: number, a: number, b: number): number => {
  return a + t * (b - a);
};

export const grad = (hash: number, x: number, y: number, z: number): number => {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h == 12 || h == 14 ? x : z;

  return ((h & 1) == 0 ? u : -u) + ((h & 2) == 0 ? v : -v);
};

export const scale = (n: number): number => {
  return (1 + n) / 2;
};

/**
 * @param val  the value to constrain
 * @param min  minimum limit
 * @param max  maximum limit
 * @return original value that is not less than the
 *         minimum and no greater than the maximum
 */
export const clamp = (val: number, min: number, max: number): number => {
  return (val < min) ? min : ((val > max) ? max : val);
}

/**
 * @param val  the incoming value to be converted
 * @param istart  lower bound of the value's current range
 * @param istop  upper bound of the value's current range
 * @param ostart  lower bound of the value's target range
 * @param ostop  upper bound of the value's target range
 * @return re-mapped value
 */
export const map = (val: number, istart: number, istop: number, ostart: number, ostop: number): number => {
  return ostart + (ostop - ostart) * ((val - istart) / (istop - istart));
};

/**
 * @return val as degree
 */
export const degrees = (val: number): number => {
  return val * (180 / Math.PI);
};

/**
 * @return val as radians
 */
export const radians = (val: number): number => {
  return val * (Math.PI / 180);
};

/**
 * Stepper animation loop.
 */
export const stepper = (duration: number, callback: (i: number, t: number) => boolean): number => {
  let tick = 1;
  let cb = false;
  let timer = window.setInterval(() => {
    if (callback) {
      cb = callback(tick, fade(tick / duration));

      if (cb === true) {
        window.clearInterval(timer);

        return;
      }
    }

    ++tick;
  }, 1);

  return timer;
}