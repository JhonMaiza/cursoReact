import { getHeroeById } from "./08-import";

// const promesa = new Promise ( (resolve, reject) => {
//     setTimeout(() => {
//         //onsole.log('2 segundos despues');
//         const hero = getHeroeById(2);
        
//         resolve( hero );
//         //reject( 'No se enconstró')
//     }, 2000);
// });

// promesa.then( (hero) => {
//     console.log( hero );
    
// })
// .catch( err => console.warn( err ));


const getHeroeByIdAsync = ( id ) => {
    return new Promise ( (resolve, reject) => {
        setTimeout(() => {
            //onsole.log('2 segundos despues');
            const hero = getHeroeById(id);
            if (hero) {
                resolve( hero );
            } else {
                reject( 'No se enconstró')
            }
            //console.log(hero);
            
        }, 2000);
    });
}

getHeroeByIdAsync( 1 )
    .then( console.log)
    .catch( console.warn);