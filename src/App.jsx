import { useState } from 'react'
import './App.css'
import Input from './Input';
import Output from './Output';
import Form from './Form';
import FormOutputs from './FormOutputs';
import useFormInOutPair from './useFormInOutPair';

const log = console.log;

function App() {

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
              inputIds={personalInfo.inputIds}
              inputHandler={personalInfo.handler}
            />

            <h2>Education</h2>
            <Form
              identifier='education'
              inputIds={education.inputIds}
              inputHandler={education.handler}
            />
          </div>
          <div className='cv-container'>
            <p>Personal Info(temporary text)</p>
            <FormOutputs
              identifier='personal-info'
              inputIds={personalInfo.inputIds}
              inputs={personalInfo.inputs}
            />

            <p>Education(temporary text)</p>
            <FormOutputs
              identifier={'education'}
              inputIds={education.inputIds}
              inputs={education.inputs}
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
