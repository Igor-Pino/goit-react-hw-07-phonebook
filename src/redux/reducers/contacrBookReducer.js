import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContactSuccess, deleteContact, filterChange } from '../actions/contacts-actions';

const contacts = createReducer([], {
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [filterChange]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});
