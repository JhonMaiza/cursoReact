import { fireEvent, render, screen } from "@testing-library/react";
import {CounterApp} from '../CounterApp'

describe('Prueba CounterApp', () => {
  const value = 10;
  test('debe hacer match con el snapshot', () => {
    const { container } = render(<CounterApp value={1}/>)
    expect( container ).toMatchSnapshot();
  });

  test('debe mostar el valor inicial de 100 ', () => {
    render(<CounterApp value={100}/>);
    expect( screen.getByText( 100 )).toBeTruthy();
  });

  test('debe de incrementar con el boton +1', () => {
    render(<CounterApp value={100}/>);
    fireEvent.click( screen.getByText('Aumentar') );
    expect( screen.getAllByText('101')).toBeTruthy();
  });

  test('debe de decrementar con el boton +1', () => {
    render(<CounterApp value={100}/>);
    fireEvent.click( screen.getByText('Restar') );
    expect( screen.getAllByText('99')).toBeTruthy();
    
  });
  
  test('debe de funcionar de reset', () => {
    render(<CounterApp value={355}/>);
    fireEvent.click( screen.getByText('Aumentar') );
    fireEvent.click( screen.getByText('Aumentar') );
    fireEvent.click( screen.getByText('Aumentar') );
    //fireEvent.click( screen.getByText('Restablecer') );
    fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}));
    expect( screen.getByText('355')).toBeTruthy();
  });
})
