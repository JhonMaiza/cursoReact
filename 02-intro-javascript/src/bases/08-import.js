
//import, export y funciones
//import { heroes } from './data/heroes';
import heroes, { owners } from '../data/heroes'

export const getHeroeById = ( id ) => {
return heroes.find( heroe => heroe.id === id);
};

//console.log( getHeroeById( 2 ));


export const getHeroeByOwner = ( owner ) => {
    return heroes.filter( heroe => heroe.owner === owner);
};

// console.log( getHeroeByOwner( 'Marvel' ));
// console.log( owners);
 