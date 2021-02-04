const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
];
let members = people.filter(person => person.member === false);
const members_name = members.map(nome => nome.name)
console.log(members_name)