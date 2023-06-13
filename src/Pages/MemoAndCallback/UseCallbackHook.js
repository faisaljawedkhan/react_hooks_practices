import React, { useCallback, useState } from 'react'
import ChildA from './ChildA';

const UseCallbackHook = () => {
    const [add, setAdd] = useState(0);
    const [count, setCount] = useState(10);
    const Learning = useCallback(() => {
        //Some Declaration
    }, [count])
  return (
    <>
    <h1>Use Callback Hook</h1>
    <ChildA Learning={Learning} count={count} />
    <div className="div-one">
        <h2>{add}</h2>
        <button onClick={() => setAdd(add + 1)}>Add</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
    </>
  )
}

export default UseCallbackHook;