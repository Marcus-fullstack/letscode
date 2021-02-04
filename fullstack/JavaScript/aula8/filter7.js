const numeros = [1, 2, 3, 2, 1, 3, 3, 5, 4, 6];
const resp = numeros.filter((num, index, vetor) => vetor.indexOf(num) === index)
console.log(resp)