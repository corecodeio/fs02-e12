import Touchable from '../interfaces/Touchable';

export default class Kindle implements Touchable {
  position: [number, number] = [0, 0];

  constructor(x: number, y: number) {
    this.position[0] = x;
    this.position[1] = y;
  }

  tap(): void {
    const [x, y] = this.position;
    console.log(`Position[Kindle]: ${x}, ${y}`);
  }
}
