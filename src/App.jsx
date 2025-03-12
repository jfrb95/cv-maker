import { useState } from 'react'
import './styles/App.css'
import Input from './components/Input';
import Output from './components/Output';
import Section from './components/Section';
import Form from './components/Form';
import useSection from './hooks/useSection';
import FormOutput from './components/FormOutput';
import SectionOutput from './components/SectionOutputs';

const log = console.log;



function App() {

  function createEducationForm() {
    
    const formData = 
      [
        {
          id: 'school-name'
        },
        {
          id: 'title-of-study'
        },
        {
          id: 'start-date'
        },
        {
          id: 'end-date'
        }
      ]
    
    return formData;
  }

  const formData = 
    [
      {
        id: 'school-name'
      },
      {
        id: 'title-of-study'
      },
      {
        id: 'start-date'
      },
      {
        id: 'end-date'
      }
    ]

  const educationForms = [
    createEducationForm(),
    createEducationForm(),
    createEducationForm()
  ]

  const singleFormData = createEducationForm();

  const educationHandler = useSection();
  function logEducationSectionData() {
    console.log(educationHandler.sectionData);
  }


  //Testing a lone input produces correct results
  //testing lone form produces input resets
  // focus on why it works in previous implementation 
  // but not this one

  return (
    <>
      <header>

      </header>
      <div id="content-wrapper">
        <nav>

          
        </nav>
        <main>
          <button onClick={logEducationSectionData}>Log Education sectionData</button>
          <div className='form-container'>

            <Section
              sectionForms={educationForms}
              sectionId='education'
              handler={educationHandler}
              
            />

          </div>
          <div className='cv-container'>
            <SectionOutput
              handler={educationHandler}
              formMap={educationForms}
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
