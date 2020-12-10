import { combineReducers } from "redux";
import actionTypes from "./actionTypes.js";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload.contact];

    case actionTypes.REMOVE:
      return state.filter((contact) => contact.id !== payload.id);

    default:
      return state;
  }
};
const filter = (state = "", { type, payload }) => {
  switch (type) {
    case actionTypes.FILTER:
      return payload.filter;

    default:
      return state;
  }
};

export default combineReducers({ items, filter });
