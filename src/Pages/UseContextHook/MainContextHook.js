import React, { createContext } from 'react'
import ChildA from './ChildA'

const data1 = createContext();
const data2 = createContext();
const MainContextHook = () => {
    const name = "Khan Sahab"
    const city = "Dhanbad"
  return (
    <>
    <data1.Provider value = {name}>
        <data2.Provider value = {city}>
            <ChildA />
        </data2.Provider>
    </data1.Provider>
    </>
  )
}

export default MainContextHook;
export {data1, data2};