import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba 06-deses-obj', () => {

    test('usContext debe retornar un objeto con clave y edad', () => {

        const clave = '21345';
        const edad = 21;

        // Llamada correcta a la función con un objeto
        const context = usContext({ clave, edad });

        // Expectativa correcta
        expect(context).toEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });

});