import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  const [ formState, setFormState ] = useState({
    username: 'strider',
    email: 'juan@outlook.com'
  });

  const { username, email} = formState;
  const onInputChange = ( { target } ) => {
    const { name, value } = target;

    setFormState( {
      ...formState,
      [ name ]: value
    })
  };

  useEffect( () => {
    // console.log('useEffect called');
    
  }, [ formState ]);

  useEffect( () => {
    // console.log('formState called');
  }, [ formState ]);

  useEffect( () => {
    // console.log('email called');
  }, [ email ]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input 
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          onChange={onInputChange}
          value={ username }
      />

      <input 
          type="text"
          className="form-control mt-2"
          placeholder="email"
          name="email"
          onChange={onInputChange}
          value={ email }
      />
      
      {
        ( username === 'strider') && (
          <Message/>
        )
      }
    </>
  )
}

