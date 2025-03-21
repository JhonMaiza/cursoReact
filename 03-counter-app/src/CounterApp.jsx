import Prototype from  'prop-types';
import { useState } from 'react';
export const CounterApp = ( { value } ) => {

  const [ counter, setCounter ] = useState(value)

  const handleAdd = () => {
    setCounter( counter + 1 );
    //setCounter( c => c + 1 )
  }
  const handleSubtract = () => {
    setCounter( counter - 1 );
  }

  const handleRestart = () => {
    setCounter( value );
  }
  return (
    <>
      <h1> Counter App </h1>
      <h2>{ counter }</h2>
      <button onClick={handleAdd}>
        Aumentar
      </button>

      <button onClick={handleSubtract}>
        Restar
      </button>

      <button aria-label='btn-reset' onClick={handleRestart}>
        Restablecer
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: Prototype.number.isRequired,
}

// CounterApp.defaultProps = {
//   value: 12,
// }
