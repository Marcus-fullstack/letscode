const axios = require('axios')

const apiKey = '5d0b33a3adaa365fb1561a27d2baade8'

async function getData(city = 'Paris'){
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`

    const response = await axios.get(url)
    const { main, weather: [info] } = response.data

    const text = `
Cidade: ${city}
Descrição: ${info.description}
Temperatura: ${main.temp} C
Mín.: ${main.temp_min} C
Max.: ${main.temp_max} C
`
    console.log(text)
}

getData()

//console.log('Texto depois da chamada da função')