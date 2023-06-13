
import axios from 'axios';
import React, { useState } from 'react'

const AxiosPostMethod = () => {
    const data = {firstName : "", lastName : ""}
    const [userData, setUserData] = useState(data);
    const userInputVal = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", userData).then((response) => {
            console.log(response);
        })
    }
  return (
    <>
    <label htmlFor="firstName">First Name</label>:
    <input type="text" name="firstName" id="firstName" value={userData.firstName} onChange={userInputVal} /><br /><br />
    <label htmlFor="lastName">Last Name</label>:
    <input type="text" name="lastName" id="lastName" value={userData.lastName} onChange={userInputVal} /><br /><br />
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default AxiosPostMethod;