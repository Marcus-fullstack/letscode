const Company = require('./Company')
const { validateString, readDb, insertDb } = require('../functions/Functions')

class Employee extends Company {
    constructor(company, name, email, password, attendanceInfo) {
        super(company, name, email, password)
        this._attendanceInfo = attendanceInfo || []
    }

    get attendanceInfo() { return this._attendanceInfo }
    set attendanceInfo(inOut) {
        validarString(inOut)
        this._attendanceInfo = inOut
    }

    register() {
        const getDb = readDb()
        const companiesList = getDb.companies
        let foundIndex = companiesList.findIndex(companyName => companyName.name === this.company)
        let employeeList = companiesList[foundIndex].employees
        const newEmployee = {
            "name": this.name,
            "email": this.email,
            "password": this.password,
            "attendanceInfo": []
        }
        employeeList.push(newEmployee)
        insertDb({
            companies: companiesList
        })
    }

    checkIn() {


    }

    checkOut() {

    }
}

module.exports = Employee