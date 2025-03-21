import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect( user ).toEqual(user);
  });

  test('getusuarioActivo debe de retornar un objeto', () => {
    const activeUserName = 'juanp';
    const UsuarioActivo = {
      uid: 'ABC567',
      username: activeUserName,
    }
    const activeUser = getUsuarioActivo(activeUserName);

    expect( activeUser ).toEqual( UsuarioActivo);
  })
  
});
