import { render, screen } from "@testing-library/react";
import { MainApp } from '../../src/09-useContext/MainApp' 
import { MemoryRouter } from "react-router-dom";

describe('Pruebas en MainApp', () => {
  test('debe mostrar el HomePage ', () => {
    render(
        <MemoryRouter>
            <MainApp />
        </MemoryRouter>
    );
    expect( screen.getByText( 'HomePage' )).toBeTruthy();
    screen.debug();
  });

  test('debe mostrar el HomePage ', () => {
    render(
        <MemoryRouter initialEntries={ ['/login'] }>
            <MainApp />
        </MemoryRouter>
    );

    expect( screen.getByText( 'Login Page' )).toBeTruthy();
    screen.debug();
  });
  
})
