/*Crie uma classe Funcionario cujos atributos são nome e e-mail, horas trabalhadas e salário. Guarde as horas trabalhadas como um objeto (sem necessariamente utilizar classes) cujas chaves são o mês em questão e, como outro objeto, guarde o salário por hora relativo ao mês em questão. Crie um método que retorna o salário mensal do funcionário.*/
class Funcionarios {
    constructor(nome, email, salario, horas) {
        this.nome = nome;
        this.email = email;
        this.horas = horas;
        this.salario = salario;

    }
    salario_mensal() {
        const qtd = this.horas.horas;
        const valor = this.salario.valor;
        return qtd * valor;
    }
}
const horas = {
    mes: 'Janeiro',
    horas: 160
}
const salario = {
    valor: 35
}
const funcionario1 = new Funcionarios('Marcus', 'marcusrnm@hotmail.com', salario, horas)
console.log(funcionario1.nome)
console.log(funcionario1.email)
const salario_total = funcionario1.salario_mensal();

console.log(`O salario mensal do ${funcionario1.nome} foi ${salario_total.toFixed(2)} reais`)