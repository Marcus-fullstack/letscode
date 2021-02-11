class Queue {
    constructor() {
        let list = [];
        this.push = value => {
            list = [...list, value];
        }
        this.pop = () => {
            const toDelet = list.splice(0, 1)[0];
            return toDelet;
        }
        this.pushQueue = (objectQueue) => {
            list = [...list, this.push(objectQueue)]
        }
        this.popQueue = () => {
            const deletconcatlist = list.this.pushQueue.splice(0, 1)[0];
            return deletconcatlist;
        }
        this.toString = () => {
            return list.join(', ');
        }
    }
}
const q1 = new Queue();
const q2 = new Queue();
q1.push('10');
q1.push('20');
q1.push('30');
q2.push('15');
q2.push('25');
q2.push('35');
q1.pop();
console.log(`Adicionei 3 itens na fila 1 e removi apenas o primeiro item: ${q1.toString()}`);
console.log(`Adicionei 3 itens na fila 2: ${q2.toString()}`);
q1.push(q2);
console.log(`Concatenei a fila 1 com a fila 2: ${q1.toString(q2)}`);
q1.pop(q2);
console.log(`Removi o primeiro item da lista concatenada: ${q1.toString(q2)}`);
q2.push(q1)
console.log(`Note que quando ultilizamos o push invertendo a ordem de concatenação, o resultado foi o mesmo: ${q1.toString(q2)}, só interfere se mudar a ordem da toString()`);
console.log(`Note que com pop, invertento a  ordem de q1 e q2 ou invertendo a ordem da toString(), o resultado da concatenação fica diferente: ${q1.toString(q2)}`)