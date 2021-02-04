let vetor = [1, 2, 3]
let mult = [];

function multiplicador(x) {
    for (let cont = 0; cont < vetor.length; cont++) {
        mult[cont] = vetor[cont] * x;
    }
    console.log(mult)
}
multiplicador(3)