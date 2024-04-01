import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import style from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const initialContact = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too long"),
    number: Yup.string()
      .required("Required")
      .min(3, "Too short")
      .max(50, "Too long"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };
    onSubmit(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={style.form}>
        <div className={style.formWrap}>
          <label>Name</label>
          <Field className={style.field} type="text" name="name" />
          <ErrorMessage name="name" component="div" className={style.error} />
        </div>
        <label>Number</label>
        <div className={style.formWrap}>
          <Field className={style.field} type="text" name="number" />
          <ErrorMessage name="number" component="div" className={style.error} />
        </div>
        <button type="submit" className={style.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
