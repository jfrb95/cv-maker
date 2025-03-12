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

//GO THROUGH AND SORT OUT A NICE NAMING SCHEME

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

  function createExperienceForm() {
    const formData = 
    [
      {
        id: 'company-name'
      },
      {
        id: 'position-title'
      },
      {
        id: 'main-responsibilities',
        element: 'text-area'
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

  const educationForms = [
    createEducationForm(),
    createEducationForm(),
    createEducationForm()
  ]

  const experienceForms = [
    createExperienceForm(),
    createExperienceForm(),
    createExperienceForm(),
    createExperienceForm()
  ]

  const singleFormData = createEducationForm();

  const educationHandler = useSection();
  function logEducationSectionData() {
    console.log(educationHandler.sectionData);
  }

  const experienceHandler = useSection();

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

            <Section
              sectionForms={experienceForms}
              sectionId='experience'
              handler={experienceHandler}
            />

          </div>
          <div className='cv-container'>

            <SectionOutput
              handler={educationHandler}
              formMap={educationForms}
            />

            <SectionOutput
              handler={experienceHandler}
              formMap={experienceForms}
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
