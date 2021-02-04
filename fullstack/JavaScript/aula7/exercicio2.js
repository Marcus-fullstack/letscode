const readline = require("readline-sync");
let vetor1 = [];
let vetor2 = [];
let n_v1;
let n_v2;
do {
    n_v1 = parseInt(readline.question("Digite alguns numeros: "))
    vetor1.push(n_v1)
}
while (n_v1 >= 0);
vetor1.pop()

do {
    n_v2 = parseInt(readline.question("Digite alguns numeros: "))
    vetor2.push(n_v2)
}
while (n_v2 >= 0);
vetor2.pop()

console.log(vetor1)
console.log(vetor2)
let produto_vetor = [];
/*
if (vetor1.length <= vetor2.length) {
    for (let indice = 0; indice < vetor1.length; indice++) { //como transformar o for para o map
        produto_vetor = vetor1[indice] * vetor2[indice];
        console.log(produto_vetor)

    }
} else {
    for (let indice = 0; indice < vetor2.length; indice++) {
        produto_vetor = vetor1[indice] * vetor2[indice];
        console.log(produto_vetor)

    };
}


*/
function produto(v1, v2) {
    return ((v1.length <= v2.length) ? v1 : v2).map((num, index) => v1[index] * v2[index])

};
produto_vetor = produto(vetor1, vetor2)
console.log(produto_vetor)