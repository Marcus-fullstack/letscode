const Company = require('./class/Company')
const Employee = require('./class/Employee')
const input = require('readline-sync')
const { readDb, verifyIfCompanyExists, verifyUser } = require('./functions/Functions')

while (true) {
    const getDb = readDb()
    const companiesList = getDb.companies

    console.log(`  
    Bem vindo ao RH Global
    Por favor, entre com seu e-mail e senha para liberação do sistema.
    `)

    const emailAuth = input.question('E-mail: ')
    const passAuth = input.question('Senha: ')

    const checkUser = verifyUser(companiesList, emailAuth, passAuth)
        //checar se a empresa existe em nosso banco de dados
    switch (checkUser) {

        case 'userDev':
            let optDev = 1

            while (optDev !== 0) {
                console.log(`
                Bem vindo desenvolvedor
            
                Escolha uma das opções abaixo, caso não queira alterar direto no banco de dados.
            
                1 - Criar nova empresa
                2 - Alterar senha de admin
                0 - Sair
                `)

                optDev = parseInt(input.question("Digite uma opção: "))

                switch (optDev) {
                    case 1:
                        let company = input.question("Nome da empresa: "); //nome da empresa digitado pelo erick
                        if (verifyIfCompanyExists(companiesList, company)) {
                            console.log(`The company ${company} has already in RH Global Database`)
                            let name = input.question("Nome do funcionário: ");
                            let email = input.question("Digite o e-mail: ");
                            let password = input.question("Digite uma senha: ");
                            const novoEmployee = new Employee(company, name, email, password)
                            novoEmployee.register()
                        } else {
                            const novaEmpresa = new Company(company, nameadm, email, password)
                        }
                        break

                    case 2:
                        console.log('Alterar senha de administrador')
                        break

                    case 0:
                        console.log('Encerrando sessão')
                        console.clear()
                        break
                }
            }
            break

        case 'userAdmin':


            let optAdmin = 1

            while (optAdmin !== 0) {
                console.log(` 
                
                Menu Inicial
                
                1 - Listar funcionários
                2 - Inserir funcionário
                3 - Remover funcionário
                0 - Sair
                \n`)

                optAdmin = parseInt(input.question("Digite uma opção: "))

                switch (optAdmin) {
                    case 1:
                        console.log('Menu lista funcionarios')

                    case 2:
                        let funcCompany = input.question("Digite o nome da Empresa: ")
                        if (verifyIfCompanyExists(companiesList, funcCompany)) {
                            let funcName = input.question("Digite o nome do funcionario que deseja contratar: ")
                            let funcEmail = input.question("Digite o e-mail desse funcionario: ")
                            let funcPassword = input.question("Digite uma senha para o funcionario ter acesso: ")

                            const funcionario = new Employee(funcCompany, funcName, funcEmail, funcPassword)
                            funcionario.register()
                        } else {
                            console.log("Company not found")
                        }
                        break

                    case 3:
                        if (verifyIfCompanyExists(companiesList, funcCompany)) {
                            let delName = input.question("Digite o nome do funcionario que deseja demitir: ")
                            let delEmail = input.question("Digite o e-mail dele: ");
                            if (delName === 'funcName' && delEmail === 'funcEmail') {

                            }
                            console.log('Menu remover funcionario')
                        }
                        break;

                    case 0:
                        console.log('Encerrando sessão')
                        console.clear()
                        break

                    default:
                        console.log("\nOpção invalida.")
                        break
                }
            }
            break

        case 'userEmployee':

            let optFunc = 1

            while (optFunc !== 0) {
                console.log(`
                    1 - Registrar ponto (input/saida)
                    2 - Consultar registros
                    3 - Consultar banco de horas
                    4 - Alterar senha
                    0 - Sair
                `)
                optFunc = parseInt(input.question("Digite uma opção: "))

                switch (optFunc) {
                    case 1:
                        const StartDate = new Date();
                        StartDate.toDateString('pt-BR'); //tem que mudar
                        const dia = StartDate.getUTCDate();
                        const mes = (StartDate.getUTCMonth() + 1);
                        const ano = StartDate.getUTCFullYear();
                        let starthours = new Date().toLocaleTimeString('pt-BR');
                        let hours = JSON.parse(starthours[0].concat(starthours[1])) //separar horas, concatenei e somar 8 horas, como estou usando numeracao brasileira, 24hs em vez de 12,
                        let endhours = hours + 8;
                        let finishedhours = starthours.replace(hours, endhours)
                        return `{"Dia": ${dia}/${mes}/${ano}, "horario de entrada": ${starthours},
                        {"Dia": ${dia}/${mes}/${ano}, "horario de saida": ${finishedhours} }`;

                        break
                        //precisa mandar esse return pro attendanceinfo
                    case 2:
                        console.log('Consultar Registros')
                        break
                    case 3:
                        console.log('Consultar banco de horas')
                        break
                    case 4:
                        console.log('Alterar senha')
                        break
                    case 0:
                        console.log('Encerrando sessão')
                        console.clear()
                        break
                    default:
                        console.log('Opcao invalida')
                        break
                }
            }
            break

        default:
            console.log('User not found! Try again')
            break
    }

}