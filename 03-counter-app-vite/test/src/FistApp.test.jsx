import { render } from '@testing-library/react';
import { FirstApp } from '../../src/FistApp';

describe('Pruebas en <FirstApp />', () => {

    test('Debe de hacer un match con el snapshot', () => {

        const title = 'Hola mundo';
        render(<FirstApp title={title} />);

    });
});