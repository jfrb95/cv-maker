import { useState } from 'react'
import './App.css'
import Input from './Input';
import Output from './Output';
import Form from './Form';
import FormOutputs from './FormOutputs';
import useFormInOutPair from './useFormInOutPair';

const log = console.log;

function App() {

  //TODO: let Input allow an argument to specify what element is
  //  returned. e.g. <input type=number>
  //- similarly for Output, the returned element should be 
  //  chosen using an argument. e.g. <h2> instead of <p>
  //- Form and FormOutputs should be updated to account for this

  const personalInfo = useFormInOutPair(['full-name', 'email', 'phone', 'address'])
  
  //TODO: make education section able to add multiple educations
  //  possibly make the argument and array of objects.
  //  will need to edit useFormInOutPair.jsx to do this,
  //  most likely form in/out and regular in/out too
  const education = useFormInOutPair(['school-name', 'title-of-study', 'start-date', 'end-date'])

  return (
    <>
      <header>

      </header>
      <div id="content-wrapper">
        <nav>

          
        </nav>
        <main>
          <div className='form-container'>
            <h2>Personal Information</h2>
            <Form
              identifier='personal-info'
              formHook={personalInfo}
            />

            <h2>Education</h2>
            <Form
              identifier='education'
              formHook={education}
            />
          </div>
          <div className='cv-container'>
            <p>Personal Info(temporary text)</p>
            <FormOutputs
              identifier='personal-info'
              formHook={personalInfo}
            />

            <p>Education(temporary text)</p>
            <FormOutputs
              identifier={'education'}
              formHook={education}
            />
          </div>
          
        </main>
      </div>
      <footer>

      </footer>
    </>
  )
}

export default App
