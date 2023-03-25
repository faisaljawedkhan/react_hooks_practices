import React from 'react'
import useCounter from '../Hooks/useCounter';

const Counter = () => {
    const [counter, increment, decrement, reset] = useCounter(0);
  return (
    <>
    <div className="counter">
        <h2>Counter</h2>
        <h3>{counter}</h3>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
    </>
  )
}

export default Counter;