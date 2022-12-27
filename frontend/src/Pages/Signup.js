import React from 'react';
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import Navbar from '../Components/Navigation';

// Do ul for buttons to do side by side

function Signup() {
  
  const initialValues ={
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });


  const onSubmit = (data) => {
    axios.post("http://localhost:5000/posts/CreateUser", data).then((response) => {
    console.log("It worked");
    });
  }

  return (
    <div>
      <Navbar/>
      <div className="signupPage">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className="formContainerSignup">
              <h2>Create an account</h2>
            <label>Email: </label>
            <ErrorMessage name="email" component="span"/>
            <Field 
              id = "inputCreateUser"
              name="email" 
              placeholder="Ex. exp@gmail.com"
            />
            <label>Password: </label>
            <ErrorMessage name="password" component="span"/>
            <Field 
              id = "inputCreateUser"
              name="password" 
              placeholder="Should include Uppercase and Special Characters '. / @ ! etc'"
            />
            <ul className='formUl'>
                <button type="submit">Create User</button>
                <a href ="/login" className="account"> Already Have Account?</a>
            </ul>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Signup