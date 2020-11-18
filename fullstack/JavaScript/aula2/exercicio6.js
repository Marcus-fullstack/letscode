const readline = require('readline-sync');
const salario = parseFloat(readline.question('Qual seu salario: R$ '));
const nsalario = (salario * 1.15).toFixed(2);
console.log('Seu salário é R$', nsalario);