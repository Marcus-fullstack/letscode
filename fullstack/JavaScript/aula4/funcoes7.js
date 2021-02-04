let soma = 0;
let numeros = [];
let maximo;

function quantidade() {
    let contador = 0;

    while (contador < 10) {
        numeros[contador] = Math.floor(Math.random() * 101);
        numeros.push()
        contador++;

    }
    console.log(numeros);
    maximo = Math.max(numeros[contador]);
    return maximo;

}
quantidade()
console.log(maximo);