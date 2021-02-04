const vetor1 = [];
const vetor2 = [];
let vetor3 = [];

function somar(vetor1, vetor2) {
    for (let indice = 0; indice < 3; indice++) {
        vetor3[indice] = vetor1[indice] + vetor2[indice]
    }
    console.log(vetor3);
}
somar([1, 2, 3], [4, 5, 6]);