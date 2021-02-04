const vetor = ['10', '11', '23', '8']

function stringToInt(str) {
    return parseInt(str)
}

const vetor2 = vetor.map(x => parseInt(x))
    //console.log(typeof stringToInt('10'))
console.log(vetor2)

const vetor3 = [2, 4, 8, 1, 5, 6, 3, 0, 5]

const vetor4 = vetor3.map(
    (num, index) => index % 2 === 0 ? num ** 2 : num ** 3
)
console.log(vetor4)

const vetor5 = [10, 25, 60, 200]
const vetor6 = vetor5.map(
    // Sempre segue: elemento do vector, índice do respectivo elemento e o vetor inteiro
    (num, index, vector) => num / vector.length
)
console.log(vetor6)



let employees = [
    { role: 'Dev', salary: 1000 },
    { role: 'Designer', salary: 800 },
    { role: 'Seller', salary: 400 },
    { role: 'Professor', salary: 800 },
]

employees = employees.map(
    employee => {
        let increase
        if (employee.salary < 500) increase = 100
        else if (employee.salary < 1000) increase = 200
        else increase = 300

        return {...employee, salary: employee.salary + increase }
    }
)
console.log(employees)