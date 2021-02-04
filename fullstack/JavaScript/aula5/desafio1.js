//desafio do cpf
function valida_cpf(cpf) {
    let digitos = cpf.split('');
    for (let i in digitos) {
        digitos[i] = parseInt(digitos[i]);
    }
    let x = 0;
    for (let i = 0; i < 9; i++) {
        x += digitos[i] * (10 - i)
    }
    let resto = x * 10 % 11
    let valido = (resto === 10 ? 0 : resto) === digitos[9];
    if (valido) {
        let x = 0;
        for (let i = 0; i < 10; i++) {
            x += digitos[i] * (11 - i)
        }
        resto = x * 10 % 11;
        valido = (resto === 10 ? 0 : resto) === digitos[10];
        return valido;
    } else {

        return false;
    }
}
console.log(valida_cpf('18348168826'));
/*const readline = require("readline-sync");
let cpf = readline.question("Digite seu cpf: ");*/