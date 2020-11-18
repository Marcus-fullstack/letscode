let readline = require('readline.sync');
console.log("Digite 5 numeros: ")
let cont = 1;
let num;
let numeros = [];
while (cont <= 5) {
    num = readline.question("N", cont, ' : ');
    numeros = num[cont];
    console.log(numeros);
    cont += 1
}
//exercicio9
//let novovetor = parseInt(numeros);
//console.log(novovetor)