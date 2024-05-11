// { id: 1, recuperarClave: function(){} }
function Usuario() {
    this.id = 1;
    this.recuperarClave = function () { //metodos
        console.log('recuperando clave...');
    }
}

let usuario = new Usuario(); //new: se crea un objeto, se crea el prototipo, al this se le asigna el nuevo objeto y este lo retorna

console.log(usuario);