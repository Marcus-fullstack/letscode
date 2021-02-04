//deu errado esse exercicio fazer por partes
let numeros = [];
let num;

function sorteio(num) {
    for (let indice = 0; indice < 10; indice++) {
        num = Math.floor(Math.random() * 101);
    }
    return numeros.push(num)

}

sorteio(num)
console.log(numeros);