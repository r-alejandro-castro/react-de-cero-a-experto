import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {

        // done es una variable asignamos, que nos va a a indicar cuando el proceso se termine

        const id = 1
        getHeroeByIdAsync( id ) 
            .then(hero => {
                
                expect(hero).toEqual({
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    });
                
                done();
            });
    });
    test('getHeroeByIdAsync debe de retornar un error si hero no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            
            .then(hero => {
                expect(hero).toBeFalsy();
                done();
            })

            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });

    }, 1000);
});
    
    // test('getHeroeByIdAsync debe de retornar un error si hero no existe', (done) => {

    //     const id = 100;
    //     getHeroeByIdAsync( id )
    //     .catch( error => {
    //             expect( error ).toBe(`No se encontro el heroe ${id}`);

    //             done();
    //         });
    // });
