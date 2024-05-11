/** 
 * crear algoritmo que tome un array de 
 * objetos y devueva un arrey de pares
 */
let array =[{
    id: 1,
    name: 'nicolas',
}, {
    id:2,
    name:'juan',
}, {
    id:3,
    name:'maria',
}];

let pares = [
    [1, { id: 1, name: 'nicolas'}],
    [2, { id: 2, name: 'juan'}],
    [3, { id: 3, name: 'maria'}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);