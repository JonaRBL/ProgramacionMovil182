let user = {
    id: 1,
    name: 'Jonathan',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['gato','perro','dragon'];
for (let indice in animales) {
    console.log(indice, animales[indice])
}