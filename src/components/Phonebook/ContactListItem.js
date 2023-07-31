import React from "react";
import PropTypes from "prop-types";

const ContactListItem = ({ contact, handleDelete }) => {
  const { id, name, number } = contact;
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
