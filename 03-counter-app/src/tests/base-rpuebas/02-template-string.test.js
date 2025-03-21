import { getSaludo } from "../../base-pruebas/02-template-string"

describe('Pruebas en 02-templates-string', () => {
  test('getSaludo debe retornar "Hola FernandoFernando', () => {
    const name = 'Fernando';
    const message = getSaludo( name );

    expect( message ).toBe( `Hola ${ name }` )
  });
});

