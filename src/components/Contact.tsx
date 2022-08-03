import { useState } from 'react';

interface ContactProps {
  contact: {
    id?: number;
    name: string;
    email: string;
    phone: string;
  };
}

interface ShowContactI {
  showContact: boolean;
}

function Contact(props: ContactProps) {
  const [showContact, setShowContact] =
    useState<ShowContactI['showContact']>(false);
  const { contact } = props;

  const onShowClick = () => {
    setShowContact(showContact => !showContact);
  };

  return (
    <div className="card card-body mb-3">
      <h4>
        {contact.name}{' '}
        <i onClick={onShowClick} className="fas fa-sort-down"></i>
      </h4>
      {showContact && (
        <ul className="list-group">
          <li className="list-group-item">Email: {contact.email}</li>
          <li className="list-group-item">Phone: {contact.phone}</li>
        </ul>
      )}
    </div>
  );
}

export default Contact;
