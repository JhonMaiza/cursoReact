import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {
  const [ counter, setCounter ] = useState( initialValue );

  const increment = ( value = 1 ) => {
    setCounter( ( currrent ) => currrent + value );
  };

  const reset = () => {
    setCounter( initialValue );
  };

  const decrement = ( value = 1 ) => {
    if( counter === 0 ) return;
    setCounter( ( currrent ) => currrent  - value );
  };

  return {
    counter,
    increment,
    reset,
    decrement
  }
}