import * as paper from 'paper';
import {BluetoothHelper} from './ts/bluetoothHelper';
import {MidiHelper} from './ts/midiHelper';
// import {_0x14 as Sketch} from './ts/sketch/0x14';
// import {_0x15 as Sketch} from './ts/sketch/0x15';
// import {_0x16 as Sketch} from './ts/sketch/0x16';
import {_0x17 as Sketch} from './ts/sketch/0x17';

export class Kleinteilig {
  private canvas_: HTMLCanvasElement;
  private sketch_: Sketch | null;

  constructor() {
    // Instantiate Web MIDI in global Window.
    window.Midi = new MidiHelper();
    window.Midi.connect();

    // Instantiate web Bluetooth in global Window.
    window.Bluetooth = new BluetoothHelper({
      filters: [{
        services: [BluetoothHelper.MIDI_UUID],
      }],
    });
    const connectBluetooth = document.querySelector('#connect-bluetooth');
    connectBluetooth?.addEventListener(('click'), () => {
      window.Bluetooth.connect();
    });

    this.canvas_ = document.querySelector('#canvas') as HTMLCanvasElement;

    paper.install(window);
    paper.setup(this.canvas_);
    window.addEventListener('DOMContentLoaded', this.setup.bind(this));

    this.sketch_ = new Sketch();

    this.attach_();
  }

  attach_() {
    window.Midi.callback = (data: any) => {
      this.sketch_?.dataHandler(data);
    }
    window.Bluetooth.callback = (data: any) => {
      this.sketch_?.dataHandler(data);
    }
    paper.view.onResize = (event: paper.Event) => {
      console.log('resize', event);
    }
  }

  setup() {
    paper.view.onFrame = (_event: paper.Event) => {
      this.sketch_?.update(_event);
      paper.view.update();
    };

    this.sketch_?.setup();
    this.draw();

    paper.view.update();
  }

  draw() {
    this.sketch_?.draw();
    (paper as any).view.draw();
  }
}

new Kleinteilig();