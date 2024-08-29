//Desestructuración de Arrays

const personajes = ['Goku','Vegeta','Trunks'];

const [, p2] = personajes;

console.log(p2)

//

const retornaArreglo = () => (['ABC',123]);

const [letra,numeros] = retornaArreglo();
console.log(letra,numeros);

//Tarea
//1. el primer valor del arr se llamara nombre
//2. se llamara setNombre

const usoState = (valor) => ([valor, () => {console.log('Hola Mundo')}])

const [nombre, setNombre] = usoState('Goku');

console.log(nombre);
setNombre();