//short-circuit

//valores FALSY
// Falso
// false
// 0
// ''
// null
// undefined
// NaN
let nombre = 'Jonathan';
let username = nombre || 'Anonimo';//si la variable nombre esta vacia imprime anonimo en la consola
console.log(username);

function fn1() {
    console.log('soy funcion 1');
    return false;
}

function fn2() {
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();