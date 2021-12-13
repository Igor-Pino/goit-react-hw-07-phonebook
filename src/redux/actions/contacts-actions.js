import { createAction } from '@reduxjs/toolkit';

// const addContact = createAction('contacts/add', ({ name, number }) => {
//   return {
//     payload: {
//       id: ShortId.generate(),
//       name: name,
//       number: number,
//     },
//   };
// });
const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');
const deleteContact = createAction('contacts/delete');
const filterChange = createAction('contacts/changeFilter');

export { addContactRequest, deleteContact, filterChange, addContactSuccess, addContactError };
