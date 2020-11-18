let vetor1 = [2, 3, 4];
let vetor2 = [-3, 5, 6];
let mult = [];
let soma = [];

for (let i = 0; i < 3; i++) {
    mult = vetor1[i] * vetor2[i];
    console.log(mult)
    soma.push(mult)

}
console.log(soma);
let total = soma.reduce((total, soma) => total + soma, 0);
console.log('O produto escalar dos vetores é ', total);