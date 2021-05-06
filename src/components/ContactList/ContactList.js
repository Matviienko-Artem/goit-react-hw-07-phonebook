import React from 'react';
import style from './ContactList.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact-form/contacts-action';

const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <div>
      <ul className={style.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={style.list_item}>
              {contact.name}: <b>{contact.number}</b>
              <button
                onClick={() => ondeleteContact(contact.id)}
                className={style.list_item_button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  const { items, filter } = state.contacts;

  return {
    contacts: items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
    ),
  };
};

const mapDispatchToProps = dispatch => ({
  ondeleteContact: contactId => dispatch(actions.DeleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
