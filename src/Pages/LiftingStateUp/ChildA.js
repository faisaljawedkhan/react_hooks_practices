import React, { useState } from 'react'

const ChildA = (props) => {
    const [name, setName] = useState("");
    const [value, setValue] = useState([]);
    function handleSubmit (e) {
        e.preventDefault();
        props.getData(name);
    }

    function addItems () {
        setValue([...value, {
            id : value.length,
            value : name
        }])
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <button onClick={addItems}>Submit</button>
    </form>
    <ol>
    {
        value.map((item) => (
            <li key={item.id}>{item.value}</li>
        ))
    }
    </ol>
    </>
  )
}

export default ChildA