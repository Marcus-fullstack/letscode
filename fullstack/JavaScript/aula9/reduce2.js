const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let soma = vetor.reduce((state, number) => state.toString() + number.toString());
console.log(soma)
const string = [];
string.push(soma).toString();
console.log(string)