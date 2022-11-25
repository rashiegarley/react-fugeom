import React from "react";

export default function ContactDetails({
  contact,
  setContactDetail,
  setShow,
  setTrackContact,
}) {
  function handleClick(e) {
    e.preventDefault();
    setContactDetail({});
    setShow(true);
    setTrackContact({
      current: 'contact-list',
      previous: 'contact-detail',
      next: null,
    });
  }

  return (
    <div className="contact-details">
      <div className="bgimg">
        <span>
          <a href="" onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              width={20}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </a>
        </span>
        <img src={contact.img_url} width={40} alt={contact.name} />
        <h3>{contact.name}</h3>
      </div>
      <div className="contact-content">
        <ul>
          {contact.msisdns.map((msisdn) => {
            return <li>{msisdn}</li>;
          })}
          <li>{contact.address}</li>
        </ul>
      </div>
    </div>
  );
}