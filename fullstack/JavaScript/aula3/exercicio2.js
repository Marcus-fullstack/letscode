const readline = require('readline-sync');
let numero = parseInt(readline.question('Digite qualquer número inteiro:'));
let cont = 1;
while (cont <= numero) {
    console.log(cont);
    cont++;
}