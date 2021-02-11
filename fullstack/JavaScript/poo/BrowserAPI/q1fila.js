class Queue {

    constructor() {
        let list = [];
        this.add = value => {
            list = [...list, value];
        }
        this.remove = () => {
            const popped = list.splice(0, 1)[0];
            return popped;
        }
        this.toString = () => {
            return list.join(`, `);
            //poderia criar um indice e somar 1 colocando o valor de indice
        }
    }
}

function SepararImpressao(underline) {
    return underline;
}

const todoList = new Queue();
todoList.add('Lavar o carro');
todoList.add('Levar o cachorro para passear');
todoList.add('Fazer o almoço');
todoList.add('Lavar a louça');
console.info('Conceito de Fila usa-se o Sistema FIFO: First Input, First Output: ');
console.log(`\n`);
console.log(`1: ${todoList.toString()}`);
console.log(SepararImpressao('______________________________________________________'))
todoList.remove();
console.log(`2: ${todoList.toString()}`);
console.log(SepararImpressao('______________________________________________________'))
todoList.remove();
console.log(`3: ${todoList.toString()}`);
console.log(SepararImpressao('______________________________________________________'))
todoList.add('Escovar o dente');
console.log(`4: ${todoList.toString()}`);