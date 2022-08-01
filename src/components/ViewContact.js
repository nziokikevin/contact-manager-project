import React, {useState, useEffect} from "react";
import {NavLink, useParams} from "react-router-dom";

function ViewContact(){
    const[contact, setContact] = useState([])
    const {contactId} = useParams();
    const[isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch(`https://json-server-contact-api.herokuapp.com/contacts/${contactId}`)
        .then((r) => r.json())
        .then((contactViewData) => {
            setContact(contactViewData)
            setIsLoaded(true);
        })
    }, [contactId])
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
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">View your contact here.</p>
                        </div>
                    </div>
                </div>
            </section>
            {
                Object.keys(contact).length > 0 &&
                <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="" className="contact-img" />
                        </div>
                        <div className="col-md-8">
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
                                        <li className="list-group-item list-group-item-action">
                                            Company: <span className="fw-bold">{contact.company}</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Group: <span className="fw-bold">{contact.group}</span>
                                        </li>
                                    </ul>
                        </div>
                    </div>
                    <div className="row">   
                        <div className="col">
                            <NavLink to="/" className="btn btn-warning">Back</NavLink>
                        </div>
                    </div>
                </div>
                
            </section>

            }


        </div>

    )
}

export default ViewContact;