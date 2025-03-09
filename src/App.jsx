import { useState } from 'react'
import './styles/App.css'
import Input from './components/Input';
import Output from './components/Output';
import Section from './components/Section';
import Form from './components/Form';
import useSection from './hooks/useSection';

const log = console.log;

function App() {
  console.log('App rendered');

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

  const educationForms = [
    createEducationForm(),
    createEducationForm(),
    createEducationForm()
  ]

  const educationHandler = useSection()
  function logEducationSectionData() {
    console.log(educationHandler.sectionData);
  }


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

          </div>
          
        </main>
      </div>
      <footer>

      </footer>
    </>
  )
}

export default App
