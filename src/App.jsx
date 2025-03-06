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
  
  return (
    <>
      <header>

      </header>
      <div id="content-wrapper">
        <nav>

          
        </nav>
        <main>
          <div className='form-container'>
            <Form
              identifier='personal-info'
              inputIds={personalInfo.inputIds}
              inputHandler={personalInfo.handler}
            />
          </div>
          <div className='cv-container'>
            <FormOutputs
              identifier='personal-info'
              inputIds={personalInfo.inputIds}
              inputs={personalInfo.inputs}
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
