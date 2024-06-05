import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

export default function ContactList({ contacts, onContactDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} onContactDelete={onContactDelete} />
        </li>
      ))}
    </ul>
  );
}