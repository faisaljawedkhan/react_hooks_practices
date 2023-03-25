import React, { useEffect, useState } from 'react'

const FComponent = () => {
    const [time, setTime] = useState(new Date().toString());
    const [message, setMessage] = useState("Functional Component");

    useEffect (() => {
        console.log("Functional Componet Mount");
        let interval = setInterval(showTime, 1000);
        return () => {
            clearInterval(interval);
            // document.write("Clean up!!!")
        }
    },[time]);

    const showTime = () => {
        setTime(new Date().toString());
    }

    const messageUpdated = () => {
        setMessage("Functional Component Updated!");
    }
  return (
    <>
    <div className="App">
        <div>{time}</div>
        <button onClick={showTime}>Show Time</button>
    </div>

    <br /><br />

    <div className="App">
        <div>{message}</div>
        <button onClick={messageUpdated}>Change Message</button>
    </div>
    </>
  )
}

export default FComponent;