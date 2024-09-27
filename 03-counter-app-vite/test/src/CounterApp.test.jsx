import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../../src/CounterApp';

describe('Prueba en main.jsx', () => {

    const value = 100;
    const inicialValue = 10;

    test('Debe de hacer un match con el snapshot', () => {
        const { container } = render(<CounterApp value={ inicialValue } />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar el valor inicial 100', () => {
        render(<CounterApp value={value} />);
        expect( screen.getByText(value.toString())).toBeTruthy();
        expect( screen.getByText(100)).toBeTruthy();
    });

    test('Debe de incrementar con el boton +1', () => {
        render(<CounterApp value={ inicialValue } />);
        fireEvent.click(screen.getByText('+1'));
        expect( screen.getByText('11')).toBeTruthy();
    });
    
    test('Debe de decrementar con el boton -1', () => {
        render(<CounterApp value={ inicialValue } />);
        fireEvent.click(screen.getByText('-1'));
        
        //Para ver el estado del DOM

        screen.debug();
        expect( screen.getByText('9')).toBeTruthy();
    });

    test('Debe de resetear el valor a 0 con el boton reset', () => {
        render(<CounterApp value={ inicialValue } />);
        fireEvent.click(screen.getByText('+1'));

        //Otra manera de llamar al boton, con el atributo aria-label, es una manera mas sencilla de llamar a una etiqueta
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));

        expect( screen.getByText('10')).toBeTruthy();
    });

});