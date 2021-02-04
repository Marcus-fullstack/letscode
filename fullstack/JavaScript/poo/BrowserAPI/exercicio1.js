//q1
function validarstring(valor, nomeparametro) {
    if (typeof(valor) !== "string") throw `${nomeparametro} deve conter valores do tipo string.`;
}


class HTMLBaseElement {
    constructor(tagname, id, classlist = [], name, style = {}) {
        this.tagname = tagname;
        this.id = id;
        this.classlist = classlist;
        this.name = name;
        this.style = style;
    }
    get tagname() { return this._tagname; }
    get id() { return this._id; }
    get classlist() { return this._classlist; }
    get name() { return this._name; }
    get style() { return this._style; }

    set tagname(newtag) {
        validarstring(newtag, 'tagname');
        this._tagname = newtag;
    }
    set id(newid) {
        validarstring(newid, 'id');
        this._id = newid;
    }
    set classlist(newlist) {
        validarstring(newlist, 'classlist');
        this_classlist = newlist;
    }
    set name(newname) {
        validarstring(newname, 'name');
        this_name = newname;
    }
    set style(newstyle) {
        validarstring(newstyle, 'style');
        this_style = newstyle;
    }
    addClass(classname) {
        validarstring(classname, `${classname}`);
        this.classlist.push(classname);
    }
    removeClass(classname) {
        validarstring(classname, `${classname}`);
        this.classlist.remove(classname);
    }

}
//q2
class HTMLParentElement extends HTMLBaseElement {
    constructor(tagname, id, classlist, name, style, children = []) {
        super(tagname, id, classlist, name, style)
        this.children = children;


    }
    appendChild(child) {

    }
    removeChildBy(property, value) {

    }
}
//q3
class HTMLInputElement extends HTMLBaseElement {
    constructor(tagname, id, classlist, name, style, value, type) {
            super(tagname, id, classlist, name, style)
            let value = value;
            let type = type;
        }
        //caso seu valor seja definido não sendo um entre ‘text’, ‘email’, ‘password’, ‘date’, ‘color’ ou ‘number’
    get value() { return this.value; }
    get type() { return this.type; }
    set value(newvalue) {
        validarstring(newvalue, 'value');
        // pode ser feito dessa forma, mas podemos simplificar usando o metodo include para testar e no adicionar a chave  o valor
        //if (typeof(newvalue) !== 'text' && typeof(newvalue) !== 'email' && typeof(newvalue) !== 'password' && typeof(newvalue) !== 'date' && typeof(newvalue) !== 'color' && typeof(newvalue) !== 'number') throw "O valor que está querendo armazenar difere dos dados do exercicio";

        let validatevalue = ["text", "email", "password", "date", "number"];
        if (newvalue !== find(validateValue)) throw "Os valores e a chave deve corresponder a texto, email, senha,data,numero";
        this.value = `${newvalue}`;

    }
    set type(newtype) {
        validarstring(newtype, 'type')
        this.type = newtype;
    }
}
class HTMLButtonElement extends HTMLParentElement {
    constructor(tagname, id, classlist, name, style, children, onClick) {
        super(tagname, id, classlist, name, style, children);
        this.onClick = onClick;
    }
    validarButton() {
        if (typeof(onClick) !== "function") throw "valor do botao precisa ser funcao"
        return;
    }

}
class HTMLTableElement extends HTMLParentElement {
    constructor(tagname, id, classlist, name, style, children) {
        super(tagname, id, classlist, name, style, children)
        this.children = new HTMLBaseElement();
    }
    validateTable(tagtable) {
        let tableformat = ["THead", "Tbody", "TFoot", "TR"];
        if (tagtable !== include(tableformat)) throw 'Os nomes das tags devem respeitar o formato html da tabela thead,tboby, tfoot e tr'; //talvez precise deixar tudo  em minusculo

        /*
        Isso será usado pra fazer uma tabela dinâmica no arquivo script.js
        function myFunction() {
            let thead = document.createElement("THEAD");
            let tbody = document.createElement("TBODY");
            let tfoot = document.createElement("TFoot")
            let tr = document.createElement("TR");
            tr.innerHTML = "A table cell inside a tr inside a tbody inside a table!"
            tfoot.appendChild(tr);
            tbody.appendChild(tbody);
            document.getElementById("myTable").appendChild(thead);
        }*/

    }
}
//q6
class HTMLImageElement extends HTMLBaseElement {
    constructor(tagname, id, classlist, name, style, img) {
        super(tagname, id, classlist, name, style)
        this.img = img;
    }
    validateimagem(parametrosimg) {
        let validateimg = ["id", "class", "evento", "sourceimg"];
        if (parametrosimg !== find(validateimg)) throw "Se tiver algo diferente do id, a classe ou evento, deu erro no sistema.";
        //nesse find crie uma variavel para o check dos parametros da imagem
        this.img = `${parametrosimg}`;
    }
}
//const conteudoimg = new HTMLImageElement(); 
//console.log(conteudoimg) 
//se a imagem tem licença,etc