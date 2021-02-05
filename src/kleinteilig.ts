import {BluetoothHelper} from './ts/bluetoothHelper';
import {MidiHelper} from './ts/midiHelper';

export class Kleinteilig {
  protected canvas_: HTMLCanvasElement;

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
  }

  attach_(sketch: any) {
    window.Midi.callback = (data: any) => {
      sketch?.dataHandler(data);
    }
    window.Bluetooth.callback = (data: any) => {
      sketch?.dataHandler(data);
    }
  }

}
