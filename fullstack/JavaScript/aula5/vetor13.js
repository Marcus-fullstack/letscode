let vetor = [];
let max;
let min;
let soma = 0;
let media;
for (let contador = 0; contador < 10; contador++) {
    vetor.push(Math.floor(Math.random() * 101));
    soma += vetor[contador]

}
media = soma / 10;
console.log(vetor);
console.log(soma, media)
for (let num of vetor) {
    max = Math.max(vetor[num])
    min = Math.min(vetor[num])
}

console.log(max)
console.log(min)