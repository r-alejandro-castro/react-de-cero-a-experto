import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes"; 

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHerieById debe de retornar un heroe por ID', () => {
        
        const id = 1;
        const hero = getHeroeById (id);
        console.log(hero)

        expect (hero).toEqual({ id:1, name:'Batman', owner: 'DC'})

    });

    test('getHerieById debe de retornar undefined si no existe el id', () => {
        
        const id = 100;
        const hero = getHeroeById (id);
        console.log(hero)

        //Esta es una forma de evaluar si es nulo o en este cado undefined
        expect ( hero ).toBeFalsy();

    });

    //Tarea
        //Debe de retornar un arreglo con los heroes de DC
        //length === 3
        //toEqual al arreglo filtrado
        
        //debe de retornar un arreglo con los heroes de Marvel
        //length === 2

    test('Debe retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);

        // Comparar el tamaño del arreglo, es decir que hay 3 arreglos que contienen el valor 'DC'
        expect(heroesDC.length).toBe(3); 

        // Comparar el arreglo retornado con el filtrado directamente de los datos
        expect(heroesDC).toEqual(heroes.filter(hero => hero.owner === owner));
    });

    test('Debe retornar un arreglo con los héroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);

        console.log(heroesMarvel)
        // Comparar el tamaño del arreglo es decir que hay 2 arreglos que contienen el valor 'Marvel'
        expect(heroesMarvel.length).toBe(2); 

        // Comparar el arreglo retornado con el filtrado directamente de los datos
        expect(heroesMarvel).toEqual([                                                                                                                                                                                                                                
            { id: 2, name: 'Spiderman', owner: 'Marvel' },                                                                                                                                                                                   
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
    });

})