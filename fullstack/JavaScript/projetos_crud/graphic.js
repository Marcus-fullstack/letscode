constquickchart = require("quickchart-js");
const bodybuilder = require('bodybuilder')
const readline = require("readline-sync");
console.log(bodybuider)
console.log("Montagem de exercicios");
let treino = [{ treinoA: "Perna, Biceps e Abdominal Superior" }, { treinoB: "Peito, Costas e Lombar" }, { treinoC: "Ombro, Triceps e Abdominal Lateral" }];

let container = document.getElementById("container");
container.innerHTML = [
    '<table>',
    '<thead>',
    '<tr>',
    '<th>Treino A: Peito, Costas e Lombar</th>',
    '<th>Treino B: Perna, Biceps e Abdominal</th>',
    '<th>Treino C:Ombro,Perna e Abdominal </th>',
    '<th>Presenca</th>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tr>',
    '<td>Exercicios</td>',
    '<td>data</td>',
    '<td>data</td>',
    '<td>data</td>',
    '</tr>',
    '<tr>',
    '<td>2</td>',
    '<td>data</td>',
    '<td>data</td>',
    '<td>data</td>',
    '</tr>',
    '<tr>',
    '<td>3</td>',
    '<td>data</td>',
    '<td>data</td>',
    '<td>data</td>',
    '</tr>',
    '</tbody>',
    '</table>'
].join("\n");
console.log(treino)
do {
    let objetivo = readline.question("")
    let nome_exercicio = readline.question("Qual exercicio voce pretende fazer: ");
    let serie = parseInt(readline.question("Numero de série: "))
    let quant = parseInt(readline.question("Numero de quantidade: "))
    let peso = parseInt(readline.question("Peso: "))
}
while (nome_exercicio === 0)
let treinoA = [{ exercicio: nome_exercicio, serie: serie, quantidade: quant, carga: peso }]
let treinoB = [{ exercicio: nome_exercicio, serie: serie, quantidade: quant, carga: peso }]
let treinoC = [{ exercicio: nome_exercicio, serie: serie, quantidade: quant, carga: peso }];
// a nova data será acionada quando o usuario entrar no programa