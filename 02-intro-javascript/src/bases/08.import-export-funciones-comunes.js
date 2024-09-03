import heroes, {owners} from '../data/heroes';

console.log(owners)

//manera incorrecta de llamar a los objectos importados

// const getHeroeById = (id) => {
//     return heroes.find ( (heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false
//         }
//     });
// }

//manera correcta de llamarlos

const getHeroeById = (id) => heroes.find ( (heroe) => heroe.id === id)

console.log(getHeroeById(2));

//find?, filter

const getHeroeByOwner = (owner) => heroes.filter ( (heroe) => heroe.owner === owner)

console.log(getHeroeByOwner('DC'));
console.log(getHeroeByOwner('Marvel'));
