import React from 'react'
import ChildA from './ChildA'

const MainFile = () => {
    function getData (data) {
        console.log(data);
    }
  return (
    <>
    <ChildA getData = {getData} />
    </>
  )
}

export default MainFile