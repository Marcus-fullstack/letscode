//Crie uma classe Cliente cujos atributos são nome, idade e e-mail. Construa um método que imprima as informações tal como abaixo:
/*Nome: Fulano de Tal
Idade: 40
E-mail: fulano@mail.com*/
class Cliente {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    imprimirDados() {
        return `Informações basicas dos clientes:
Nome: ${this.nome}
Idade: ${this.idade} 
E-mail: ${this.email}`
    }
}
const cadastro = new Cliente('Marcus', 44, 'marcusrnm@hotmail.com');
console.log(cadastro.imprimirDados())