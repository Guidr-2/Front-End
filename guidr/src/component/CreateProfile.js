import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';

import './LoginForm.css';

//validate Age

function validateAge(value) {
  let error;
  if (value < '18') {
    error = 'Your too young';
  } else if (value > '99') {
    error = 'Your too Old';
  }
  return error;
}

function CreateProfile({ values, errors, touched, ...props }) {
  return (
    <Form className='formBody'>
      <h1> Create New Profile</h1>
      <Field className='input' as='select' name='title' placeholder='Title'>
        <option value='mr'></option>
        <option value='Mr.'> Mr.</option>
        <option value='Mrs.'> Mrs.</option>
      </Field>
      {touched.title && errors.title && (
        <p className='errors'>{errors.title}</p>
      )}
      <Field
        className='input'
        as='textarea'
        name='tagline'
        placeholder='Short Description'
      />
      {touched.tagline && errors.tagline && (
        <p className='errors'>{errors.tagline}</p>
      )}
      Type of Tour Guid
      <Field
        className='input'
        as='select'
        name='guide_specialty'
        placeholder='Title'>
        <option value='Free Lance'>Free Lance</option>
        <option value='Staff Guide'>Staff Guide</option>
        <option value='Local Guide'>Local Guide</option>
        <option value='Escort Guide'>Escort Guide</option>
      </Field>
      <Field
        validate={validateAge}
        className='input'
        type='number'
        name='age'
        placeholder='Age'></Field>
      <div>{errors.validateAge}</div>
      <button className='button' type='submit' disabled={values.isSubmitting}>
        {values.isSubmitting ? 'Submitting' : 'Create Profile'}
      </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: ({ title, guide_specialty, age, tagline }) => ({
    title: title || '',
    guide_specialty: guide_specialty || '',
    age: age || '',
    tagline: tagline || ''
  }),
  validationSchema: Yup.object().shape({
    tagline: Yup.string().required('Please add Some Descriptions!'),
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Select a Title')
  }),
  handleSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
    axios
      .post('https://guidr-2.herokuapp.com/api/profiles', values)
      .then(response => {
        console.log('Data', response);
        setStatus(response.data);
      })
      .catch(err => console.log(err.response));

    setTimeout(() => {
      console.log('Entered Value', values);
      setSubmitting(false);
    }, 1000);
    resetForm();
  }
})(CreateProfile);
