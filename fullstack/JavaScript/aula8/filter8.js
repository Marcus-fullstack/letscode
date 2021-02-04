const restaurantes = [{
        nome: 'Pizzaria do Mario',
        horario_abertura: 14,
        horario_fechamento: 23
    },
    {
        nome: 'Churrascaria do Ronaldo',
        horario_abertura: 11,
        horario_fechamento: 14,
    },
    {
        nome: 'Bar do Zeca',
        horario_abertura: 12,
        horario_fechamento: 2,
    },
    {
        nome: 'Doceria da Mara',
        horario_abertura: 8,
        horario_fechamento: 20,
    },
]

let funcionando = (new Date()).getHours();
const restaurantes_funcionando = restaurantes.filter(horas => {
    let aberto; {
        if (horas.horario_abertura >= funcionando && horas.horario_fechamento <= funcionando) aberto = "true";
        else aberto = "false";
    }
    return {...horas, aberto: horas.aberto }


});
console.log(restaurantes_funcionando)