import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from 'components/Phonebook/ContatForm/ContactForm.module.css'
export default class ContactForm extends Component {
 

  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, number } = this.state;
    const newContact = { id: Date.now().toString(), name, number };
    this.props.handleSubmit(newContact);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.formContainer} onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            className={styles.formInput}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number:
          <input
            className={styles.formInput}
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.formButton} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};