const readline = require('readline-sync');
const f = readline.question('Qual a temperatura:');
const c = (5 * f - 32) / 9;
console.log(c.toFixed(1));