const punto = {
    x: 10,
    y: 15,
    dibujar() {//dibujar: function() {
        console.log('dibujando')
    }
};
// delete punto.dibujar;
if ('dibujar' in punto) {
    punto.dibujar();
}