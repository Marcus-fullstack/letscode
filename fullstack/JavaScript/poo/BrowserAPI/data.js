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

const data = new Date();
data.toDateString('pt-BR'); //tem que mudar
const dia = data.getUTCDate();
const mes = (data.getUTCMonth() + 1);
const ano = data.getUTCFullYear();
console.log(dia)

console.log(`${dia}/${mes}/${ano}`)
const time = new Date().toLocaleTimeString('pt-BR');
console.log(time)