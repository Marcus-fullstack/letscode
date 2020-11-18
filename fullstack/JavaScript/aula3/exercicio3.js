const readline = require('readline-sync');
let idade;
let salario;
let genero;
do {
    idade = parseInt(readline.question('Idade: '));
    console.log('Digite a Idade correta: ')
} while (idade < 0 || idade > 150);
console.log('Sua idade e', idade);
do {
    salario = parseFloat(readline.question("R$ "));
} while (salario <= 0);
console.log('Salario: R$ ', salario);
do {
    genero = (readline.question('Digite M para masculino, F para Feminino e O para outro: '));
} while (genero != 'M' && genero != 'F' && genero != '0')
console.log('genero: ', genero);