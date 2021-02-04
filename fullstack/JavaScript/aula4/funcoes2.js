function soma(n1, n2) {
    return n1 + n2;
}

function subtracao(n1, n2) {
    return n1 - n2;
}

function produto(n1, n2) {
    return n1 * n2;
}

function divisao(n1, n2) {
    return n1 / n2;
}
let adicao = soma(5, 3);
let menos = subtracao(5, 3);
let mult = produto(5, 3);
let div = divisao(5, 3).toFixed(3);
console.log('soma = ', adicao, " subtracao = ", menos, ' multiplicacao = ', mult, ' divisao = ', div);