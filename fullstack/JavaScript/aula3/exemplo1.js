const readline = require('readline.sync');
let num = parseInt(readline.question('Digite um número: '));
cont = 0;
while (cont < num) {
    console.log(cont);
    cont += 1;
}
console.log('fim do programa');