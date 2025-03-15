import { useState } from 'react'
import './styles/App.css'
import Input from './components/Input';
import Output from './components/Output';
import Section from './components/Section';
import Form from './components/Form';
import useSectionHandler from './hooks/useSectionHandler';
import FormOutput from './components/FormOutput';
import SectionOutput from './components/SectionOutputs';
import formMap from './formMap';

const log = console.log;



function App() {

  //NEED TO PUT section.map INTO state IN useSectionHandler

  const createFormMap = formMap();

  function section(formMapFunc) {
    const map = [formMapFunc()];

    function addForm() {
      map.push(formMapFunc());
      console.log(map);
    }

    return {
      addForm,
      map
    }
  }

  const educationSection = section(createFormMap.education);
  const educationHandler = useSectionHandler();

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
              section={educationSection}
              handler={educationHandler}
              sectionId='education'
            />

          </div>
          <div className='cv-container'>
            <SectionOutput
              section={educationSection}
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
