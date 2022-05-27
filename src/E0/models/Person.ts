import { v4 as uuidv4 } from 'uuid';

export default class Person {
  name: string;
  last_name: string;
  age: number;
  blood_type: string = 'A';
  private id: string;

  constructor(name: string, last_name: string, age: number) {
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.id = uuidv4();
  }

  getId(): string {
    return this.id;
  }

  getFullName(): string {
    return `${this.name} ${this.last_name}`;
  }

  setBloodType(btype: string) {
    this.blood_type = btype;
  }
}
