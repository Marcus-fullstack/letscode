const segundoMinMax = (vetor) => {
    let limpo_vetor = [];
    for (let num of vetor) {
        if (!limpo_vetor.includes()) limpo_vetor.push(num)
    }
    limpo_vetor.sort((a, b) => a - b)
    if (limpo_vetor.length >= 2) {
        return [limpo_vetor[1], limpo_vetor[limpo_vetor.length - 2]];
    } else {
        return null
    }
}
console.log(segundoMinMax([1, -5, 0, 5, 9]))