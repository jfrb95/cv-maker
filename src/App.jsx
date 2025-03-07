import { useState } from 'react'
import './styles/App.css'
import Input from './components/Input';
import Output from './components/Output';
import Form from './components/Form';
import FormOutputs from './components/FormOutputs';
import useFormInOutPair from './hooks/useFormInOutPair';

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
  
  //TODO: Split each section into 'sections'.
  // -Then the education and experience sections can have an
  //  'add new' option and a 'remove' option

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
