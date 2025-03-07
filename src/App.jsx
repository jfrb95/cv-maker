import { useState } from 'react'
import './styles/App.css'
import Input from './components/Input';
import Output from './components/Output';
import Section from './components/Section';
import Form from './components/Form';

const log = console.log;

function App() {


  //section state will be a flat object, each input will have
  //  unique id
  const [sectionState, setSectionState] = useState({});

  //may need to change sectionData to be flat or something else


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
              sectionForms={educationForms}
              sectionId='education'
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
