/*numero primo*/
let divisiveis = []
let numero;

function verificar(numero) {
    numero = Math.floor(Math.random() * 101);
    console.log(numero);
    for (let cont = 1; cont <= numero; cont++) {
        if (numero % cont === 0) {
            divisiveis.push(cont);
        }
    }
}
verificar(numero)
console.log('O numero ', numero, "é divisivel por", divisiveis);
let condicao = (divisiveis.length > 2) ? 'não é primo' : "é primo";
console.log(condicao);