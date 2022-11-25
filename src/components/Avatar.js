import React from "react";

export default function Avatar({ src, name }) {
  return (
    <div className="contact-img">
      <img src={src} width={40} height={40} alt={name} />
    </div>
  );
}