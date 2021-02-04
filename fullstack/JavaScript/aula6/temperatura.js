const axios = require("axios");
const apikey = '5d0b33a3adaa365fb1561a27d2baade8';
async function getData(city = "Paris") {
    const url = `http: //api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=pt_br`;
    let response = await axios.get(url);
    const { main, wheather: [info] } = response.data

    const texto = `
    Cidade:${city}
    Descrição: ${info.description}
    Temperatura:${main.temp} c
    Minima: ${main.temp_min} c
    Minima: ${main.temp_max} c`
    console.log(texto);
}
getData()