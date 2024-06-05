import { FaUser } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export default function Contact({ data, onContactDelete }) {
  return (
    <div className={css.card}>
      <div className={css.info}>
        <p>
          <FaUser className={css.icon} />
          {data.name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {data.number}
        </p>
      </div>
      <button className={css.btn}
        onClick={() => {
          onContactDelete(data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}