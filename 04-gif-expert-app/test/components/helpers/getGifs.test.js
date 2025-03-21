import { getGifts } from "../../../src/helpers/getGifs"

describe('Pruebas en getGifs', () => {
  test('debe de retornar un arrreglo de gifs ', async () => {
    const gifs = await getGifts('One Punch');
    // console.log();
    expect( gifs.length ).toBeGreaterThan( 0 );
    expect( gifs[0]).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String )
    });
  });
  
})
