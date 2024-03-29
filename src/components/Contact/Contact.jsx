import style from "./Contact.module.css";
import { BsPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

const Contact = ({ name, number }) => {
  return (
    <>
      <div className={style.contactBox}>
        <p className={style.contactName}>
          <BsPersonFill className={style.myIcon} size="22" />
          {name}
        </p>
        <p className={style.contactNumber}>
          <BsTelephoneFill className={style.myIcon} size="18" />
          {number}
        </p>
      </div>
      <button type="button" className={style.btnDelete}>
        Delete
      </button>
    </>
  );
};

export default Contact;
