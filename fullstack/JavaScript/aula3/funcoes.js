/*function sayHello(name) {
    console.log('Hello,', name)
}
sayHello('Marcus');

function somar(a, b = 12) {
    let c = a + b;
    return c;
}
resultado = somar(5, 8);
console.log(resultado);
resultado = somar(5);
console.log(resultado);
*/
/*
const somar2 = function(a, b) {
    return a + b;
}
let resultado = somar2(2, 3);
console.log(resultado);
const somar3 = (a, b) => {
    return a + b;
}
resp = somar3(1, 2)
console.log(resp);
const sayHello2 = name => console.log('Hello,', name);
sayHello2('MARCUS');

function fatorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * fatorial(num - 1);
    }
}
console.log(fatorial(5));

function array_sum(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array[0] + array_sum(array.slice(1))
    }
}
console.log(array_sum([]));
console.log(array_sum([1]));
console.log(array_sum([1, 2, 3, 4, 5, 6]));*/
/*
function dobro(num) {
    let x = 2 * num;
    return x;
}
let resultado = dobro(5);
console.log(resultado);

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

function welcome(name) {
    console.log("welcome, ", name)
}
welcome("Marcus");*/

/*
function tempo(nome, horario) { deu errado
    if (0 < horario < 12) {
        return console.log("Bom Dia,", nome, "ainda é ", horario[0], "horas");
    } else if (12 <= horario < 18) {
        return console.log("Boa Tarde,", nome, "são ", horario[0], "horas");
    } else {
        return console.log("Boa Noite,", nome);
    }

}
tempo('Marcus', 17)*/

/*
function numero(num) {
    if (num % 2 == 0) {
        console.log('True');
    } else {
        console.log('False');
    }
}
numero(4)
*/

//deu errado esse exercicio
/*let numeros = [];

function sorteio(num) {
    for (let indice = 0; indice < 10; indice++) {
        numeros = Math.floor(Math.random() * 101);
        return numeros.push(num);
    }
}
console.log(sorteio(numeros));*/

let soma = 0;
let numeros = [];

function quantidade(num) {
    let contador = 0;

    while (contador < num) {
        numeros = Math.floor(Math.random() * 101);
        numeros.push()
        console.log(numeros);
        contador++;

    }
}