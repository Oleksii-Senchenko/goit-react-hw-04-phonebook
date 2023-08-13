import React from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';

function Contactlist({ contacts }) {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contact List</h2>
      <ul className={css.list}>
        {contacts.map(({ name, number, id }) => (
          <ContactListItem key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </div>
  );
}

export default Contactlist;

Contactlist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deliteElement: PropTypes.func.isRequired,
};
