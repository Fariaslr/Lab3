import { func1 } from "./modulo1";
import { func2 } from "./modulo2";
import { TLivro } from "./type/livro";
import { TPessoa } from "./type/pessoa";

console.log(func1(), func2());

const aluno : TPessoa = {
    firstName: "Lucas",
    lastName: "Farias",
    fullName() : string {
        return this.firstName + " " + this.lastName;
    }
}

console.log(aluno.fullName())

const vidasSecas : TLivro = {
    titulo: "Vidas secas",
    autores: ["Autor 1", "Autor 2"],
    editora :"Editora Brasil"
}

console.log(vidasSecas)