import * as paper from 'paper';
import {randomObj} from '../utils';
import {NoisePath} from '../noisePath';

export interface ColorsObject {
  [key: string]: paper.Color;
}

/** Predefined color constants. */
export let colors: ColorsObject = {
  'red': new paper.Color(1, .3, .4, .7),
  'redorange': new paper.Color(.89, .27, .05, .8),
  'yellow': new paper.Color(.70, .51, .19, .8),
  'darkyellow': new paper.Color(1, .9, 0, .7),
  'darkorange': new paper.Color(.82, .27, .05, .8),
  'green': new paper.Color(.29, 1, .7, .7),
  'blue': new paper.Color(.04, .34, .61, .8),
  'darkblue': new paper.Color(0, 0, 1, .8),
  'pink': new paper.Color(.92, .49, .61, .8),
  'white': new paper.Color(1, 1, 1, .8),
  'grey': new paper.Color(.88, .88, .86, .8),
  'darkgrey': new paper.Color(.13,	.13, .12, .8),
  'black': new paper.Color(.02, .02, 0, .9),
  'clear': new paper.Color(1, 1, 1, 0),
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

