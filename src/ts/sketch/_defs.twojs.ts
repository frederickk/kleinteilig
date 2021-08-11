import {randomObj} from '../utils';
import {NoisePath} from '../noisePath';

export interface ColorsObject {
  [key: string]: string;
}

/** Predefined color constants. */
export let colors: ColorsObject = {
  'red': 'rgba(255, 76, 102, .4)',
  'redorange': 'rgba(226, 68, 13, .4)',
  'yellow': 'rgba(178, 127, 28, .4)',
  'darkyellow': 'rgba(255, 229, 0, .4)',
  'darkorange': 'rgba(209, 69, 13, .4)',
  'green': 'rgba(74, 255, 178, .4)',
  'blue': 'rgba(10, 87, 155, .4)',
  'darkblue': 'rgba(0, 0, 255, .4)',
  'pink': 'rgba(234, 124, 97, .4)',
  'white': 'rgba(255, 255, 255, .4)',
  'grey': 'rgba(224, 224, 219, .4)',
  'darkgrey': 'rgba(33,	33, 30, .4)',
  'black': 'rgba(.02, .02, 0, .9)',
  'clear': 'rgba(255, 255, 255, 0)',
};

/** Predefined duration in ms. */
export let duration = 250;

/** Handler for incoming OP-Z MIDI data. */
export const opzInputHandler = (path: NoisePath | undefined, callback: Function | null) => {
  if (path && callback) {
    callback(path.paths);
  }
}

/** @return Random color. */
export const randomColor = () => {
  return randomObj(colors);
}

