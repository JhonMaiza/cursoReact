import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const { counter, decrement, reset, increment } = useCounter( 1 );

  return (
    <>
      <h1>Counter with Custom Hook: { counter }</h1>
      <hr />
      <button className="btn btn-primary" onClick={ () => decrement( 2 ) }>-1</button>
      <button className="btn btn-primary" onClick={ reset }>Reset</button>
      <button className="btn btn-primary" onClick={ () => increment( 2 ) }>+1</button>
    </>
  )
}