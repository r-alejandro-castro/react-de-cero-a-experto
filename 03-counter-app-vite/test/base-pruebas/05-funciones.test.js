import { getUser } from "../../src/base-pruebas/05-funciones"
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funcioens', () => { 

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        console.log(user)

        expect(testUser).toEqual(user);
    });

    
    test('getUsuarioActivo debe retornar un objecto', () => { 

        const name = 'Fernando';

        const user = getUsuarioActivo(name);

        expect(user).toEqual({
            uid: 'ABC567',
            username: name
        });
    });
});