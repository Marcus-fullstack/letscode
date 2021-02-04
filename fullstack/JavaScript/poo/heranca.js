class Pessoa {
    constructor(nome, email, fone) {
        //para o conceito de encapsulamento
        //let nome, email, fone;
        //colocar os getter e os setters dos atributos e chamar pelo get
        this.nome = nome;
        this.email = email;
        this.fone = fone;
    }
    toString()
}
class PessoaFisica extends Pessoa {
    constructor(nome, email, fone, cpf) {
        super(nome, email, fone);
        this.cpf = cpf;
    }
}
class PessoaJuridica extends Pessoa {
    constructor(nome, email, fone, cnpj, razaosocial) {
        super(nome, email, fone);
        this.cnpj = cnpj;
        this.razaosocial = razaosocial;
    }
}
let pessoaf = new PessoaFisica("Marcus", "Marcus@hotmail", "999999999", "1234567890");
let pessoaj = new PessoaFisica("Marcus ltda", "Marcus@servidor", "999999999", "1234567890", "ti solutions");
console.log(pessoaf)