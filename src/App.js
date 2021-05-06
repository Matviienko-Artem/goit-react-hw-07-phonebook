import React from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import style from './components/ContactForm/ContactForm.module.css';

const App = () => {
  return (
    <div className={style.container}>
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>

      <Filter />

      <ContactList />
    </div>
  );
};

export default App;
