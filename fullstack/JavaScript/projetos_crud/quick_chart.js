const axios = require('axios')
const fs = require('fs')

async function main() {
    const resp = await axios.post('https://quickchart.io/chart', {
        backgroundColor: "transparent",
        width: 500,
        height: 300,
        format: "png",
        chart: {
            type: 'line', // Show a bar chart
            data: {
                labels: ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], // Set X-axis labels
                datasets: [{
                    label: 'Supino', // Create the 'Users' dataset
                    data: [20, 20, 25, 25, 25, 27.5, 30, 30, 30, 32.5] // Add data to the chart
                }, { label: "peitoral machine", data: [null, null, null, 22.5, 22.5, 25, 25, 27.5] }, {
                    label: 'elevacao lateral', // Create the 'Users' dataset
                    data: [4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5] // Add data to the chart
                }, { label: "elevacao frontal", data: [4, 4, 4, 5, 5, 5, 5, 6, 6, 6] }]
            }
        }
    }, { responseType: "stream" })
    resp.data.pipe(fs.createWriteStream("chart.png"))
}

main()