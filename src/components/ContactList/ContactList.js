import React from 'react';
import style from './ContactList.module.css';
import { connect } from 'react-redux';
import operations from '../../redux/contact-form/contacts-operations';
import selectors from '../../redux/contact-form/contacts-selectors';

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

const mapStateToProps = state => ({
  contacts: selectors.getVisibleContacs(state),
});

const mapDispatchToProps = dispatch => ({
  ondeleteContact: contactId => dispatch(operations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
