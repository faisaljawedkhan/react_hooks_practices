import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);
    const multiplication = useMemo(function multiply() {
        console.log(15);
        return add * 2;
    }, [add])
  return (
    <>
    <h2>Use Memo Hook</h2>
    <div className="main-div">
        {multiplication}<br /><br />

        <button onClick={() => setAdd(add + 1)}>Add</button>
        <span style={{fontSize: "21px", marginLeft: "2rem"}}>{add}</span><br /><br />
        <button onClick={() => setMinus(minus - 1)}>Subtract</button>
        <span style={{fontSize: "21px", marginLeft: "2rem"}}>{minus}</span>
    </div>
    </>
  )
}

export default UseMemoHook;