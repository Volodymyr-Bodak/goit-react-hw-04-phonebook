import React, { useState, useEffect } from "react";
import ContactForm from "./Phonebook/ContatForm/Contactform";
import ContactList from "./Contactlist";
import Filter from "./Filter";
import PropTypes from "prop-types";

const Phonebook = () => {
  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      const storedContacts = localStorage.getItem("contacts");
      if (storedContacts) {
        setContacts(JSON.parse(storedContacts));
      }
    };

    fetchContacts();
  }, []);

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (newContact) => {
    const contactExists = contacts?.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts((prevContacts) => (prevContacts ? [...prevContacts, newContact] : [newContact]));
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) => (prevContacts ? prevContacts.filter((contact) => contact.id !== id) : null));
  };

  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (contacts === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};
Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  filter: PropTypes.string,
};

export default Phonebook;
