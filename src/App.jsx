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

  const educationMap = [
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
        
          <div className='form-container'>

            <Section
              sectionMap={educationMap}
              handler={educationHandler}
              sectionId='education'
            />

          </div>
          <div className='cv-container'>
            <SectionOutput
              sectionMap={educationMap}
              handler={educationHandler}
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
