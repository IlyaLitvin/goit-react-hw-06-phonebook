import { combineReducers } from "redux";
import listAction from "./listActions";
import { createReducer } from "@reduxjs/toolkit";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const localList = JSON.parse(localStorage.getItem("contacts"));

const INITIAL_STATE = {
  contacts: localList || defaultContacts,
  filter: "",
};

const newContact = (state, action) => [...state, action.payload.contact];

const removeAnyContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer(INITIAL_STATE.contacts, {
  [listAction.addContact]: newContact,
  [listAction.removeContact]: removeAnyContact,
});

const filter = createReducer(INITIAL_STATE.filter, {
  [listAction.filterContact]: (state, action) => action.payload,
});

export default combineReducers({ items, filter });
