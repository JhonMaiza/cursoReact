// desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p1 ] = personajes;

console.log( p1 );

const retornaArreglo = () => {
    return ['Abc', 123];
};

const [ letras, numeros ] = retornaArreglo();

console.log(letras, numeros);
const useState = ( valor ) => {
    return [ valor, () => { console.log('Hola mundo');
    }];
};
const [ nombre, setNombre ] = useState( 'Goku' );
console.log( nombre );
setNombre();



