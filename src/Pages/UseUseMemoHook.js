import React, { useMemo, useState } from 'react'

const UseUseMemoHook = () => {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    return factorial(counter)
  }, [counter]);
  const [name, setName] = useState("");
  function factorial(n) {
    // console.log("Rendered!");
    if(n < 0) {
      return -1; 
    }
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  return (
    <>
    <div className="App">
      <h1>Factorial of {counter} is {result}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button> 
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
    <hr />
    <div className="App">
      <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
      <h2>My name is {name}</h2>
    </div>
    </>
  )
}

export default UseUseMemoHook;