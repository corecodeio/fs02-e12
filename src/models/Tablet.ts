import Touchable from '../interfaces/Touchable';
import Audible from '../interfaces/Audible';
export default class Tablet implements Touchable, Audible {
  position: [number, number] = [0, 0];
  volumen: number = 0;

  constructor(pos: [number, number]) {
    this.position = [...pos];
  }

  tap(): void {
    const [x, y] = this.position;
    console.log(`Position[Tablet]: ${x}, ${y}`);
  }

  play(song: string) {
    console.log(`Playing: ${song} 🎶`);
  }
}
