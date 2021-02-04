let dados = [];

function editaregistro(id) {
    $("#modalregistro").modal("show")
    dados.forEach(function(item) {
        if (item.id == id) {
            $("#hdid").val(item.id)
            $("#txtnome").val(item.Name)
            $("#txtsobrenome").val(item.familyname)
            $("#txtdata").val(item.birthday.substr(6, 6) + "-" +
                item.birthday.substr(3, 2) + "-" + item.birthday.substr(0, 2))
            $("#txtformation").val(item.formation)
        }
    })

}

function apagaregistro(id) {
    let _confirm = confirm("Deseja excluir o registro?")
    if (_confirm) {
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].id == id) {
                dados.splice(i, 1)
            }
        }
        fill_table()
    }
}

function fill_table() {
    if (Array.isArray(dados)) {
        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#ttabledados tbody").html("") //limpar antes do loop
        dados.forEach(function(item) {
            $("#ttabledados tbody").append(`<tr>
            <td>${item.id}</td>
            <td>${item.Name}</td>
            <td>${item.familyname}</td>
            <td>${item.birthday}</td>
            <td>${item.formation}</td>
            <td><button type="button" class="btn btn-primary><i class="fa fa-edit"/></button></td>
            <td><button type="button" class="btn btn-danger onclick="javascript:apagaredistro(${item.id})"><i class="fa fa-edit"/></button></td>
            </tr>`) //template string

        })
    }

}
$(function() {
    //localStorage.setItem("__key__", "Algum dado") //armazenado no cookie do navegador
    dados = JSON.parse(localStorage.getItem("__dados__")) //mostra os dados armazenado no  localstorage e está armazenado tudo em texto
    if (dados) {
        fill_table()
    }
});
$("#btnsalvar").click(function() {
    let _id = $("#hdid").val()
    let nome = $("#txtnome").val()
    let sobrenome = $("#txtsobrenome").val()
    let bod = $("#txtdata").val()
    let formation = new Date($("#txtformation").val()).toLocaleDateString("pt-br", { timeZone: "UTF-8" })


    if (!_id || _id == "0") {
        let registros = {};
        registros.Name = nome
        registros.familyname = sobrenome
        registros.birthday = bod
        registros.formation = formation
        registros.id = dados.length + 1
        dados.push(registros)
    } else {
        dados.forEach(function(item) {
            if (item.id == _id) {
                item.Name = nome
                item.familyname = sobrenome
                item.birthday = bod
                item.formation = formation
            }
        })
    };
    //alert("registro salvo");
    $("#modalRegistros").modal("hide");
    $("#hdid").val("0")
    $("#txtnome").val("");
    $("#txtsobrenome").val("");
    $("#txtdata").val("");
    $("#txtformation").val("");
    fill_table();

});