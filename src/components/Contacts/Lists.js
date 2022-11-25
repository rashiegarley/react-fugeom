import React, { useState, useContext } from 'react';

import AddContact from './Add.js';
import ContactItem from './Item.js';
import ContactDetails from './Details.js';
import { getContacts } from '../../utils/firestore-helper.js';

export default function ContactList() {
  const [show, setShow] = useState(true);
  const [contactDetail, setContactDetail] = useState({});
  const [trackContact, setTrackContact] = useState({
    current: 'contact-list',
    previous: null,
    next: null,
  });

  // const [newContacts, setNewContacts] = useState([]);
  const [contacts, setContacts] = useState([]);

  React.useEffect(() => {
    return async () => {
      const data = await getContacts();
      setContacts(data);
    };
  }, [setContacts]);

  function getContactArrInfo(id) {
    return contacts.filter((contact) => contact.id === id)[0];
  }

  function handleShow(e) {
    e.preventDefault();
    const id = e.target.id;
    setContactDetail(getContactArrInfo(id));
    setShow(!show);
    tracker({
      current: 'contact-list',
      previous: null,
      next: 'contact-detail',
    });
  }

  function handleIcon(e) {
    e.preventDefault();
    // setShow(!show);
    console.log(e.target.id);
    tracker({ current: 'contact-list', previous: null, next: 'add-contact' });
  }

  function tracker({ current, previous, next }) {
    setTrackContact({
      current: current ?? null,
      previous: previous ?? null,
      next: next ?? null,
    });
  }

  function displayContent() {
    if (show && trackContact.next === 'add-contact') {
      return (
        <AddContact
          setShow={setShow}
          setTrackContact={setTrackContact}
          setContacts={setContacts}
          contacts={contacts}
        />
      );
    } else if (
      show &&
      trackContact.current === 'contact-list' &&
      trackContact.next === null
    ) {
      return (
        <div class="contact-list">
          <ul>
            {contacts.map((contact) => {
              return <ContactItem contact={contact} handleShow={handleShow} />;
            })}
          </ul>
          <div className="add-contact">
            <a href="" onClick={handleIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width={30}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <ContactDetails
          contact={contactDetail}
          setShow={setShow}
          setContactDetail={setContactDetail}
          setTrackContact={setTrackContact}
        />
      );
    }
  }

  return displayContent();
}
