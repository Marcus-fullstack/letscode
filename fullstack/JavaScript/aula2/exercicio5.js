const readline = require('readline-sync');
const peso = parseFloat(readline.question('Digite seu peso:'));
const altura = parseFloat(readline.question('Digite seu altura:'));
const imc = peso / Math.pow(altura, 2);
console.log(imc);