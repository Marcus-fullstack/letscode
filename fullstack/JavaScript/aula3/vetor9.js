//exercicio10
let notas = [];
const readline = require('readline.sync');
let cont = 1;
while (cont <= 4) {
    notas = readline.question("Digite a ", cont, "ª nota: ")
    cont += 1
}
console.log(notas[cont]);