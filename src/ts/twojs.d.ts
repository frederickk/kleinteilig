import * as Two from 'twojs-ts';

declare module 'twojs-ts' {
  export interface ConstructionParams {
    type?: Two.Types;
    width?: number;
    height?: number;
    autostart?: boolean;
    fullscreen?: boolean;
    domElement?: HTMLCanvasElement;
  }
}