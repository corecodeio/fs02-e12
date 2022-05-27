import Runnable from './interfaces/Runnable';
import Iphone from './models/Iphone';
import Kindle from './models/Kindle';
import Touchable from './interfaces/Touchable';
import Callable from './interfaces/Callable';
import Tablet from './models/Tablet';
import Audible from './interfaces/Audible';
/**
 * ---------------
 *  ELECTROTIENDA
 * ---------------
 *
 * 1. Cada dispositivo tiene que tener un id
 * 2. Mi tienda tiene 3 diferentes dispositivos
 *  2.1 Iphone
 *  2.2 Kindle
 *  2.3 Tablet
 *
 * 3. Un Iphone:
 *  3.1 Sonido
 *  3.2 LLamadas
 *  3.3 Touch
 * 4. Un Kindle:
 *  4.1 Touch
 * 5. Una Tablet:
 *  5.2 Sonido
 *  5.1 Touch
 *
 * Propiedades
 * --------------------
 * 1. Sonido // Audible
 *  - Attr: Volumen
 *  - Meth: Play() ---> Playing a song...
 *
 * 2. Touch // Touchable
 *  - Attr: X,Y ==> position
 *  - Meth: Tap()  ---> Tap detected in x,y
 *
 * 3. Llamada // Callable
 *  - Attr: numero
 *  - Meth: Call() ---> Calling from number
 *
 */

export default class Main implements Runnable {
  addToPosition(device: Touchable): void {
    const [x, y] = device.position;
    device.position[0] = x + 1;
    device.position[1] = y + 1;
  }

  callToGt(device: Callable) {
    device.call('+502', 1234567890);
  }

  start() {
    const x = (n: number) => `${n + 4}`;
    const y = (n: number) => `${n + 100}`;

    const iphone1 = new Iphone(0, 0, 12345, x);
    const iphone2 = new Iphone(0, 0, 6789, y);

    const kindle = new Kindle(0, 0);

    const tablet = new Tablet([3, 1]);

    this.addToPosition(iphone1);
    this.addToPosition(kindle);
    this.addToPosition(tablet);

    this.callToGt(iphone1);
    this.callToGt(iphone2);
    // this.callToGt(tablet);
    // this.callToGt(kindle);

    // console.log(iphone1.secterCode);
    // console.log(iphone2.secterCode);
    // iphone1.genrateDynamicCode();
    // iphone2.genrateDynamicCode();
    // console.log(iphone1.secterCode);
    // console.log(iphone2.secterCode);

    const stack: Audible[] = [iphone1, iphone2, tablet];

    stack.forEach((device: Audible) => device.play('Despacito'));
  }
}
