import { useState } from 'react';
import css from './ContactForm.module.css';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSumbit = e => {
    e.preventDefault();

    if (!name || !number) {
      return;
    }

    addContact({
      name: name,
      number: number,
    });

    setName('');
    setNumber('');
  };
  return (
    <form className={css.contactForm} action="" onSubmit={handleSumbit}>
      <h2>Name</h2>
      <input
        type="text"
        name="name"
        required
        value={name}
        onChange={handleInput}
        className={css.inputField}
      />
      <h2>Number</h2>
      <input
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleInput}
        className={css.inputField}
      />
      <button type="submit" className={css.submitButton}>
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
