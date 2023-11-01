import React, { useState } from 'react'
import "./ManageContact.css"

const AddContact = ({addContact}) => {
    // const [addContact] = props
    const [contactData, setContactData] = useState({name: "", email: ""})
    const handleChange = (e) => {
        if(e.target.name === "name") {
            setContactData({...contactData, name: e.target.value})
        } else {
            setContactData({...contactData, email: e.target.value})
        }
    }
    const SubmitFormData = () => {
        if (contactData.name === "" || contactData.email === "") {
            alert("Please fill the field")
            return
        } else {
            addContact(contactData);
            setContactData({name: "", email: ""})
        }
    }
    return(
        <>
        <div className="addContactFormDiv">
            <h3>Add Contact</h3>
            <form action="">
                <label htmlFor="name">Name</label><br />
                <input type="text" name="name" id="name" onChange={handleChange} value={contactData.name} /><br />

                <label htmlFor="email">Email</label><br />
                <input type="email" name="email" id="email" onChange={handleChange} value={contactData.email} /><br />
            </form>
            <button onClick={SubmitFormData}>Add Contact</button>
        </div>
        </>
    )
}

export default AddContact;