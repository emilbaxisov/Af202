import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
import Header from '../../layouts/header';
import {Helmet} from "react-helmet"

const SignupSchema = Yup.object().shape({
  imgUrl: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
  data: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    data2: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  
});

export const Contact = () => (
  <div>
    <Helmet>
      <title>
        Contact
      </title>
    </Helmet>
    <Header/>
    <Formik
      initialValues={{
        imgUrl: '',
        data: '',
        data2: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        axios.post("http://localhost:8000/users/",values)
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="imgUrl" />
          {errors.imgUrl && touched.imgUrl ? (
            <div>{errors.imgUrl}</div>
          ) : null}
          <Field name="data" />
          {errors.data && touched.data ? (
            <div>{errors.data}</div>
          ) : null}
          <Field name="data2" />
          {errors.data2 && touched.data2 ? (
            <div>{errors.data2}</div>
          ) : null}
          
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Contact