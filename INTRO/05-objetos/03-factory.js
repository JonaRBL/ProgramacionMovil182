function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function() {
            console.log('recuperando clave...')
        },
    };
}

let user1 = crearUsuario('Jonathan','jonathanraul401@gmail.com')
let user2 = crearUsuario('Raul','raul401@gmail.com')

console.log(user1,user2)