class HtmlBaseElement{
  private tagname:String;
  private id: Number;
  private classlist: String[];
  private name: String;
  private style: Object;
  //Metodo Construtor
  constructor(tagname:string,
              id:number,
              classlist:string[],
              name:string,
              style:Object){
    this.tagname=tagname;
    this.id=id;
    this.classlist=classlist;
    this.name=name;
    this.style=style;
  }
  //Metodo getters
  get tag(){return this.tagname;}
  get identificacao(){return this.id;}
  get list(){return this.classlist;}
  get usuario(){return this.name;}
  get Style(){return this.style}
//metodo setters
//minha pergunta é se precisa validar a string, pois ja declaramos as variaveis
  set tag(newtag){this.tagname=newtag;}
  set identificacao(newid){this.id=newid;}
  set list(newlist){this.classlist=newlist;}
  set usuario(newname){this.name=newname;}
  set Style(newstyle){this.style=newstyle;}

  addClass(classname: String) {//falta fazer com que procure pra ver se existe
    this.classlist.push(classname);
}
removeClass(classname: String) {
/* this.classlist.remove(classname); falta fazer com que rode a lista*/
  }
}
let exemplohtml = new HtmlBaseElement('body',1,[],'Marcus','yellow')
console.log(exemplohtml)