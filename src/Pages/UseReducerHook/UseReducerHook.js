import React, { useReducer } from 'react'


let initialstate = 0;
const reducer = (state, action) => {
    switch(action) {
        case "increment" :
            return state + 1;
        case "decrement" :
            return state - 1;
        case "reset" :
            return state = 0;
        default :
            return state;
    }
}

const UseReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
    <div className="button-div">
        <h1>Count : {count}</h1>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button style={{marginLeft: "1rem"}} onClick={() => dispatch("decrement")}>Decrement</button>
        <button style={{marginLeft: "1rem"}} onClick={() => dispatch("reset")}>Reset</button>
    </div>
    </>
  )
}

export default UseReducerHook;