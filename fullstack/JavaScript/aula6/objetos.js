let user = {
    name: "Marcus Rodrigues",
    email: "marcusrnm@hotmail.com",
    password: '123456',
    age: 44,
    pets: [{ raca: 'pitbull', gender: 'male' }]
}
console.log(user.name, user.email);
let { name } = user;
console.log(name)
let user2 = {...user, email: "rnm @ lala.com " }
console.log(user2)