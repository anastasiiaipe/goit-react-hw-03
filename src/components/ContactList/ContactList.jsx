import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={style.contactItem}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
