const nome_proj = document.querySelector("#name_proj")
const os_proj = document.querySelector('#os_proj')
const responsavel_proj = document.querySelector('#responsavel_proj')
const responsavel_prof = document.querySelector("#responsavel_prof")
const funcionario_name = document.querySelector("#funcionario_name")
const funcionario_rg = document.querySelector("#funcionario_rg")
const funcionario_prof = document.querySelector("#funcionario_prof")
const tag_th = document.querySelector("#name_proj")
const btnenviar = document.querySelector("#salvarbtn");
nome_proj.focus();
os_proj.focus()
responsavel_proj.focus()
responsavel_prof.focus()
funcionario_name.focus()
funcionario_rg.focus()
funcionario_prof.focus()

const EnviarItem = (nome_proj, name_proj) => {
    const projeto_name = nome_proj.value;
    if (projeto_name) tag_th.innerHTML = 'Nome do Projeto: <span id="resposta">${projeto_nome}</span>';
}