export const usContext = ({ clave, edad = 'Capitán' }) => ({
    nombreClave: clave,
    anios: edad,
    latlng: {
        lat: 14.1232,
        lng: -12.3232
    }
});


// export const usContext = ({ clave, edad = 'Capitán' }) => [{
//         nombreClave: clave,
//         anios: edad,
//         latlng: {
//             lat: 14.1232,
//             lng: -12.3232
//         }
// }]

// Era parentisis porque eran unos objectos, no unos arrays
