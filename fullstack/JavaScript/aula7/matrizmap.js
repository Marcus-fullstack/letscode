const matrix = [
    ['10', '11', '23'],
    ['3', '5', '9'],
    ['34', '15', '79'],
]

const matrix2 = matrix.map(
    line => line.map(x => parseInt(x))
)
console.log(matrix2)