const ISO6391 = require('iso-639-1')
const axios = require('axios')
const input = require('readline-sync')


async function main() {
    let countries = await getCountries()
    const getText = (partialText, country) =>
        partialText + `${country.name} in ${country.region} with ${country.population}\n`

    let text = countries.reduce(getText, '\n')

    let option
    const menu = `
1 - Filter by population
2 - Filter by region
3 - Total speakers
4 - New search
0 - Quit
    `
    console.log(text)

    do {
        option = input.question(menu)
        if (option === '1') {
            const population = parseInt(input.question('Takes only countries above: '))
            text = countries
                .filter(country => country.population > population)
                .reduce(getText, '\n')

            console.log(text)
        } else if (option === '2') {
            const region = input.question('Takes only countries from: ')
            text = countries
                .filter(country => country.region.toLowerCase() === region.toLowerCase())
                .reduce(getText, '\n')

            console.log(text)
        } else if (option === '3') {
            const totalPopulation = countries.reduce((partialPop, country) => partialPop + country.population, 0)
            console.log(`Total speakers: ${totalPopulation}`)
        }

    } while (option != '0')
}

async function getCountries() {
    let code
    do {
        let language = input.question('Search country by language >>> ')
        code = ISO6391.getCode(language)
    } while (code === '')

    let countries = await axios.get(`https://restcountries.eu/rest/v2/lang/${code}`)
        .then(res => res.data)
        .then(
            data => data.map(
                country => ({
                    name: country.name,
                    region: country.region,
                    population: country.population
                }))
        )
        .catch(err => console.log(err))
    return countries
}

main()