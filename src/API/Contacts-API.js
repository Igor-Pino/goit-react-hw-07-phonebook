import axios from 'axios';

axios.defaults.baseURL = 'https://61b73cf9c95dd70017d413d0.mockapi.io';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

const addContact = contact => {
  return axios.post('/contacts', contact).then(({ data }) => data);
};

const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

// const updateContact = (contactId, update) => {
//     return axios.delete(`/contacts/${contactId}`, update).then(({data})=> data);
// }

export { fetchContacts, addContact, deleteContact };
