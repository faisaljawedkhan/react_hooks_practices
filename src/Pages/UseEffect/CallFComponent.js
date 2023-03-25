import React, { useState } from 'react'
import FComponent from './FComponent';

const CallFComponent = () => {
    const [flag, setFlag] = useState(true);
  return (
    <>
    <div className="App">
        <h1>Use Effect Hook</h1>
        <button onClick={() => setFlag(!flag)}>Toggle Functional Component</button>
        <br /><br />
        {
            flag ? <FComponent /> : ""
        }
    </div>
    </>
  )
}

export default CallFComponent;