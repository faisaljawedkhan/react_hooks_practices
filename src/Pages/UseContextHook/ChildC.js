import React, { useContext } from 'react'
import { data1, data2 } from './MainContextHook'

const ChildC = () => {
    const name = useContext(data1);
    const city = useContext(data2);
  return (
    <>
    <h1>My name is {name}</h1>
    <h2>I'm fron {city}</h2>
    </>
  )
}

export default ChildC