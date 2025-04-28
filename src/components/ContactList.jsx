import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts, deleteContact }) {
  return (
    <div className="contact-list">
      <h2>Contacts:</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        contacts.map((contact, index) => (
          <ContactItem
            key={index}
            contact={contact}
            index={index}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
}

export default ContactList;
