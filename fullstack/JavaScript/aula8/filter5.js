const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
];
let maiores = people.filter(maior => maior.age >= 18);
const maiores_pessoas = maiores.map(nome => nome.name)
console.log(maiores_pessoas)