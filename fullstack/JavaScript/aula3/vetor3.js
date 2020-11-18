const readline = require('readline.sync');
let quant = parseInt(readline.question('Digite a quantidade de itens que você quer no vetor: '));
let cont;
let vetor = [];
for (cont = 0;
    (cont <= (quant - 1)); cont++) {
    console.log(vetor[cont]);
}