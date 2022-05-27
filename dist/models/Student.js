"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Student extends Person_1.default {
    constructor() {
        super(...arguments);
        this.classes = [];
    }
    addClass(className) {
        this.classes.push(className);
    }
    setClasses(newClasses) {
        this.classes = [...newClasses];
    }
    showClasses() {
        console.log(this.classes);
    }
    getId() {
        return `S-${super.getId()}`;
    }
}
exports.default = Student;
