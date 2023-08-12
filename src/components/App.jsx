import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contactlist/Contactlist';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export function App() {
  // const [contacts, setContacts] = useState();

  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) || [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [searchQuery, setSearchQuery] = useState('');

 
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const finedNumber = contacts.find(
      contact => contact.number.toLowerCase() === data.number.toLowerCase()
    );

    if (finedNumber) {
      alert(
        `In your phoneBook already have this number his name is ${finedNumber.name}`
      );
      return;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const onChange = ({ target }) => {
    const { value } = target;
    const normalizedValue = value.toLowerCase().trim();
    setSearchQuery(normalizedValue);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = searchQuery.toLowerCase().trim();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deliteElement = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <>
      <ContactForm addContact={addContact} />
      <Filter onChange={onChange} searchQuery={searchQuery} />
      <ContactList
        contacts={getFilteredContacts()}
        deliteElement={deliteElement}
      />
    </>
  );
}

