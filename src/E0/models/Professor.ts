import Person from './Person';

export default class Professor extends Person {
  salary: number;
  main_class: string;

  constructor(
    name: string,
    last_name: string,
    age: number,
    salary: number,
    main_class: string
  ) {
    super(name, last_name, age); // llamando al constructor del padre
    this.salary = salary;
    this.main_class = main_class;
  }

  getId(): string {
    return `P-${super.getId()}`;
  }
}
