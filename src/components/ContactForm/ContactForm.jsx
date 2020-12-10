import React, { Component } from "react";
import styles from "./ContactForm.module.css";
import { connect } from "react-redux";
import newContact from "../../redux/listActions.js";
import ErrNot from "../ErrorNotification/ErrorNotification";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    contactAdded: false,
    declaredName: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const rule = this.props.list.some(
      (contact) => contact.name === this.state.name
    );
    if (rule) {
      this.setState({ contactAdded: true });
      setTimeout(() => this.setState({ contactAdded: false }), 2000);
      return;
    }
    this.props.addContact({ ...this.state });
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number, declaredName, contactAdded } = this.state;
    return (
      <>
        <ErrNot name={declaredName} contactAdded={contactAdded} />
        <form
          action="submit"
          onSubmit={this.handleSubmit}
          className={styles.contactForm}
        >
          <label htmlFor="name" className={styles.contactFormLabel}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="name"
            onChange={this.handleChange}
          />
          <label htmlFor="number" className={styles.contactFormLabel}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            placeholder="number"
            value={number}
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Add contact"
            className={styles.contactFormBtn}
          />
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.contacts.items,
});

const mapDispatchToProps = {
  addContact: newContact.addContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
