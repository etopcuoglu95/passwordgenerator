import React from 'react';
import axios from "axios";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';


// Do ul for buttons to do side by side


function Login(){
    
    const initialValues ={
        email: "",
        password: "",
      };
    
      const validationSchema = Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),
      });

      const onSubmit = (data) => {
        axios.post("http://localhost:5000/posts/login", data).then((response) => {
        console.log("It worked");
        });
      }

      return (
        <div className="signupPage">
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form className="formContainerLogin">
                <h2>Login</h2>
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
                type="password"
                placeholder="Enter your password"
               />
               <ul className='formUl'>
                <button type="submit">Login</button>
                <a href ="/Signup" className="account"> Need an Account?</a>
               </ul>

            </Form>
          </Formik>
        </div>
      )
    }

    export default Login