console.log('Hola mundo');


// template string
const nombre = 'Jhon';
const apellido = 'Maiza'

const nombreCompleto = `${ nombre } ${ apellido } ${ 1 + 1 }`;

console.log(nombreCompleto);

function getSaludo(){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo( nombre )}` );

