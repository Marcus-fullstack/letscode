//Exercicio1
const readline = require('readline.sync');
const nota1 = parseFloat(readline.question('Nota 1:'));
const nota2 = parseFloat(readline.question('Nota 2:'));
const nota3 = parseFloat(readline.question('Nota 3:'));
const nota4 = parseFloat(readline.question('Nota 4:'));
const media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(media);