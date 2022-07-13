import React from 'react';
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'

// Do ul for buttons to do side by side

function Signup() {
  
  const initialValues ={
    email: "",
    password: "",
    FirstName: "",
    LastName: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
    FirstName: Yup.string().min(3).max(15).required(),
    LastName: Yup.string().min(3).max(15).required()
  });


  const onSubmit = (data) => {
    axios.post("http://localhost:5000/posts/CreateUser", data).then((response) => {
    console.log("It worked");
    });
  }

  return (
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
           <label>First Name: </label>
           <ErrorMessage name="FirstName" component="span"/>
          <Field 
            id = "inputCreateUser"
            name="FirstName" 
            placeholder="Ex. Jim"
           />
           <label>Last Name: </label>
           <ErrorMessage name="LastName" component="span"/>
          <Field 
            id = "inputCreateUser"
            name="LastName" 
            placeholder="Ex. Morrison"
           />
           <ul className='formUl'>
              <button type="submit">Create User</button>
              <a href ="/login" className="account"> Already Have Account?</a>
           </ul>
        </Form>
      </Formik>
    </div>
  )
}

export default Signup