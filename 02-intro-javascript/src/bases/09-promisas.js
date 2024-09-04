import getHeroeById, {getHeroeByOwner} from ".08.import-export-funciones-comunes"

// const promesa = new Promise ((resolve,reject) => {
//     setTimeout ( () => {
//         // console.log('2 segundos despues')
//         // resolve();

//         const p1 = getHeroeById(1)

//         //resolve: es un callback si la promesa es verdadera
//         resolve(p1);
        
//         //reject: cuando la promesa falla
//         reject ('No se pudo encontrar el heroe');

//     },1000)
// });

/* 
.then: que la operacion fue exitosa
.catch: error
.finally: Se va a ejecutar despues del then y el catch

*/

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// }).catch( err => console.warn(err))

const getHeroeByIdAsync = (id) => {
    return new Promise ((resolve,reject) => {
        setTimeout ( () => {
            const p1 = getHeroeById(id)
            if (p1) {
                resolve(p1)
            } else {
            reject ('No se pudo encontrar el heroe')
            }
        },2000)
    });
}

getHeroeByIdAsync(1)

    // .then( heroe => console.log('heroe',heroe))
    .then(console.log)

    // .catch( err => console.warn(err))
    .catch(console.warn)
