import { render, screen } from '@testing-library/react';
import { FirstApp } from '../../src/FistApp';

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola mundo';
    const subtitle = 'Hola soy un subtitulo';

    test('Debe de hacer un match con el snapshot', () => {

        const { container } = render(<FirstApp title={title} />);
        expect( container ).toMatchSnapshot();
    });

    test('debe de mostrar el mensaje "Hola mundo"', () => {

        render( <FirstApp title={title} />);
        expect( screen.getByText(title)).toBeTruthy();

        //El screen es el objeto que estamos renderizado
    });

    test('Debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title={title} />);
        expect ( screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
    })

    test('Debe de mostrar el subtitulo en un h3', () => {
        render( <FirstApp subtitle={subtitle} />);
        expect(screen.getAllByText(subtitle).length).toBe(2);
    })

});