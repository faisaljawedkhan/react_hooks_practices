import React from 'react'
import "./ManageContact.css"
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = ({contact, removeContact}) => {
    // const [contact, removeContact] = props
    const contactList = contact.map((val, key) => {
        return(
            <div className='list-of-contact' key={key}>
                <div className="contact-name"><h4>{val.data.name}</h4></div>
                <div className="contact-email"><h4>{val.data.email}</h4></div>
                <div className="contact-icon"><span onClick={() => removeContact(val.id)}><DeleteIcon /></span></div>
            </div>
        )
    })
    return(
        <>
        <div className="newContactList">
            <h3>Contact List</h3>
            <div className="renderList">
                {contactList}
            </div>
        </div>
        </>
    )
}

export default ContactList;