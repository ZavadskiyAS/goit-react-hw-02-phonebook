import React from 'react';

const ContactsItem = ({ contact: { id, name, number }, deleteContact }) => (
  <li>
    <p>{name}:{number}</p>
    <button id={id} onClick={deleteContact}>
      Delete
    </button>
  </li>
);

export default ContactsItem;