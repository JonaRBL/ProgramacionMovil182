/** 
 * crear algoritmo que tome un array de 
 * objetos y devueva un arrey de pares
 */
let pairs = [
    [1, { name: "nicolas"}],
    [2, { name: "juan"}],
    [3, { name: "maria"}],
];

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

function toCollection(arr) {
    let collection = [];
    for (let idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
};

let resultado = toCollection(pairs);
console.log(resultado);

