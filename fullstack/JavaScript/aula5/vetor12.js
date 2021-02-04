let vetor = [];
let numeros = [];
let quant = 0;
for (let contador = 0; contador < 10; contador++) {
    vetor.push(Math.floor(Math.random() * 101));
}
console.log(vetor);
for (let num of vetor) {
    if (num > 50) {
        numeros.push(vetor[num])
        quant++;
    }

}
console.log(numeros) //esta como undefined
console.log(quant)