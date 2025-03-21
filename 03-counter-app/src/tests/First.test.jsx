import { render } from "@testing-library/react"
import { FirstApp } from "../FirstApp";

describe('Pruebas en < FirstApp />', () => {
  // test('debe de hacer match con el snapshot', () => {
  //   const title = 'Hola amigoo';
  //   const { container } = render( <FirstApp title={ title } subtitle={5}/>);
  //   expect( container ).toMatchSnapshot();
  // })

  test('debe mostrar el titulo en un h1', () => {
    const title = 'Hola amigooo';
    const subtitle = 'Hola subtitle';
    const { container, getByText, getByTestId } = render( <FirstApp title={ title } subtitle={5}/>);
    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector( 'h1' );
    // expect(h1.innerHTML).toContain( title );
    expect( getByTestId('test-title').innerHTML ).toContain(title);
  });

  test('debe mostrar el subtitulo enviado por props', () => {
    const title = 'Hola amigooo';
    const subtitle = 123;
    const { getByText, getByTestId, getAllByText } = render( 
      <FirstApp 
        title={ title } 
        subtitle={ subtitle }
      />
    );
    expect( getAllByText( subtitle ) ).toBeTruthy();

    // const h1 = container.querySelector( 'h1' );
    // expect(h1.innerHTML).toContain( title );
    //expect( getByTestId('test-subtitle').innerHTML ).toContain( subtitle.toString() );
    expect( getAllByText( subtitle ).length ).toBe(2)
  })  
})
