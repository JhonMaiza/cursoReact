import { fireEvent, render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage'
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en Login Page', () => {
  test('debe de mostrar el componente sin el usuario', () => {
        render( 
          <UserContext.Provider value={ { user: null }}>
            <LoginPage />
          </UserContext.Provider>
        );
        const preTag = screen.getByLabelText( 'pre' );
        expect( preTag.innerHTML ).toBe( 'null' )
        // screen.debug();
  });

  test('debe de llamar el setUser cuando se hace click en el boton', () => {

    const setUserMock = jest.fn();

    render( 
        <UserContext.Provider value={ { user: [], setUser: setUserMock }}>
          <LoginPage />
        </UserContext.Provider>
    );

    const setUserButton = screen.getByRole('button');
    fireEvent.click( setUserButton );
    expect( setUserMock ).toHaveBeenCalledWith( [{
        "id": 123,
        "name": 'juan',
        "email": 'juan@outlook.com'
      }]
    );
  });
  
  
})
