import { useEffect, useState } from 'react';

import Contact from './Contact';

const INITIAL_STATE = [
  {
    id: 1,
    name: 'John Doe',
    email: 'jdoe@gmail.com',
    phone: '555-555-5555',
  },
  {
    id: 2,
    name: 'Karen Williams',
    email: 'Karen@gmail.com',
    phone: '222-222-2222',
  },
  {
    id: 3,
    name: 'Henry Johnson',
    email: 'henry@gmail.com',
    phone: '111-111-1111',
  },
];

interface Contactos {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactsState {
  contacts: Contactos[];
}

function Contacts() {
  const [contacts, setContacts] = useState<ContactsState['contacts']>([]);

  useEffect(() => {
    setContacts(INITIAL_STATE);
  }, []);

  return (
    <div>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </div>
  );
}

export default Contacts;
