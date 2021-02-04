const vetor_enunciado = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

/*const newVector = vetor_enunciado.reduce((state, item) => {
    for (let subitem of item) {
        state.push(subitem)

    }
    return state
})*/

//console.log(newVector)

const newVector1 = vetor_enunciado.reduce((state, item) => [...state, ...item])

console.log(newVector1)