import React from 'react'
import { data, data1 } from './Main'

const ChildC = () => {
  return (
    <>
    <data.Consumer>
        {
            (name) => {
                return(
                    <data1.Consumer>
                        {
                            (city) => {
                                return(
                                    <>
                                        <h1>My name is {name}</h1>
                                        <h2>I am from {city}</h2>
                                    </>
                                )
                            }
                        }
                    </data1.Consumer>
                )
            }
        }
    </data.Consumer>
    </>
  )
}

export default ChildC