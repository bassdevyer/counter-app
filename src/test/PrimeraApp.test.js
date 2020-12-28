import React from 'react';
import PrimeraApp from '../PrimeraApp'
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    // test('Debe mostrar el mensaje "Hola soy Goku" ', () => {
    //     const saludo = 'Hola soy Goku';
    //
    //     const {getByText} = render(<PrimeraApp saludo={saludo} />)
    //
    //     expect(getByText(saludo)).toBeInTheDocument();
    // })

    test('debe mostrar el componente correctamente', () => {
        const saludo = 'Hola, soy Goku'
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Goku'
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(
          <PrimeraApp
            saludo={saludo}
            subtitulo={subtitulo}
          />
        );
        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo)
    });

})
