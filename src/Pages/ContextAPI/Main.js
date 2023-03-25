import React, { createContext } from 'react'
import ChildA from './ChildA';

const data = createContext();
const data1 = createContext();
const Main = () => {
    const name = "Faisal Khan"
    const city = "Dhanbad"
  return (
    <>
    <data.Provider value = {name}>
        <data1.Provider value = {city}>
            <ChildA />
        </data1.Provider>
    </data.Provider>
    </>
  )
}

export default Main;
export {data, data1};