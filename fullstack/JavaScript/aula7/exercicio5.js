const customers = [
    [1, 'isidro_von@hotmail.com', 'Switzerland'],
    [2, 'frederique19@gmail.com', 'Micah Sanford', 'Democratic People\'s Republic of Korea'],
    [3, 'fredy54@gmail.com', 'Tunisia'],
    [4, 'braxton29@hotmail.com', 'Egypt'],
    [5, 'josh_batz60@gmail.com', 'Serbia'],
    [6, 'emie_corkery82@yahoo.com', 'Brazil']
];

const objeto = customers.map((valores, i) => {
    for (let i = 0; i < customers.length; i++)

        return {

        Id: valores[i].Id,
        email: valores[i].email,
        country: valores[i].country
    }
})


console.log(objeto);