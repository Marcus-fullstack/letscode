const people = [{
        name: "Angelina Jolie",
        age: 80,
        weight: 55,
        height: 1.79
    },
    {
        name: "Eric Jones",
        age: 28,
        weight: 100,
        height: 1.6
    },
    {
        name: "Paris Hilton",
        age: 34,
        weight: 79,
        height: 1.65
    },
    {
        name: "Kayne West",
        age: 26,
        weight: 83,
        height: 1.83
    },
    {
        name: "Bob Ziroll",
        age: 90,
        weight: 60,
        height: 1.65
    }
];

let new_people = people.map(function(adicionar) {
    return Object.assign(adicionar, {
        bmi: parseFloat((adicionar.weight / adicionar.height ** 2).toFixed(2))
    })

});
//console.log(new_people); //console.log(Object.values(new_people));

new_people = new_people.map(person_imd => {
    let string; {
        if (new_people.bmi <= 25 && new_people.bmi >= 18.5) string = "O seu IMC está dentro da faixa, portanto Normal"
        else string = "Cuidado, seu IMC está elevado ou abaixo da faixa normal"
    }
    return Object.assign(person_imd, { classification: string })

});
console.log(new_people)