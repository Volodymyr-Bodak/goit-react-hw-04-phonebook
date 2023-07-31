import React, { Component } from "react";
import ContactForm from "./Phonebook/ContatForm/Contactform";
import ContactList from "./Contactlist";
import Filter from "./Filter";
import PropTypes from "prop-types";


class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  handleChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleSubmit = (newContact) => {
    const { contacts } = this.state;

    const contactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChangeFilter={this.handleChangeFilter} />
        <ContactList contacts={filteredContacts} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
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
