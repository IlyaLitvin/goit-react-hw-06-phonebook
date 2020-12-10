import action from "./actionTypes.js";
import { v4 as uuidv4 } from "uuid";

const addContact = ({ name, number }) => ({
  type: action.ADD,
  payload: {
    contact: { id: uuidv4(), name, number },
  },
});

const removeContact = (id) => ({
  type: action.REMOVE,
  payload: {
    id,
  },
});

const filterContact = (filter) => ({
  type: action.FILTER,
  payload: {
    filter,
  },
});

export default { addContact, removeContact, filterContact };
