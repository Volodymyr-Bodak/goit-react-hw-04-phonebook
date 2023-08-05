import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from 'components/Phonebook/ContatForm/ContactForm.module.css';

const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newContact = { id: Date.now().toString(), name, number };
    handleSubmit(newContact);
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <label>
        Name:
        <input
          className={styles.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number:
        <input
          className={styles.formInput}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.formButton} type="submit">
        Add Contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
