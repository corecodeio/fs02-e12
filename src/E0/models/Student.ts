import Person from './Person';

export default class Student extends Person {
  private classes: string[] = [];

  addClass(className: string): void {
    this.classes.push(className);
  }

  setClasses(newClasses: string[]): void {
    this.classes = [...newClasses];
  }

  showClasses(): void {
    console.log(this.classes);
  }

  getId(): string {
    return `S-${super.getId()}`;
  }
}
