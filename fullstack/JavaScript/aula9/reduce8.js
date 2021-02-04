const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function diagonal_principal(matriz) {
    const count = matriz.length;
    let resolution = 0;
    for (let i = 0; i < count; i++) {
        resolution += matriz[i][i];
    }
    return resolution;
}
console.log(diagonal_principal(matriz));