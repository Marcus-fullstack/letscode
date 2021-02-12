function validarString(parametro, nomeparametro) {
    if (typeof(parametro !== 'string')) throw `O ${nomeparametro} deve ser String`;
}

const entry = require('readline-sync');

class Companies {
    constructor(Company) {
        this._Company = Company;
    }
    get Company() { return this._Company }
    set Company(newCompany) {
        validarString(newCompany, this._Company);
        this._Company = newCompany;
    }
}
class Directors extends Companies {
    constructor(Company, nameAdm, emailAdm, passwordAdm) {
            super(Company)
            this._nameAdm = nameAdm;
            this._emailAdm = emailAdm;
            this._passwordAdm = passwordAdm;
        }
        //metodos getters
    get nameAdm() { return this._nameAdm }
    get emailAdm() { return this._emailAdm }
    get passwordAdm() { return this._passwordAdm }
    set nameAdm(newnameAdm) {
            validarString(newnameAdm, 'this._nameAdm');
            this._nameAdm = newnameAdm;
        }
        //metodos setters
    set emailAdm(newemailAdm) {
        //precisa validar com 1 @ e 2 pontos apos o @
        validarString(newemailAdm, 'this._emailAdm');
        this._emailAdm = newemailAdm;
    }
    set passwordAdm(newpasswordAdm) {
        validarString(newpasswordAdm, 'this._passwordAdm');
        this._passwordAdm = newpasswordAdm;
    }
}
//aqui ele copia todos os atributos de departamento, nome, email e senha e coloca no 1 item de companies
class Employees extends Companies {
    constructor(Company, nameAdm, emailAdm, passwordAdm, name, department, email, password, day_atual, starthous, endhours) {
            super(Company, nameAdm, emailAdm, passwordAdm)
            this._department = department;
            this._name = name;
            this._email = email;
            this._password = password;
            //this.day_atual = day_atual;
            //this.starthous = starthous;
            //this.endhours = endhours;
        }
        //metodos Getters
    get department() { return this._department }
    get name() { return this._name }
    get email() { return this._email }
    get password() { return this._password }
    get day_atual() { return this.day_atual }
    get starthours() { return this.starthours }
    get endhours() { return this.endhours }
        //Metodos Setters
    set name(newname) {
        validarString(newname, 'this._name');
        this._name = newname;

    }
    set department(newdepartment) {
        validarString(newdepartment, 'this._department');
        this._department = newdepartment;
    }
    set email(newemail) {
        validarString(newemail, 'this._email');
        //precisa validar com 1 @ e 2 pontos apos o @
        this._email = newemail;
    }
    set password(newpassword) {
        validarString(newpassword, 'this._password');
        this._password = newpassword;
    }

    /*   set day_atual(newday) {
        const data = new Date();
        data.toDateString('pt-BR');
        const dia = data.getUTCDate();
        const mes = (data.getUTCMonth() + 1);
        const ano = data.getUTCFullYear();
        newday = `${dia}/${mes}/${ano}`;
        this.day_atual = newday;
    }
    set starthours(newtime) {
        const time = new Date().toLocaleTimeString('pt-BR');
        newtime = time;
        this.starthours = newtime;
    }
    set endhours(newtime) {
        const time = new Date().toLocaleTimeString('pt-BR');
        newtime = time;
        this.endhours = newtime;
    }*/
}
//daqui em diante colocar em functions.js
//nome de empresa
const empresa = entry.question('Nome da Empresa: ');

//Criei um "presidente da empresa"
const administrador = entry.question('Nome do Adm: ');
const email = entry.question('Email: ').toString();
const senha = entry.question('Senha: '); //senha em numeros, so para ver se da errado
console.log('---------------------------------')
    //funcionarios dessa empresa
const departamento = entry.question('Nome do Departamento: ');
const funcionario = entry.question('Nome do Funcionário: ');
const email1 = entry.question('Email: ');
const senha1 = entry.question('Senha: ');
console.log('---------------------------------');
const nomeEmpresa = new Companies(empresa);
const diretor = new Directors(empresa, administrador, email, senha);
const worker = new Employees(empresa, administrador, email, senha, departamento, funcionario, email1, senha1);
console.log('---------------------------------')

//imprimindo separadamente
console.log(nomeEmpresa);
console.log(diretor);
console.log(worker);