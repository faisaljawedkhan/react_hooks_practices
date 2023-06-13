import React, { useReducer, useState } from 'react'
import "../UseReducerHook/AddAndDeleteData.css"

let initialstate = [
    { id: Date.now(), name: "Dipesh", email: "dipesh@gmail.com" }
]

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((contact) => {
                return contact.id !== action.payload.id
            });
        default:
            throw new Error();
    }
}

const AddAndDeleteData = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const addContactDetails = (e) => {
        e.preventDefault();
        const contact = {
            id : Date.now(),
            name,
            email
        }
        setName("")
        setEmail("")
        dispatch({type: "add", payload: contact})
    }
    return (
        <>
            <div className="main-div">
                <h1>Add and Delete Data</h1>
                <form action="" className="main-form-div" onSubmit={addContactDetails}>
                    <input type="text" name="name" id="name" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" name="email" id="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button>Add Contact</button>
                </form>
            </div>
            <div className="ul-div">
                <ul className='addDeleteUL'>
                    {
                        state.map((details) => {
                            return (
                                <li key={details.id}>
                                    <h2 className='addDeleteH2Tag'>{details.name}</h2>
                                    <h3 className='addDeleteH3Tag'>{details.email}</h3>
                                    <button className='delete-btn' onClick={() => dispatch({type: "delete", payload: {id: details.id}})}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default AddAndDeleteData;