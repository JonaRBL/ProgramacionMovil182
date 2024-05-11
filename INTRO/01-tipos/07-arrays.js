let animales = ['gato', 'caballo'];

console.log(animales);
console.log(animales[0]); //imprimir por indice

animales[2] = 'dragon'; //agregar un nuevo valor al arreglo
console.log(animales);

animales[10] = 'pez'; // agregamos un valor en el indice 10 y lo demas aparece vacio pero en la consola no aparecera y la longitud es de 11
console.log(animales[7]); //nos mostrara que es undefined
console.log(typeof animales);
console.log(animales.length); // nos devuleve la longitud del arreglo