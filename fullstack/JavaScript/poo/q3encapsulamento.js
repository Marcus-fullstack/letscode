class Conta {
    constructor(nome, conta, senha, saldo) {
        this.nome = nome; //public
        this._conta = conta; //private
        this._senha = senha; //private
        this._saldo = saldo //private
    }
    getnome() { return this.nome }
    setnome(novonome) { this.nome = novonome }
    get conta(novaconta) {
        if (isNaN(novaconta)) throw "A conta precisa ser número"
        this._conta = novaconta;
    }
    get depositar() {
        return this._saldo;
    }
    set depositar(valor) {
        this._saldo += valor
    }
    get sacar() {
        return this._saldo;
    }
    set sacar(retirada) {
        if (this.saldo > retirada) {
            this._saldo -= retirada;
        } else {
            console.log("Saldo Insuficiente")
        }
    }
}