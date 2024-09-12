import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {

    test('debe retornar un string y un numero', () => {
        
        const [ letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC')

        //Si ponemos otro valor que no sea el indicado nos da error
        // expect(letters).toBe('123')

        expect(numbers).toBe(123)

        //Para saber que tipo de valor es en JavaScript usamos typeof
        expect(typeof letters).toBe('string')
        expect(typeof numbers).toBe('number')
        

        //El atributo expect.any significa que esta esperando un valor, que en este caso un String
        expect(letters).toEqual( expect.any(String));
        
    });
});