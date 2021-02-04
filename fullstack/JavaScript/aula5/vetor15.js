const readline = require('readline-sync');
let nome = readline.question("Qual é o seu nome? ");
let idade = parseInt(readline.question("Qual sua idade? "))
let quant = parseInt(readline.question("Quantas provas você fez? "))
let notas = [];
let cont = 1;
let media;
let condicao = true;
while (cont <= quant) {
    let prova = parseFloat(readline.question("Qual foi sua nota nas provas: "))
    notas.push(prova)
    cont++
}
let crescente = notas.sort(function(a, b) {
    return a - b;
});
let novanota = crescente;
let firstnota = novanota.shift();
let lastnota = novanota.pop()
console.log(novanota);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
media = novanota.reduce(reducer) / novanota.length;

if (media >= 5) {
    condicao = true;
} else {
    condicao = false;
}
let dados = [nome, idade, notas.toFixed(2), media.toFixed(2), condicao];
console.log(dados)