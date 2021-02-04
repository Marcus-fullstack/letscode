const readline = require('readline-sync');
let num = parseInt(readline.question('Numero que deseja fatorar: '));
let cont = num;
let fatorial = 1;

while (cont >= 1) {
    fatorial *= cont;
    cont = cont - 1;

}

console.log(num, '! = ', fatorial);