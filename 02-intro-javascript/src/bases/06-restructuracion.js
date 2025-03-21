//Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

const {nombre, edad, clave } = persona

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ( { clave, nombre, edad, rango = 'Capitán'} ) => {
    //console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 455,
            lng: 455,
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng }} = useContext( persona );
console.log( nombreClave, anios, lat, lng )