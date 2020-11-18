const readline = require('readline-sync');
const N1 = parseInt(readline.question("N1:"));
const N2 = parseInt(readline.question("N2:"));
const N3 = parseFloat(readline.question("N3:"));
const resp1 = N1 * 2 * N2 / 2;
const resp2 = N1 * 3 + N3;
const resp3 = Math.pow(N3, 3);
console.log(resp1, resp2, resp3);