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
    const bmi = parseFloat((adicionar.weight / adicionar.height ** 2).toFixed(2)); {
        return {...adicionar,
            bmi,
            classification: bmi <= 25 && bmi >= 18.5 ? "O seu IMC está dentro da faixa, portanto Normal" : "Cuidado, seu IMC está elevado ou abaixo da faixa normal",
        }
    }
});


console.log(new_people)