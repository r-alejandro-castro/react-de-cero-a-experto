describe('Nombre de prueba de testeo', () => { 

    test ('Esta prueba no debe de fallar', () => {
    
        //1. inicializacion
        const message1 = 'Hola mundo';
    
        //2. estimulo
        const message2 = message1.trim();
    
        //3. Observar el comportamiento... esperado
        expect(message1).toBe(message2);
    
        //expect es como un if o una condicional en Jest
    
    });

});
