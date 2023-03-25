import React, { useState } from "react";

const UseUseStateHook = () => {
    const [name, setName] = useState("Faisal Khan");
    const [names, setNames] = useState([]);
    const nameAdded = (e) => {
        e.preventDefault();
        setNames([...names, {id : names.length, name}]);
        setName("");
    }
    return(
        <>
        <div className="App">
            <h2>Use State Hook</h2>
            <form action="" onSubmit={nameAdded}>
                <input type="text" value={name} placeholder="Add Names" onChange={(e) => setName(e.target.value)} />
                <button>Submit</button>
            </form>
            <ul style={{listStyle : "none"}}>
            {
                names.map((data) => (
                 <li key={data.id}>{data.name}</li>
                ))
            }
            </ul>
        </div>
        </>
    );
}

export default UseUseStateHook;