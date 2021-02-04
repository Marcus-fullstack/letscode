/*
 q3 - Crie uma classe Conta que representa uma conta bancária cujo saldo e senha de acesso são informações privadas (protegidas). Adicione também os métodos depositar e sacar.
 */
class Conta {
    constructor(nome, senha, saldo) {
        this.nome = nome;
        this._senha = senha; //daria para digitar a senha aqui
        this._saldo = saldo.toFixed(2);


    }
    get senha() { return this._senha; } //senha do cliente usada pra comparar
    get saldo() { return this._saldo; }
    set senha(novasenha) {
        let senhacliente; //daria pra colocar um for para limitar que o cliente
        if (senhacliente !== novasenha) throw "A senha do cliente não confere com a senha do cliente não armazenada";
        this._senha = novasenha;
        let login = "`Bem vindo ${this._nome}, você está conectado na sua conta.`"

        console.info(login)
    }
    set saldo(novosaldo) {
            this._saldo = novosaldo;
        }
        //quantia
    depositar(quantia) {
        let valoratual = parseFloat(this._saldo) + parseFloat(quantia)
        this._saldo = valoratual
        return this._saldo;
    }
    sacar(quantia) {
        return this._saldo - quantia;

    }

}
const cliente = new Conta("Marcus", 1234, 2000.00);
console.log(cliente.nome);
console.log(cliente._senha);
console.log(cliente._saldo);
const resultsaldo = cliente.depositar(500);
const saldoret = cliente.sacar(100)
console.log(resultsaldo);
console.log(saldoret);