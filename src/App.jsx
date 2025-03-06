import { useState } from 'react'
import './App.css'
import Input from './Input';
import Output from './Output';
import Form from './Form';
import FormOutputs from './FormOutputs';

const log = console.log;

function App() {

  const personalInfo = {

  }
  const [inputs, setInputs] = useState({});
  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }
  const personalInfoInputIds = ['full-name', 'email', 'phone', 'address'];

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
              inputIds={personalInfoInputIds}
              inputHandler={handleInputChange}
            />
          </div>
          <div className='cv-container'>
            <FormOutputs
              identifier='personal-info'
              inputIds={personalInfoInputIds}
              inputs={inputs}
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
