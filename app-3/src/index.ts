import { reverse } from "./func/reverse";
import { Permuter } from "./permuter";
import { TDisciplina, TPair } from "./type/pair"

let months: TPair<string, number>[] = [
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

let numbers : number [] = [1,2,3,4,5]
let reversedNumbers: number[] = reverse(numbers)

console.log("Números reversos: " + reversedNumbers)

let days : string [] = ["Dom","Seg","Ter","Qua","Qui","Sex","Sab"]
let reversedDays: string[] = reverse(days)

console.log("Dias reversos: " + reversedDays)

let disciplinas:TDisciplina[] = [
    {codigo:1,nome:"Lógica"},
    {codigo:1,nome:"Lógica"},
    {codigo:1,nome:"Lógica"}
]

const perm = new Permuter(disciplinas)
console.log(perm.items)
console.log(perm.permute(0,2))