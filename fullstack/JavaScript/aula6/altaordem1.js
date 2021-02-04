function sum(n1, n2) {
    return n1 + n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function subtrate(n1, n2) {
    return n1 - n2;
}

function product(n1, n2) {
    return n1 * n2;
}

function calcular(operator, n1, n2) {
    return operator(n1, n2)
}
console.log(calcular(sum, 10, 5))
console.log(calcular(subtrate, 10, 5))
console.log(calcular(product, 10, 5))
console.log(calcular(divide, 10, 5))