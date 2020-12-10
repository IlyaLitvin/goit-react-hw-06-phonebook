import { combineReducers } from "redux";
import actionTypes from "./actionTypes.js";

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

const items = (state = INITIAL_STATE.contacts, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload.contact];

    case actionTypes.REMOVE:
      return state.filter((contact) => contact.id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = INITIAL_STATE.filter, { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
