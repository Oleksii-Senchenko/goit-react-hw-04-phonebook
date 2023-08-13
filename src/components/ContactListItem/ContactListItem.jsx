import React from 'react';
import css from '../Contactlist/ContactList.module.css';
import { useContext } from 'react';
import ContactContext from 'context';

function ContactListItem({ id, name, number}) {
  const {deliteElement} = useContext(ContactContext)
    return (
    
    <li key={id} className={css.item}>
      <p className={css.name}>
        {name}:{number}
      </p>
      <button onClick={() => deliteElement(id)}>Delite</button>
    </li>
  );
}

export default ContactListItem;
