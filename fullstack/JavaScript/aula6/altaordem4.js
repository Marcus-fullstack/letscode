const dobro = x => 2 * x
const cubo = x => x ** 3

function triplo(x) {
    return 3 * x
}
console.log(dobro(10))
console.log(cubo(10))
const mapa = (funcao, vetor) => {
    const vetor_transformado = []
    for (let elemento of vetor) {
        vetor_transformado.push(funcao(elemento))
    }
    return vetor_transformado
}
const vetor = [1, 2, 3, 6, 9, 0, -5];
console.log(mapa(dobro, vetor))
console.log(mapa(cubo, vetor))
console.log(mapa(triplo, vetor))

/*sintaxe de funcao*/
/*
function nome_funcao(paramentro) {
    return algo
}*/
/*const nome_funcao = paramentro => algo*/