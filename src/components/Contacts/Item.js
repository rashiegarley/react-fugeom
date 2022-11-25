import React from 'react';

import Avatar from '../Avatar.js';

export default function ContactItem({ contact, handleShow }) {
  function changeNewView(e) {
    e.preventDefault();
    const id = Number(e.target.id);
    console.log({ id });
  }

  return (
    <li key={contact.id} className="contact-item">
      <Avatar src={contact.img_url} name={contact.name} />
      <div className="contact-info">
        <a href="" id={contact.id} onClick={handleShow}>
          {contact.name}
        </a>
      </div>
    </li>
  );
}
