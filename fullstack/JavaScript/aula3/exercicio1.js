const readline = require('readline-sync');
let numero = parseInt(readline.question('Digite um número inteiro:'));
while (numero != 0) {
    console.log(numero);
    numero = parseInt(readline.question('Digite outro número inteiro, para finalizar o programa digite 0: '));
}
console.log('Voce digitou o número 0');