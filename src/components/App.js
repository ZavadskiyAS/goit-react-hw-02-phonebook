import React, { Component } from 'react';
import Section from './section/Section';
import PhoneBook from './section/phoneBook/PhoneBook';
import ContactsList from './section/contactsList/ContactsList';
import FilterInput from './section/filterInput/FilterInput';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getContactInfo = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  filterInput = e => {
    this.setState({ filter: e.target.value });
  };

  contactsFilter = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(contact => contact.id !== id)],
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <PhoneBook
            getContactInfo={this.getContactInfo}
            contacts={this.state.contacts}
          />
        </Section>
        <Section title="Contacts">
          <FilterInput
            filter={this.state.filter}
            filterInput={this.filterInput}
          />
          <ContactsList
            contacts={this.contactsFilter()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
export default App;