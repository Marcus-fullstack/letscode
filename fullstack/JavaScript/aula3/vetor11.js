let vetor = [];
let num;
for (let i = 0; i < 10; i++) {
    num = Math.floor(Math.random() * 101) + 1;
    vetor.push(num);
} //imprimir 10 numeros sorteados
console.log(vetor);
//pegar os primeiros 4 numeros
let vetorA = vetor.slice(0, 4);
console.log(vetorA);
//pegar os 5 ultimos números
let vetorB = vetor.splice(-5);

console.log(vetorB);
console.log(vetor);
let original = vetor.concat(vetorB);
console.log(original)
    //pegar os indices pares e os indices impares
let indpar = [];
let indimpar = [];

for (i = 0; i < 10; i += 1) {
    if (i % 2 == 0) {
        indpar.push(original[i]);
    } else {
        indimpar.push(original[i]);
    }
}
console.log(indpar);
console.log(indimpar);
console.log(original);
let reverso = [];
let cont = original.length
console.log(cont)
for (let cont = original.length - 1; cont >= 0; cont--) {
    reverso.push(original[cont]);
}
console.log(reverso); //ou pode começar do indice 0 e adicionando no inicio com unshift
let vetorF = original.splice(5);
let reversoF = []
console.log(vetorF);
console.log(original); //original cortado 5 ultimos
for (let i = 0; i < vetorF.length; i++) {
    reversoF.unshift(vetorF[i])
}
console.log('Os 5 primeiros números reversos', reversoF)
console.log('Os 5 ultimos numeros reversos', original.reverse())