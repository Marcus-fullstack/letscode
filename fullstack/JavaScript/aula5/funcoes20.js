const filtrarVetor = (vetor, numero) => {
    let vetor_filtrado = [];
    for (let num of vetor) {
        if (num > numero) vetor_filtrado.push(num)
    }
    return vetor_filtrado
}
console.log(filtrarVetor([10, 20, 30, 40, 50, 60, 80], 75))