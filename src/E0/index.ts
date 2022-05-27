import Professor from './models/Professor';
import Student from './models/Student';

let p1 = new Professor('Siri', 'Lorem', 30, 900000, 'Math');
let p3 = new Student('Jorge', 'Ipsum', 18);

console.log(p1.getId());
console.log(p3.getId());
