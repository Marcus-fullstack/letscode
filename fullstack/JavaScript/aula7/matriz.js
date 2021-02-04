let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 6, 9]
];
//console.log(matriz[1][2])
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j])
    }
}
//produto escalar: a*e+b*g = [0][0]*[1][0]+[0][1]*[1][0]
let vetor = [1, 2, 3, 4, 5, 6, 7, 8];
let [primeiro, segundo, ...resto] = vetor;
console.log(primeiro);
console.log(segundo);
console.log(resto);

function vector_sum(vector) {
    if (vector.length === 0) { return 0 }

    const [head, ...tail] = vector
    return head + vector_sum(tail);
}
console.log(vector_sum([1, 2, 3]))

let v2 = [0, ...vetor, 9, 10, 11, 12];
console.log(v2)