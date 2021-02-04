const notas = [8, 7, 6, 10];

const notasFormatado = notas.reduce((textoAtual, notaAtual, indiceAtual) => {
    return textoAtual + `${indiceAtual + 1}º Bimestre: ${notaAtual}\n`;
}, '');
console.log(notasFormatado);
const notasBase10 = notas.map(nota => nota * 10);
const notasVerdes = notas.filter(nota => nota >= 7);
const somaNotas = notas.reduce((somaAtual, notaAtual) => somaAtual + notaAtual);

// console.log(notasBase10);
// console.log(notasVerdes);
// console.log(somaNotas);

// let notasFormatado = '';

// for (let idx in notas) {
//     notasFormatado += `${parseInt(idx) + 1}º Bimestre: ${notas[idx]}\n`;
// }

// console.log(notasFormatado);