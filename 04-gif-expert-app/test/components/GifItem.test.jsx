import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Prueba Gifitem', () => {
  const title = 'One piece';
  const url = 'https://ejemplo.com/';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render( <GifItem title={ title } url={ url } />);
    expect( container ).toMatchSnapshot();
  });

  test('debe mostrar la imagen con el url y el alt indicado', () => {
    render( <GifItem title={ title } url={ url } />);
    // screen.debug();
    const { src, alt } = screen.getByRole('img');
    console.log( src, alt);
    
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  });

  test(' debe mostrar el título en el componente', () => {
    render( <GifItem title={ title } url={ url } />);
    expect(screen.getByText( title )).toBeTruthy();
  });
})
