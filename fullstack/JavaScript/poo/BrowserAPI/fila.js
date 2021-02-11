class Queue {

    constructor() {
        let list = [];
        this.push = value => {
            list = [...list, value];
        }
        this.pop = () => {
            const popped = list.splice(0, 1)[0];
            return popped;
        }
        this.toString = () => {
            return list.join(', ');
        }
    }
}
const q = new Queue();
q.push('a');
q.push('b');
q.push('c');
q.push('d');
console.info('Conceito de Fila usa-se o Sistema FIFO: First Input, First Output: ')
console.log(q.toString());
q.pop();
console.log(q.toString());