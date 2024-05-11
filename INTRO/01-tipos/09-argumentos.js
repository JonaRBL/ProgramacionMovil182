function suma(a, b) {//Parametro
    console.log(arguments)// como acceder a los valores de los parametros
    return a + b;
}

let resultado = suma(5, 6, 1, 2, 3);//Argumento
console.log(resultado);
console.log(typeof suma);