import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("ADD_CONTACT", ({ name, number }) => ({
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}));

const removeContact = createAction("REMOVE_CONTACT");

const filterContact = createAction("FILTER_CONTACTS");

export default { addContact, removeContact, filterContact };
