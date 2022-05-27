"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Person {
    constructor(name, last_name, age) {
        this.blood_type = 'A';
        this.name = name;
        this.last_name = last_name;
        this.age = age;
        this.id = (0, uuid_1.v4)();
    }
    getId() {
        return this.id;
    }
    getFullName() {
        return `${this.name} ${this.last_name}`;
    }
    setBloodType(btype) {
        this.blood_type = btype;
    }
}
exports.default = Person;
