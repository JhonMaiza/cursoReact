import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks"

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'fernanmdo@outlook.com'
    }
  test('Debe regresar los valores por defecto', () => {
    const { result } = renderHook( () => useForm( initialForm ) );
    expect( result.current ).toEqual({
        name: initialForm.name,
        email: initialForm.email,
        formState: initialForm,
        onInputChange: expect.any( Function ),
        onResetForm: expect.any( Function )
    });
  });

  test('Debe cambiar el nombre del formulario', () => {
    const newValue = 'Juan';
    const { result } = renderHook( () => useForm( initialForm) );
    act( () => {
        result.current.onInputChange( {
            target:{
                name: 'name',
                value: newValue
            }

        });
    });
    
    expect( result.current.name).toBe( newValue );
    expect( result.current.formState.name).toBe( newValue );
  });


  test('Debe resetear el nombre formulario', () => {
    const newValue = 'Juan';
    const { result } = renderHook( () => useForm( initialForm) );
    act( () => {
        result.current.onInputChange( {
            target:{
                name: 'name',
                value: newValue
            }
        });
        result.current.onResetForm();
    });
    
    expect( result.current.name).toBe( initialForm.name );
    expect( result.current.formState.name).toBe( initialForm.name );
  });
  
  
})
