import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "./Phonebook/ContactListItem";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
