// funciones

const saludar = function ( nombre ) {
    return `Hola ${ nombre }`;
};

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;
const saludar4 = ( ) => `Hola mundo`;


console.log( saludar('Goku'));
console.log( saludar2('Goku'));
console.log( saludar3('Goku'));
console.log( saludar4('Goku'));

const getUser = () => ({
    uid: 'Abc123',
    username: 'El_bueno'
});

console.log(getUser());

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC123',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Luis');
console.log(usuarioActivo);

