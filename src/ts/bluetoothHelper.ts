declare global {
  interface Window {
    Bluetooth: any;
  }
}

export class BluetoothHelper {
  // https://www.midi.org/specifications-old/item/bluetooth-le-midi
  static MIDI_UUID = '03b80e5a-ede8-4b33-a751-6ce34ec4c700';
  static MIDI_CHAR_UUID = '7772e5db-3868-4112-a1a9-f2669d106bf3';

  private id_: BluetoothServiceUUID | undefined;
  private name_: string | undefined;
  private config_: RequestDeviceOptions = {
    acceptAllDevices: true,
  };

  callback: Function | undefined;

  constructor(config: RequestDeviceOptions) {
    if (config) {
      this.config_ = config;
    }
  }

  private bluetoothReady_(device: BluetoothDevice): BluetoothRemoteGATTServer {
    console.log(`🎹 ${device.name}`);

    // TODO(frederickk): Type this appropriately.
    return (device.gatt?.connect() as any);
  }

  private bluetoothServices_(service: BluetoothRemoteGATTServer) {
    this.id_ = service.device.id;
    this.name_ = service.device.name;
    console.log(`📝 ${this.id_} - ${this.name_}`);

    return service.getPrimaryServices();
  }

  private bluetoothServer_(services: Array<BluetoothRemoteGATTService>) {
    console.log(services);

    services.forEach(service => {
      // TODO(Frederickk): Make this user adjustable.
      this.startBleMIDIService_(service, BluetoothHelper.MIDI_CHAR_UUID);
    });

    return Promise.resolve();
  }

  private async startBleMIDIService_(service: BluetoothRemoteGATTService, uuid: BluetoothServiceUUID) {
    console.log(`⚡️ ${uuid}`);
    let characteristic = await service.getCharacteristic(uuid);
    await characteristic.startNotifications();
    characteristic.addEventListener('characteristicvaluechanged', this.onEvent_.bind(this));
  }

  private onEvent_(event: Event) {
    const data = (event.target as any)?.value;
    const out = [];

    for (let i = 0; i < data.buffer.byteLength; i++) {
      let val = data.getUint8(i);
      out.push(val);
    }

    // Slice off the first two bits.
    if (this.callback && out.length >= 3) {
      this.callback(out.slice(Math.max(out.length - 3, 0)));
    }
  }

  async connect() {
    await (navigator as Navigator).bluetooth
    .requestDevice(this.config_)
    .then(
      (device: BluetoothDevice) => this.bluetoothReady_(device))
    .then(
      (server: BluetoothRemoteGATTServer) => this.bluetoothServices_(server))
    .then(
      (services: Array<BluetoothRemoteGATTService>) => this.bluetoothServer_(services));
  }
}