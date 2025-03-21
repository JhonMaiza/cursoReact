import { useState } from "react"
import { useForm } from "../hooks/useForm";

export const TodoAdd = ( { onNewTodo } ) => {

  // const [ value, setValue ] = useState( '' );

  // const onChange = ( { target } ) => {
  //   setValue( target.value );
  // };
  const { description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( !description ) return;

    onNewTodo({
      id: new Date().getTime(),
      description: description,
      done: false
    });
    // setValue('');
    onResetForm();
  };

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={ description }
        onChange={ onInputChange }
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}
