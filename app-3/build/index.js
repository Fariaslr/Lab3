"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverse_1 = require("./func/reverse");
let months = [
    {
        key: 'Jan',
        value: 1
    },
    {
        key: 'Feb',
        value: 2
    },
    {
        key: 'March',
        value: 3
    },
    {
        key: 'April',
        value: 4
    },
    {
        key: 'June',
        value: 5
    }
];
console.log(months);
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = (0, reverse_1.reverse)(numbers);
console.log("Números reversos: " + reversedNumbers);
let days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
let reversedDays = (0, reverse_1.reverse)(days);
console.log("Dias reversos: " + reversedDays);
