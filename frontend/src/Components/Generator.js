import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import '../index.css'

function Generetor()
{ 
  return (
    <div className="generator--box">
      <Formik>
        <Form>
          <Field
          id = "generator--id"
          name = "code"
          placeholder="Get Your Password! --------->"
          />

        <button type="submit">Generate</button>
        </Form>
      </Formik>
    </div>
  )
}

export default Generetor;