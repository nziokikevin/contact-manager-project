import React from "react";
import {NavLink} from "react-router-dom"

function NavBar(){

    return(
        <div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <NavLink to={"/"} className="navbar-brand" >
                        <i className="fa fa-mobile text-danger"/><span className="text-danger"> KN </span> Contact <span className="text-danger">Manager</span>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;