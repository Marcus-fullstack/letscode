let vetor = [];

function somarElementos(vetor) {
    let cont = 0;
    while (cont < vetor.length) {
        vetor[cont] = vetor.push();
        return vetor[cont]
        cont++;
    }
}
somarElementos([7, 8, 9, 10]);
console.log(vetor)

const soma = (acumulador, valoratual) => acumulador + valoratual;
let adicao = vetor.reduce(soma);
console.log(adicao);
//let media = adicao / vetor.length
//console.log(media);