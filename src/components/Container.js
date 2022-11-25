import React, { useState, useContext, createContext } from 'react';

import SearchResults from './Contacts/Search.js';
import ContactList from './Contacts/Lists.js';

const contactsArray = createContext([
  {
    id: 1,
    name: 'Carlos Nah',
    img_url: 'https://api.multiavatar.com/CN.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 2,
    name: 'Paul Rome',
    img_url: 'https://api.multiavatar.com/PR.png',
    address: 'Congo Town',
    msisdns: ['0776778977', '0555678934'],
  },
  {
    id: 3,
    name: 'Jacob Brown',
    img_url: 'https://api.multiavatar.com/JB.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 4,
    name: 'Flomo Kortu',
    img_url: 'https://api.multiavatar.com/FK.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 5,
    name: 'Abraham Kortu',
    img_url: 'https://api.multiavatar.com/FK.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 6,
    name: 'Flomo Kortu',
    img_url: 'https://api.multiavatar.com/FK.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
  {
    id: 7,
    name: 'Abraham Kortu',
    img_url: 'https://api.multiavatar.com/FK.png',
    address: 'Congo Town',
    msisdns: ['0776789977', '0555678934'],
  },
]);

export default function Container(props) {
  const [searching, setSearching] = useState({
    isSearching: false,
    val: '',
  });

  const [contacts, setContacts] = useState(useContext(contactsArray));
  const [displayContacts, setDisplayContact] = useState(contacts);

  function searchContactsByName(e) {
    const value = e.target.value;

    const filteredResult = [...contacts].filter((contact) => {
      const jb = contact.name.toLowerCase().includes(value.toLowerCase());
      return jb;
    });

    console.log({ filteredResult });

    setDisplayContact(filteredResult);

    // console.log({ contact2: contacts });

    setSearching({
      isSearching: true,
      val: value,
    });
  }

  // useEffect(() => {
  //   setContacts(contacts);
  // }, [contacts]);

  return (
    <div className="container">
      <h2 id="project-title">Phonebook App</h2>

      <div class="search-container">
        <input onChange={searchContactsByName} type="text" />
      </div>

      {searching.isSearching && searching.val.length > 0 ? (
        <SearchResults contacts={displayContacts} />
      ) : (
        <ContactList contactsArray={contactsArray}/>
      )}
    </div>
  );
}
