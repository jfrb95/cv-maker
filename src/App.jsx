import { useState } from 'react'
import './App.css'
import Input from './Input';
import Output from './Output';
import Form from './Form';
import FormOutputs from './FormOutputs';
import useFormInOutPair from './useFormInOutPair';

const log = console.log;

function App() {

  //TODO: change useFormInOutPair, FormOutputs, and Output to 
  //  let classes be specified in the arguments
  const personalInfo = useFormInOutPair(
    [
      {
        element: 'h1', 
        id: 'full-name'
      },
      {
        element: 'h3',
        id: 'email'
      }, 
      {
        element: 'h3',
        id: 'phone',
        type: 'number'
      }, 
      {
        element: 'h3',
        id: 'address'}
    ]
  );
  
  //TODO: make education section able to add multiple educations
  //  possibly make the argument an array of objects.
  //  will need to edit useFormInOutPair.jsx to do this,
  //  most likely form in/out and regular in/out too
  const education = useFormInOutPair(
    [
      {
        element: 'p',
        id: 'school-name'
      }, 
      {
        element: 'p',
        id: 'title-of-study'
      }, 
      {
        element: 'p',
        id: 'start-date'
      }, 
      {
        element: 'p',
        id: 'end-date'
      }
    ]
  );

  const experience = useFormInOutPair(
    [
      {
        element: 'p',
        id: 'company-name'
      },
      {
        element: 'p',
        id: 'position-title'
      },
      {
        element: 'p',
        id: 'main-responsibilities',
        type: 'textarea'
      },
      {
        element: 'p',
        id: 'start-date'
      },
      {
        element: 'p',
        id: 'end-date'
      },
    ]
  )

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

            <h2>Experience</h2>
            <Form
              identifier='experience'
              formHook={experience}
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
              identifier='education'
              formHook={education}
            />

            <p>Experience(temporary text)</p>
            <FormOutputs
              identifier='experience'
              formHook={experience}
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
