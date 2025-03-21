import { getHeroeById } from "../../base-pruebas/08-imp-exp";

describe('Prueba 08', () => {
  test('getheroById debe retornar un heroe por ID', () => {
    const id = 1;
    const hero = getHeroeById( id );

    expect( hero ).toEqual(
        {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
    )
  });

  test('getheroById debe retornar undefined si no existe', () => {
    const id = 100;
    const hero = getHeroeById( id );

    expect( hero ).toBeFalsy( undefined )
  });
})
