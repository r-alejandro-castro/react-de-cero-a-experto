import { render } from '@testing-library/react';
import { FirstApp } from '../../src/FistApp';

describe('Pruebas en <FirstApp />', () => {

    // test('Debe de hacer un match con el snapshot', () => {

    //     const title = 'Hola mundo';
    //     const { container } = render(<FirstApp title={title} />);

    //     expect(container).toMatchSnapshot();
    // });
    
    test('Debe mostrar el titulo h1', () => {

        const title = 'Hola mundo';
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        expect(getByTestId('test-title').innerHTML).toContain(title);
    });
    
    test('Debe de mostrar el subtitulo enviado por prop', () => {

        const title = 'Hola mundo';
        const subtitle = 'Hola soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subtitle={subtitle}
            />
        );
        expect(getAllByText(subtitle).length).toBe(2);

    });

});