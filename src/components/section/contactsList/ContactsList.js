import React from 'react';
import ContactsItem from './contactsItem/ContactsItem';

const ContactsList = ({ contacts, deleteContact }) => {
  if (contacts.length) {
    return (
      <ul>
        {contacts.map(contact => (
          <ContactsItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    );
  } else {
    return <h3>Add your first contact!</h3>;
  }
};

export default ContactsList;