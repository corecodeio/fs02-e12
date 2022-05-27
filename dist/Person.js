"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, last_name, age, salary, main_class) {
        this.classes = [];
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.salary = salary;
        this.main_class = main_class;
    }
    getFullName() {
        return `${this.name} ${this.last_name}`;
    }
    addClass(className) {
        this.classes.push(className);
    }
    showClasses() {
        console.log(this.classes);
    }
}
exports.default = Person;
