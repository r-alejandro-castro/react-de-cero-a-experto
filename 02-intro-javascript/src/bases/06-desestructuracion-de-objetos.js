// Desestructuración
// Asignacion Desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Iroman'
};

//Mala forma de llamar a los objetos

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//Buena forma de llamar a los objetos

// const { nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

/*En caso de tener otra variable con el mismo nombre, hacemos lo siguiente: 
variable:variable2*/

//---------------------------------

// const retornaPersona = (usuario) => {
//     const { nombre, edad, clave} = persona;

//     console.log(edad,nombre,clave)

// }

/* Manera correcta */

// const retornaPersona = ({nombre,edad, noexiste = 'Nombre'}) => {
//     console.log(edad,nombre, noexiste)
// }

// retornaPersona ( persona);

/*  */ 

const retornaPersona = ({clave,edad}) => ({
        nombreClave: clave,
        anios: edad,
        poderes: {
            poder1: 'genio',
            poder2: 'millonario'
        }
});

const {nombreClave,anios, poderes:{poder1,poder2}} = retornaPersona (persona);

console.log(nombreClave,anios);
console.log(poder1,poder2);