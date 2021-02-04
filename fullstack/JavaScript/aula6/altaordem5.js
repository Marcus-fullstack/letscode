const par = num => num % 2 === 0;
const filtro = (filtragem, vetor) => {
    const vetor_filtro = [];
    for (let num of vetor) {
        if (filtragem(num)) vetor_filtro.push(num)
    }
    return vetor_filtro
}
console.log(filtro(par, [1, 2, 3, 4, 5, 6, 7, 8, 9]))