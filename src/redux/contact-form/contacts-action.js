import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addNewContact = createAction('contacts/AddNewContact', value => ({
  payload: {
    id: uuidv4(),
    name: value.name,
    number: value.number,
  },
}));
const changeFilter = createAction('contacts/ChangeFilter');
const DeleteContact = createAction('contacts/DeleteContact');

export { addNewContact, changeFilter, DeleteContact };
