import React, { useReducer, useState } from 'react'
import "./AddAndDeleteData.css"
import AxiosGetMethod from '../AxiosFile/AxiosGetMethod'

let initialstate = [
    { id: Date.now(), name: "Dipesh", email: "dipesh@gmail.com" }
]

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload]
        case "delete":
            return state.filter((data) => {
                return data.id !== action.payload.id
            })
        default:
            throw new Error();
    }
}

const AddAndDeleteNewData = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const addContactDetails = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        const contact = {
            id: Date.now(),
            name,
            email
        }
        dispatch({ type: "add", payload: contact})
    }
    return (
        <>
            <div className="main-div">
                <h1>Add and Delete Data</h1>
                <form action="" className="main-form-div" onSubmit={addContactDetails}>
                    <input type="text" name="name" id="name" placeholder='Add Your Name' onChange={(e) => setName(e.target.value)} value={name} />
                    <input type="email" name="email" id="email" placeholder='Add Your Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <button>Add Contact</button>
                </form>
            </div>
            <div className="ul-div">
                <ul className="addDeleteUL">
                    {
                        state.map((contacts) => {
                            return (
                                <li key={contacts.id}>
                                    <h2 className="addDeleteH2Tag">{contacts.name}</h2>
                                    <h2 className="addDeleteH3Tag">{contacts.email}</h2>
                                    <button className="delete-btn" onClick={() => dispatch({type:"delete", payload: {id: contacts.id}})}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <AxiosGetMethod />
        </>
    )
}

export default AddAndDeleteNewData;