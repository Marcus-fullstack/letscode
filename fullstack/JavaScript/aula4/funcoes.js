//1 exemplo


function sayHello(name) {
    console.log('Hello,', name)
}
sayHello('name');
//2 exemplo
function somar(a, b = 12) {
    let c = a + b;
    return c;
}
resultado = somar(5, 8);
console.log(resultado);
resultado = somar(5);
console.log(resultado);

// 3exemplo
const somar2 = function(a, b) {
    return a + b;
}
let resultado = somar2(2, 3);
console.log(resultado);
//4exemplo
const somar3 = (a, b) => {
    return a + b;
}
resp = somar3(1, 2)
console.log(resp);
//5 exemplo
const sayHello2 = name => console.log('Hello,', name);
sayHello2('MARCUS');
//6exemplo
function fatorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * fatorial(num - 1);
    }
}
console.log(fatorial(5));
//7 exemplo
function array_sum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + array_sum(array.slice(1))
    }
}
console.log(array_sum([]));
console.log(array_sum([1]));
console.log(array_sum([1, 2, 3, 4, 5, 6]));