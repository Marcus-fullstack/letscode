const StartDate = new Date();

StartDate.toDateString('pt-BR'); //tem que mudar
const dia = StartDate.getUTCDate();
const mes = (StartDate.getUTCMonth() + 1);
const ano = StartDate.getUTCFullYear();

const starthours = new Date().toLocaleTimeString('pt-BR');
console.log(`"Data":${dia}/${mes}/${ano}, "Hora de Entrada": ${starthours}`);
//aqui tem que fazer uma correcao para as horas ficar com 2 digitos
let hours = JSON.parse(starthours[0].concat(starthours[1])) //separar horas e somar 8 horas
let endhours = hours + 8;
console.log(hours.lenght())
if (endhours > 24) {
    //const endDate = StartDate + 1; //dessa forma ele pega o padrao dia da semana ano mes dia
    const correcao = endhours - 24; //aqui nao da certo pois ele tira 24 de 24, pois tem minutos e segundo e tambem é por causa do 23:59 vai para 0:00:00 
    //if () {} da um jeito de converter antes de virar meia noite
    const finishedhours = starthours.replace(hours, correcao);
    console.log(`"Data":${dia}/${mes}/${ano}, "Hora de Saida": ${finishedhours}`);
} else {
    endDate = StartDate;
    const finishedhours = starthours.replace(hours[0], endhours) //se a data de entrada
    console.log(`"Data":${dia}/${mes}/${ano}, "Data de Saida": ${finishedhours}`)
}
console.log(endDate)