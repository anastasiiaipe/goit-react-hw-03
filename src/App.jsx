// import { useState } from "react";
import contacts from "./components/data/contacts.json";
import ContactList from "./components/ContactList/ContactList";

import "./App.css";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
