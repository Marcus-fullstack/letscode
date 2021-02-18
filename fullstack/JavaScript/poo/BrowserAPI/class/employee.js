const Company = require('./Company')
const { validateString, readDb, insertDb } = require('../functions/Functions')
const { dataentrada, datasaida } = require('/main');


class Employee extends Company {
    constructor(company, name, email, password, attendanceInfo = []) {
        super(company, name, email, password)
        this._attendanceInfo = attendanceInfo;
    }

    get attendanceInfo() { return this._attendanceInfo }
    set attendanceInfo(inOut) {
        validarString();
        this.checkIn();
        this.checkOut();
        this._attendanceInfo = inOut;
    }

    register() {
        const getDb = readDb();
        const companiesList = getDb.companies;
        let foundIndex = companiesList.findIndex(companyName => companyName.name === this.company);
        let employeeList = companiesList[foundIndex].employees;
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
        const entrada = dataentrada;
        return insertDb(entrada);
    }

    checkOut() {
        const saida = datasaida;
        insertdb(saida)

    }
}

module.exports = Employee