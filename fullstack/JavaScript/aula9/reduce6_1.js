const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

let votacao_separando1 = voters.filter(index => {
    if (index.age >= 18 && index.age <= 25) {
        return {...index }
    } else return 0
});
let votacao_separando2 = voters.filter(index => {
    if (index.age >= 26 && index.age <= 35) {
        return {...index }
    } else return 0;
});
let votacao_separando3 = voters.filter(index => {
    if (index.age >= 36 && index.age <= 55) {
        return {...index }
    } else return 0;
});
let votacao_separando4 = voters.filter(index => {
    if (index.age >= 56) {
        return {...index }
    } else { return "Não ha pessoas maiores de 55 anos voltando na arry voters"; }
});
let add_contagem1 = votacao_separando1.map((index) => {
    if (index.voted === true) {
        return { quantidade: 1 }
    } else { return { quantidade: 0 } }
});
let add_contagem2 = votacao_separando2.map((index) => {
    if (index.voted === true) {
        return { quantidade: 1 }
    } else { return { quantidade: 0 } }
});
let add_contagem3 = votacao_separando3.map((index) => {
    if (index.voted === true) {
        return { quantidade: 1 }
    } else { return { quantidade: 0 } }
});
let add_contagem4 = votacao_separando4.map((index) => {
    if (index.voted === true) {
        return { quantidade: 1 }
    } else { return { quantidade: 0 } }
});

let Total_votos1 = add_contagem1.reduce((num, votos) => {
    return { quantidade: num.quantidade + votos.quantidade }
})
let Total_votos2 = add_contagem2.reduce((num, votos) => {
    return { quantidade: num.quantidade + votos.quantidade }
})
let Total_votos3 = add_contagem3.reduce((num, votos) => {
    return { quantidade: num.quantidade + votos.quantidade }
})
let Total_votos = add_contagem4.reduce((num, votos) => {
    return { quantidade: num.quantidade + votos.quantidade }
});
console.log("O numero de pessoas entre 18 à 25 anos que votaram foram:", Total_votos1.quantidade)
console.log("O numero de pessoas entre 26 à 35 anos que votaram foram: ", Total_votos2.quantidade)
console.log("O numero de pessoas entre 36 à 35 anos que votaram foram: ", Total_votos3.quantidade)
console.log("O total de pessoas que votaram foram: ", Total_votos.quantidade)