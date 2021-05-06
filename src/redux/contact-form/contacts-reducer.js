import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-action';

const itemsState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const addNew = (state, payload) => {
  const uniaqueName = state.find(
    contact => contact.name.toLowerCase() === payload.name.toLowerCase(),
  );
  if (payload.name === '') {
    alert('Вы забыли ввести имя контакта');
  } else if (payload.number === '') {
    alert('Вы забыли ввести номер контакта');
  } else if (uniaqueName) {
    alert(`${payload.name} уже есть в списке`);
  } else {
    return [payload, ...state];
  }
};

const itemsReducer = createReducer(itemsState, {
  [actions.addNewContact]: (state, { payload }) => addNew(state, payload),
  [actions.DeleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
