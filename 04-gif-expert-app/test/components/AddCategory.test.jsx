import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components"

describe('Pruebas en AddCategory', () => {
  test('Debe cambiar el valor de la caja de texto ', () => {
    render( <AddCategory onNewCategory={ () => {}}/> );
    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value: 'Saitama'}} );
    expect( input.value ).toBe('Saitama');
  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory }/> );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input( input, { target: { value: inputValue }} );
    fireEvent.submit( form );
    expect( input.value ).toBe( '' );
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes( 1 );
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });
  
  test('No debe de llamar el onNewCategory si el input está vacio', () => {
    const inputValue = '';
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory }/> );

    //const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    //fireEvent.input( input, { target: { value: inputValue }} );
    fireEvent.submit( form );

    expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
    expect( onNewCategory ).not.toHaveBeenCalled();
  });
  
  
})
