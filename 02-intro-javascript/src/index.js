// Template String ``

const nombre = 'Rodolfo';
const apellido = 'Castro';

// const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// A esto `` se llama backtrick/Back Quote 

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un saludo: ${getSaludo(nombre)}`)
