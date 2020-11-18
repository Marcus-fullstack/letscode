const readline = require('readline-sync');
const raio = parseInt(readline.question("Qual é o raio da circunferência:"));
const area = Math.PI * raio * 2;
console.log(area.toFixed(2));