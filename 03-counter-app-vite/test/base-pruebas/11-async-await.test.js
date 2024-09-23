import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('Pruebas en 11-async-await', () => { 

    test('getImagen debe de retornar un error si no tenemos apiKey', async () => {

        const resp = await getImagen();
        // console.log(url)
        // expect(typeof url).toBe('string');
        expect( resp ).toBe('No se pudo obtener la imagen');

    })

})