let vetor = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//sem map
function embaralhar(array) {
    let valoratual = array.length;
    let valortemporario;
    let valoresrandomizados;
    while (valoratual !== 0) {
        valoresrandomizados = Math.floor(Math.random() * valoratual);
        valoratual -= 1;
        valortemporario = array[valoratual];
        array[valoratual] = array[valoresrandomizados];
        array[valoresrandomizados] = valortemporario;
    }

    return array;
}

let vetor_embaralhado = embaralhar(vetor);
let valor_aleatorio = vetor_embaralhado[9];
let elementos_aleatorios = vetor_embaralhado;
//console.log(valor_aleatorio)
//console.log(elementos_aleatorios) //20 elementos na unha sem usar o map()

//com map

let array = new Array(20).fill(1)
let sorteio_elemento = Math.floor(Math.random() * 21) - 10;
let numeros_randomizados;

function sorteio() {
    sorteio_elemento = Math.floor(Math.random() * 21) - 10;
    return sorteio_elemento
}
sorteio()
console.log(sorteio_elemento);
numeros_randomizados = array.map(num => sorteio(sorteio_elemento));
console.log(numeros_randomizados);