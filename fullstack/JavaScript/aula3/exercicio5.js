let cont = 1;

let numero = 1;
let soma = 0;
while (cont <= 1000) {
    soma += 1 / numero;
    numero *= 2;
    cont++;
}
console.log(soma);