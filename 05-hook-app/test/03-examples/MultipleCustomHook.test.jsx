import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples'
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas sobre MultipleCustomHooks ', () => {

  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  });

  beforeEach( () => {
    jest.clearAllMocks();
  })

  test('Debe mostrar el componente por defecto ', () => {
    
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });

    render( <MultipleCustomHook /> );

    expect( screen.getByText('Cargando'));
    expect( screen.getByText('Información del pokemon'));

    const nextButton = screen.getByRole( 'button', {name: 'Siguiente'})
    expect( nextButton.disabled).toBeTruthy();
    // screen.debug();
  });

  test('debe mostrar un pokemon', () => {
    useFetch.mockReturnValue({
      data: { 
        id: '15', 
        name:'picachu', 
        sprites: { 
          front_default: 'front_default',
          front_shiny: 'front_shiny',
          back_default: 'back_default',
          back_shiny: 'back_shiny',
        } 
      },
      isLoading: false,
      hasError: null
    });

    render( <MultipleCustomHook /> );
    expect( screen.getByText('#15 - picachu') ).toBeTruthy();
    
    const nextButton = screen.getByRole( 'button', {name: 'Siguiente'});
    expect( nextButton.disabled ).toBeFalsy();
    screen.debug();
  });

  test('debe de llamar la función de incrementar', () => {
    const { increment } = renderHook( () => useCounter( 1 ));
    useFetch.mockReturnValue({
      data: { 
        id: '15', 
        name:'picachu', 
        sprites: { 
          front_default: 'front_default',
          front_shiny: 'front_shiny',
          back_default: 'back_default',
          back_shiny: 'back_shiny',
        } 
      },
      isLoading: false,
      hasError: null
    });

    render( <MultipleCustomHook /> );
    const nextButton = screen.getByRole( 'button', {name: 'Siguiente'});
    fireEvent.click( nextButton );

    expect( mockIncrement ).toHaveBeenCalled();
  });
});
