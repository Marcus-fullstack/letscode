let obj = {
    addElem: function addElem(elem) {
        [].push.call(this, elem);
    }
};
obj.addElem({ nome: 'Marcus' });
obj.addElem({ age: 44 });
console.log(obj);