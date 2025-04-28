import React from "react";

function ContactItem({ contact, index, deleteContact }) {
  return (
    <div className="contact-item">
      <span>
        <strong>{index + 1}. {contact.name}</strong> - {contact.email}
      </span>
      <button onClick={() => deleteContact(index)}>Delete</button>
    </div>
  );
}

export default ContactItem;
