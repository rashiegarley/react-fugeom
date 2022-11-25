import React, { useState } from 'react';

import { createContact } from '../../utils/firestore-helper.js';

export default function AddContact({
  setShow,
  setTrackContact,
  setContacts,
  contacts,
}) {
  const [cancelBtn, setCancelBtn] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [imgUrlInput, setImgUrlInput] = useState('');
  const [msisdnsInput, setMSISDNSInput] = useState('');

  function handleCancelBtn() {
    setTrackContact({
      current: 'contact-list',
      previous: null,
      next: null,
    });

    setShow(true);
  }

  function handleSaveBtn() {
    if (
      nameInput.length > 0 &&
      addressInput.length > 0 &&
      imgUrlInput.length > 0 &&
      msisdnsInput.length > 0
    ) {
      setContacts([
        ...contacts,
        {
          id: contacts[contacts.length - 1].id + 1,
          name: nameInput,
          img_url: imgUrlInput,
          address: addressInput,
          msisdns: msisdnsInput.split('/'),
        },
      ]);

      createContact({
        // id: contacts[contacts.length - 1].id + 1,
        name: nameInput,
        img_url: imgUrlInput,
        address: addressInput,
        msisdns: msisdnsInput.split('/'),
      });

      setTrackContact({
        current: 'contact-list',
        previous: null,
        next: null,
      });
    }
  }

  return (
    <div id="form-container">
      <div className="form-item">
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => setNameInput(e.target.value)}
          name="name"
          type="text"
        />
      </div>
      <div className="form-item">
        <label htmlFor="address">Address: </label>
        <input
          onChange={(e) => setAddressInput(e.target.value)}
          name="address"
          type="text"
        />
      </div>
      <div className="form-item">
        <label htmlFor="msisdns">MSISDNS: </label>
        <input
          onChange={(e) => setMSISDNSInput(e.target.value)}
          name="msisdns"
          type="text"
        />
      </div>
      <div className="form-item">
        <label htmlFor="img-url">Image Url: </label>
        <input
          onChange={(e) => setImgUrlInput(e.target.value)}
          name="img-url"
          type="text"
        />
      </div>
      <div className="form-item button-container">
        <div className="button-item">
          <button onClick={handleSaveBtn}>Create Contact</button>
        </div>
        <div className="button-item">
          <button onClick={handleCancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
