let vetor = [1, 2, 3, 6, 5, 4, 7, 8, 9, 1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9];
let indice;
let quantpar = 0;
let quantimpar = 0;

for (indice = 0; indice < vetor.length; indice++) {
    if (vetor[indice] % 2 == 0) {
        quantpar++;
    } else {
        quantimpar++;
    }

}
console.log('De ', vetor.length, 'números, ', quantpar, 'deles são pares');