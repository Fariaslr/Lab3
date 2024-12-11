function runJS(){
   
    const message = "Resultado: "
    const result = document.getElementById("num1").value

    console.log("Square=> " + square(result))
    document.querySelector('#output').innerHTML = message.concat(result)
}

function square (n){
    return n * n;
}

var lab3 = {
    disciplina: "Laboratório de Programação 3",
    mensagem: ()=> alert("Bem-Vindo!!"),
};

function addSquares (a , b) {
    const square = (x)=> {
        return x * x;
    }
    return square (a) + square (b);
}

var cores = ["vermelho", "verde", "azul"];
cores.forEach ((cor) => {
    console.log(cor)
});
