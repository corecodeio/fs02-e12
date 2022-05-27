"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Professor extends Person_1.default {
    constructor(name, last_name, age, salary, main_class) {
        super(name, last_name, age);
        this.salary = salary;
        this.main_class = main_class;
    }
    getId() {
        return `P-${super.getId()}`;
    }
}
exports.default = Professor;
