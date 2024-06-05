import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('This field is required to fill!')
    .min(3, 'Must be at least 3 characters long')
    .max(50, 'Must be not longer than 50 characters'),
  number: Yup.string()
    .required('This field is required to fill!')
    .min(3, 'must be at least 3 characters long')
    .max(50, 'must be not longer than 50 characters'),
});

export default function ContactForm({ onContactAdd }) {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const contactId = nanoid(10);

  return (
    <Formik
      initialValues={{
        id: '',
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        onContactAdd({
          id: contactId,
          name: values.name,
          number: values.number,
        });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" type="text" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="span"/>
        
          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" type="text" id={numberFieldId} />
          <ErrorMessage className={css.error} name='number'component="span"/>
       
        <button className={css.btn} type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}