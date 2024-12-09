"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modulo1_1 = require("./modulo1");
const modulo2_1 = require("./modulo2");
console.log((0, modulo1_1.func1)(), (0, modulo2_1.func2)());
const aluno = {
    firstName: "Lucas",
    lastName: "Farias",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(aluno.fullName());
const vidasSecas = {
    titulo: "Vidas secas",
    autores: ["Autor 1", "Autor 2"],
    editora: "Editora Brasil"
};
console.log(vidasSecas);
