/*O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
arr.map(callback[, thisArg])
callback
Função cujo retorno produz o elemento do novo Array. Recebe três argumentos:
valorAtual
O valor do elemento original do Array de origem. 
indice
O índice do elemento atual que está sendo processado no array.
array
O Array de origem.
thisArg
Opcional. Valor a ser utilizado como o this no momento da execução da função callback.*/

const vetor = ['10', '5', '-3', '8', '0']

function stringToInt(str) {
    return parseInt(str)
}
const v2 = vetor.map(stringToInt)
const v3 = vetor.map(str => parseInt(str))
console.log(v2)
console.log(v3)

//separar em um outro arquivo
const v1 = [10, 2, 0, 7, 4]

const v4 = v1.map((num, index) => index % 2 === 0) ? num ** 2 : num ** 3;
console.log(v4)
const v5 = [10, 20, 25, 50, 200];
const v6 = v5.map((num, index, vector) => num / vector.lenght)
console.log(v6)