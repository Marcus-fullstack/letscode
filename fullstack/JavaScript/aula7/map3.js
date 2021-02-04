let employees = [{ role: 'dev', salary: 1000 }, { role: 'designer', salary: 800 }, { role: 'prof', salary: 1400 }]

employees = employees.map(employee => { return {...employee, salary: employee.salary + 500 } })
console.log(employees)

employees = employees.map(employee => {
    let increase;
    if (employees.salary < 1000) increase = 700
    else if (employees.salary < 1500) increase = 500
    else increase = 100
    return {...employee, salary: employee.salary + increase }
})
console.log(employees)