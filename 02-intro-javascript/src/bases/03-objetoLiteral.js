
// objetos literales
const persona = {
    nombre: 'Tony',
    apellido: 'Start',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 554577,
        lat: 44775,
        lng: 4777,
    }
};

console.log( persona );
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona2 );
console.log( persona );
