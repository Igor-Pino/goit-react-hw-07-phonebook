import axios from 'axios';
import {
  getContactError,
  getContactRequest,
  getContactSuccess,
  addContactSuccess,
  addContactError,
  addContactRequest,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from '../actions/contacts-actions';

axios.defaults.baseURL = 'https://61b73cf9c95dd70017d413d0.mockapi.io';

const getContacts = () => async dispatch => {
  dispatch(getContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(getContactSuccess(data));
  } catch (error) {
    getContactError(error);
  }
};

const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(response => response.data)
    .then(data => dispatch(addContactSuccess(data)))
    .catch(error => addContactError(error));
};

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => deleteContactError(error));
};

export { getContacts, addContact, deleteContact };
