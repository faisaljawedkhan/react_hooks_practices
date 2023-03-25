import React, { useEffect, useRef, useState } from 'react'

const UseUseRefHook = () => {
    const [value, setValue] = useState("");
    const [counter, setCounter] = useState(0);
    const showFocus = useRef("");
    const prevCounterValue = useRef("");
    // const [name, setName] = useState("");

    // const showValue = () => {
    //     setValue(value);
    // }
    const deleteValue = () => {
        // setName("")
        setValue("")
        showFocus.current.focus();
    }

    useEffect (() => {
      prevCounterValue.current = counter;
    }, [counter])
  return (
    <>
    <div className="App">
        <h1>Use Ref Hook</h1>
        <br />
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} ref={showFocus} />
        {/* <button onClick={showValue}>Submit</button> */}
        <button onClick={deleteValue}>Reset</button>
        <br />
        <h3>My Name is {value}</h3>
    </div>
    <hr />
    <div className="App">
      <h2>Random Counter : {counter}</h2>
      {
        typeof prevCounterValue.current !== "undefined" && <h2>Previous Counter : {prevCounterValue.current}</h2>
      }
      <br />
      <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>Generate Random Number</button>
    </div>
    </>
  )
}

export default UseUseRefHook;