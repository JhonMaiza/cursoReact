import { render, screen } from "@testing-library/react"
import { FirstApp } from "../FirstApp";

describe('Pruebas en < FirstApp />', () => {
  const title = 'Hola soy Goku';
  const subtitle = 123;

  test('debe de hacer match con el snapshot', () => {
    const { container } = render( <FirstApp title={title} subtitle={ subtitle }/>);
    expect( container ).toMatchSnapshot();
  })

  test('debe mostar el mensaje "Hola, Soy Goku', () => {
    render(<FirstApp title={title} subtitle={ subtitle }/>);
    expect( screen.getByText( title )).toBeTruthy();
  });

  test('debe de mostrar el titulo en un h1', () => {
    render(<FirstApp title={ title } subtitle={ subtitle }/>);
    expect( screen.getByRole( 'heading', { level:1 } ).innerHTML).toContain(title);
  });
  
  test('debe de mostrar el subtitulo enviado por props', () => {
    render(
      <FirstApp 
        title={ title } 
        subtitle={ subtitle }
      />
    );
    expect( screen.getAllByText(subtitle).length).toBe(2);
  });
  
  
  
})
