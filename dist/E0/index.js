"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Professor_1 = __importDefault(require("./models/Professor"));
const Student_1 = __importDefault(require("./models/Student"));
let p1 = new Professor_1.default('Siri', 'Lorem', 30, 900000, 'Math');
let p3 = new Student_1.default('Jorge', 'Ipsum', 18);
console.log(p1.getId());
console.log(p3.getId());
