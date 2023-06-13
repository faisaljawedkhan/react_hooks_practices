import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AxiosGetMethod = () => {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
           return setUserData(response.data);
        })
    },[])
  return (
    <>
    {
        userData.map((data) => {
            return <h3 id={data.id}>{data.name}</h3>
        })
    }
    </>
  )
}

export default AxiosGetMethod;