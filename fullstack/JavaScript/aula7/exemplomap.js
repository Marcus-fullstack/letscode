var convidados = [
    { nome: "felipe", vip: false },
    { nome: "danIEl", vip: true },
    { nome: "João", vip: true }
];

var convidadosNormalizado = convidados.map(function(item) {
    return Object.assign(item, { nome: item.nome.toUpperCase() });
});

console.log(convidadosNormalizado);