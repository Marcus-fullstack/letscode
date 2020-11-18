const readline = require('readline-sync');
let num = parseInt(readline.question('Numero que deseja fatorar: '));
let cont = num;
let fatorial;

while (cont >= 1) {
    fatorial = num * cont;
    cont = cont - 1;

}
console.log(num, '! = ', fatorial);