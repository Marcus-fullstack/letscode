let numeros = [];

function quantidade(num) {
    let contador = 0;

    while (contador < num) {
        numeros[contador] = Math.floor(Math.random() * 101);
        numeros.push()
        contador++;
    }
    console.log(numeros);
}
quantidade(4)
const soma = (acumulador, valoratual) => acumulador + valoratual;
let media = numeros.reduce(soma) / numeros.length;
console.log(media)