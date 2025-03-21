import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  
  const{ formState, onInputChange, username, email, password, onResetForm} = useForm({
      username: '',
      email:    '',
      password: '',
    }
  );
  //const { username, email, password} = formState;

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
      <h1>Formulario FormWithCustomHook</h1>
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
      
      <input 
          type="text"
          className="form-control mt-2"
          placeholder="password"
          name="password"
          onChange={onInputChange}
          value={ password }
      />

      <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
    </>
  )
}

