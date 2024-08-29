// Function en JS

const saludar = function ( nombre ) {
    return `Hola, ${nombre}`;
}

// console.log(saludar('goku'));

console.log(saludar)
 

// funcion flecha =>

    const saludar2 = ( nombre ) => {
        return `Hola, ${nombre}`;
    }

console.log(saludar2)

//return

const saludar3 = ( nombre ) => `Hola, ${nombre}`;


console.log(saludar3('Alejandro'))

const getUser = ( ) => ({
    uid: 'ABC456',
    username: 'HolaMundo'
})

console.log( getUser())

//Tarea

const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC123',
    username: nombre
});

const UsuarioActivo = getUsuarioActivo('Fernando');
console.log( UsuarioActivo )