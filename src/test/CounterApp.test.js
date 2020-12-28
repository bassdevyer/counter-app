import React from 'react';
import CounterApp from '../CounterApp'
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp/>);

    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    })

    test('debe mostrar <CounterApp/> correctamente con sus valores por defecto', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto de 100', () => {
        const wrapper = shallow(
          <CounterApp
            value={100}
          />
        );
        const value = wrapper.find('h2').text().trim();
        expect(value).toBe('100')
    });

    test('debe incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const value = wrapper.find('h2').text().trim();
        expect(value).toBe('11')
    })

    test('debe decrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const value = wrapper.find('h2').text().trim();
        expect(value).toBe('9')
    })

    test('debe colocar el valor por defecto con el boton reset', () => {
        const wrapper = shallow(
          <CounterApp
            value={105}
          />
        );
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const value = wrapper.find('h2').text().trim();
        expect(value).toBe('105')
    })

})
