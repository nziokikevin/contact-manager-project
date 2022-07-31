import React, {useState} from "react";
import {NavLink, useHistory} from "react-router-dom"

function AddContact(){
    const[contactAdd, setContactAdd] = useState({
        contact:{
            name:'',
            phone:'',
            email:'',
            company:'',
            group:''
        }
    })

    const updateInput = (e) => {
        setContactAdd({...contactAdd, contact:{...contactAdd.contact, [e.target.name]:e.target.value}})
    }

    const{contact} = contactAdd;

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault();
        const contactAdd = {
            name: contact.name,
            phone: contact.mobile,
            email: contact.email,
            company: contact.company,
            group: contact.group
        }
        fetch("https://json-server-contact-api.herokuapp.com/contacts", {
            method: 'POST',
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactAdd),
        })
        .then((r) => r.json())
        .then((newContact) => {
        console.log(newContact);
            history.push("/");
            e.target.reset()      
        });
    }

    return(
        <div>
           <section className="add-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-success fw-bold">Create Contact</p>
                        <p className="fst-italic">Add new contact below.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <input
                                required={true} 
                                name="name"
                                value={contactAdd.name}
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="mb-2">
                                <input
                                required={true} 
                                name="mobile"
                                value={contactAdd.mobile}
                                onChange={updateInput}
                                type="number" className="form-control" placeholder="Mobile" />
                            </div>
                            <div className="mb-2">
                                <input 
                                required={true} 
                                name="email"
                                value={contactAdd.email}
                                onChange={updateInput}
                                type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="mb-2">
                                <input 
                                required={true} 
                                name="company"
                                value={contactAdd.company}
                                onChange={updateInput}
                                type="text" className="form-control" placeholder="Company" />
                            </div>
                            <div className="mb-2">
                                <select 
                                required={true} 
                                name="group"
                                value={contactAdd.group}
                                onChange={updateInput}
                                className="form-control">
                                    <option>Select a group</option>
                                    <option>Colleague</option>
                                    <option>Community</option>
                                    <option>Family</option>
                                    <option>Friend</option>
                                    <option>Social</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <input type="submit" className="btn btn-success" value="Add" />
                                <NavLink to="/" className="btn btn-danger ms-2">Cancel</NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                    <img src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png" alt="" className="contact-img" />
                    </div>
                </div>
            </div>
           </section>
        </div>
    )
}

export default AddContact;
