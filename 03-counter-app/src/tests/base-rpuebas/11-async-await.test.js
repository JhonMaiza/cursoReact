import { getImagen } from "../../base-pruebas/11-async-await";

describe('Prueba 11', () => {
  test('getImagen debe retornar una url de la imagen', async() => {
    const url = await getImagen();
    expect( typeof url ).toBe( 'string');
  });
});
