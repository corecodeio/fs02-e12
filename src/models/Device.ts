import { v4 as uuidv4 } from 'uuid';

export default class Device {
  private serialNumber: string;

  constructor() {
    this.serialNumber = uuidv4();
  }

  public getSerialNumber() {
    return this.serialNumber;
  }
}
