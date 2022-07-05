import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import '../index.css'

// Might do with container instead of forms.
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
        <button 
        onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}
        >
        Copy
        </button>
        </Form>
      </Formik>
    </div>
  )
}

export default Generetor;