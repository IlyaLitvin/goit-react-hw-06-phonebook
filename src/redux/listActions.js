import action from "./actionTypes.js";

const addContact = (contact) => ({
  type: action.ADD,
  payload: {
    contact,
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
