import { useState } from 'react'
import './styles/App.css'
import Input from './components/Input';
import Output from './components/Output';
import Section from './components/Section';
import Form from './components/Form';
import useSection from './hooks/useSection';
import FormOutput from './components/FormOutput';
import SectionOutput from './components/SectionOutputs';
import formMap from './formMap';

const log = console.log;



function App() {

  const createFormMap = formMap();

  function section(formMapFunc) {
    const map = [formMapFunc()];

    function addForm() {
      map.push(formMapFunc);
    }

    return {
      addForm,
      map
    }
  }

  const educationSection = section(createFormMap.education);

  const educationHandler = useSection();

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
              sectionMap={educationSection.map}
              handler={educationHandler}
              sectionId='education'
            />

          </div>
          <div className='cv-container'>
            <SectionOutput
              sectionMap={educationSection.map}
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
