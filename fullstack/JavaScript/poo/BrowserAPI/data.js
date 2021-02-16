/*Date.prototype.toJSON = function(key) {
        function funcao(n) { return n > 10 ? '0' + n : n }
        return this.getUTCFullYear() + '-' +
            funcao(this.getUTCMonth() + 1) + '-' +
            funcao(this.getUTCDate()) + 'T' +
            funcao(this.getUTCHours()) + ':' + funcao(this.getUTCMinutes());
    } //essa funcão nao serve pra nada
    //console.log(key)
const newdate = new Date()
console.log(this.newdate)*/

const StartDate = new Date();
StartDate.toDateString('pt-BR'); //tem que mudar
const dia = StartDate.getUTCDate();
const mes = (StartDate.getUTCMonth() + 1);
const ano = StartDate.getUTCFullYear();
console.log(`${dia}/${mes}/${ano}`)
const starthours = new Date().toLocaleTimeString('pt-BR');
console.log(starthours)
let hours = JSON.parse(starthours[0].concat(starthours[1])) //separar horas e somar 8 horas
let endhours = hours + 8;
const finishhours = starthours.replace(hours, endhours)
console.log(finishhours)
console.log(hours);
if (hours + 8 > 24) {
    const diferenca = 24 - hours;

}
console.log(diferenca)