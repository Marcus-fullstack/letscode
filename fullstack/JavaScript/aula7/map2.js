const matrix = [
    ['10', ' 7', '1'],
    ['4', '0', '25'],
    ['8', '1', '3']
]
const m2 = matrix.map(
    line => line.map(x => parseInt(x))
)
console.log(m2)