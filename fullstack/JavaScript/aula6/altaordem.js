/*let user = { name: "Marcus", age: 44 }
let string_obj = (JSON.stringify(user))
console.log(string_obj)
let user2 = JSON.parse(string_obj);
console.log(user2.age)*/
//let user = { name: "Marcus", age: 44 }

function userfactory(name, age) {
    return {
        name,
        age
    }
}
//let user = userfactory('marcus', 44)
//let user2 = userfactory('lucas', 26)
//console.log(user, user2)


function factoryCreator(obj) {
    let keys = [];
    if (arguments.length === 1 && typeof obj === 'objetos') {
        for (key in obj) {
            keys.push(key)
        }
    }
    return function() {
        let new_obj = {};
        for (let i = 0; i < keys.length; i++) {
            new_obj[keys[i]] = arguments[i]
        }
        return new_obj
    }
}

function printArg() {
    console.log(arguments)
}
let book = {
    title: "Lords of the king",
    author: "tokken",
    pages: 1000
}
const bookFactory = factoryCreator(book)
printArg("Sitio do picapau amarelo", "Monteiro Lobato", 350);
factoryCreator(book)
    /*
    function sum(n1, n2) {
        return n1 + n2
    }

    function apply(operator, n1, n2) {
        return operator(n1, n2)
    }
    console.log(apply(sum, 1, 5))

    function sumX(x) {
        return function(n1) {
            return n1 + x
        }
    }
    const sum5 = sumX(5)
    const sum10 = sumX(10)
    console.log(sum5(10));
    console.log(sum10(10))
    console.log(sum10(10))*/