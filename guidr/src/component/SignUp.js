import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';

import './LoginForm.css';

import { withFormik, Form, Field } from 'formik';
function SignUp({ values, errors, touched }) {
  return (
    <Form className='formBody'>
      <h1> Sign Up to Procceed </h1>
      <Field
        className='input'
        type='text'
        name='username'
        placeholder='UserName'
      />
      {touched.username && errors.username && (
        <p className='errors'>{errors.username}</p>
      )}
      <Field
        className='input'
        type='password'
        name='password'
        placeholder='Password'
      />
      {touched.password && errors.password && (
        <p className='errors'>{errors.password}</p>
      )}
      <button className='button' type='submit' disabled={values.isSubmitting}>
        {values.isSubmitting ? 'SigningUp' : 'Sign Up'}
      </button>
    </Form>
  );
}

export default withFormik({
  mapPropsToValues: props => ({
    username: '',
    password: ''
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('UserName is Required!'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Password is Required')
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    axios
      .post('https://guidr-2.herokuapp.com/api/auth/register', values)
      .then(response => {
        console.log('Data', response);
      })
      .catch(err => console.log(err.response));

    setTimeout(() => {
      console.log('Entered Value', values);
      setSubmitting(false);
    }, 1000);
    resetForm();
  }
})(SignUp);
