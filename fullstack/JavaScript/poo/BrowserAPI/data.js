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

const finishedhours = starthours.replace(hours, endhours)
console.log(finishedhours)