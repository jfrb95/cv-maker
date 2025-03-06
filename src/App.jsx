import { useState } from 'react'
import './App.css'
import Input from './Input';
import Output from './Output';

const log = console.log;

function App() {

  //Want to abstract the input/output into components. 
  // Look at w3s react forms and code of most liked TOP project
  //  for inspo

  const [inputs, setInputs] = useState({});

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  return (
    <>
      <header>

      </header>
      <div id="content-wrapper">
        <nav>

          
        </nav>
        <main>
          <div className='form-container'>
            <Input 
              label='Full Name'
              id='full-name'
              inputHandler={handleInputChange}
            />
          </div>
          <div className='cv-container'>
            <Output 
              forInputId={'full-name'}
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
