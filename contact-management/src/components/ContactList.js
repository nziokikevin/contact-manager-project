import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom"

function ContactList(){
    const[contacts, setContacts] = useState([]);
    const[search, setSearch] = useState('')
    const[isLoaded, setIsLoaded] = useState(false)


    useEffect(() => {
        fetch("https://json-server-contact-api.herokuapp.com/contacts")
        .then((r) => r.json())
        .then((contactData) => {
            setContacts(contactData)
            setIsLoaded(true);
        })
    }, [])

    function handleDelete(contactId) {
        fetch(`https://json-server-contact-api.herokuapp.com/contacts/${contactId}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => {
        const updateContact = contacts.filter((contact) => contact.id !== contactId)
        setContacts(updateContact)
          })

    }
    if(!isLoaded) return <div><button className="btn btn-primary" type="button" disabled>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span className="visually-hidden">Loading...</span>
  </button>
  <button className="btn btn-primary" type="button" disabled>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
  </div>
    return(
        <div>
        <section className="contact-search p-2" >
            <div className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 fw-bold">Contact Manager
                                <NavLink to={"/contacts/add"} className="btn btn-primary ms-2">
                                    <i className="fa fa-plus-circle me-1" />
                                    New</NavLink>
                            </p>
                            <p className="fst-italic">Welcome to the newest contact management system in town. You save, we sort!</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row" >
                                    <div className="col">
                                    <div className="mb-2">
                                        <input 
                                        name="text"
                                        value={search.text}
                                        onChange={(e) => {setSearch(e.target.value)}}
                                        type="text"className="form-control" placeholder="Search Names" />
                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search" />
                                    </div>
                                    </div>            
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="contact-list">
            <div className="container">
                <div className="row">
                    {
                        contacts.length > 0 && contacts.filter((contact) => {
                            return(
                                contact.name.toLowerCase().includes(search.toLowerCase())
                            )
                        }).map(contact => {
                            return(
                                <div className="col-md-6" key={contact.id}>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                        <div className="col-md-4">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" className="contact-img" />
        
                                        </div>
                                        <div className="col-md-7">
                                            <ul className="list-group">
                                                <li className="list-group-item list-group-item-action">
                                                    Name: <span className="fw-bold">{contact.name}</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Mobile: <span className="fw-bold">{contact.phone}</span>
                                                </li>
                                                <li className="list-group-item list-group-item-action">
                                                    Email: <span className="fw-bold">{contact.email}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-1 d-flex flex-column align-items-center">
                                            <NavLink to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
                                                <i className="fa fa-eye" />
                                            </NavLink>
                                            <button className="btn btn-danger my-1" onClick={() => handleDelete(contact.id)}>
                                                <i className="fa fa-trash" />
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
        </div>


     
    )
}

export default ContactList;