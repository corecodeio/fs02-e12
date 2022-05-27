import Audible from '../interfaces/Audible';
import Callable from '../interfaces/Callable';
import Touchable from '../interfaces/Touchable';
export default class Iphone implements Touchable, Audible, Callable {
  position: [number, number] = [0, 0];
  volumen: number = 0;
  secterCode: string = '0';
  dynamic: (secter: number) => string;
  number: number;

  constructor(
    x: number,
    y: number,
    number: number,
    myDynamicImplementation: (secter: number) => string
  ) {
    this.position[0] = x;
    this.position[1] = y;
    this.number = number;
    this.dynamic = myDynamicImplementation;
  }

  tap(): void {
    const [x, y] = this.position;
    console.log(`Position[Iphone]: ${x}, ${y}`);
  }

  play(song: string) {
    console.log(`Playing: ${song} 🎶`);
  }

  genrateDynamicCode() {
    this.secterCode = this.dynamic(3);
  }

  call(zone_code: string, number_to_call: number) {
    console.log(`Calling: ${zone_code} ${number_to_call} from ${this.number}`);
  }
}
