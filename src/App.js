import React from "react";
import {Switch, Route} from "react-router-dom";
import ContactList from "./components/ContactList";
import NavBar from "./components/NavBar";
import AddContact from "./components/AddContact";
import ViewContact from "./components/ViewContact";


function App(){
  
  return(
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" >
          <ContactList />
        </Route>
        <Route exact path="/contacts/add" >
          <AddContact />
        </Route>
        <Route exact path="/contacts/view/:contactId" >
          <ViewContact />
        </Route>
      </Switch>
    </div>
  )
}

export default App;