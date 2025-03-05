import { useState } from 'react'
import './App.css'
import useTextInputOutput from './useTextHandler';
import React from 'react';

const log = console.log;

function App() {

  //Want to abstract the input/output into components. 
  // Look at w3s react forms and code of most liked TOP project
  //  for inspo

  const [text, setText] = useState();

  function handleTextChange(e) {
      setText(e.target.value);
  }

  return (
    <>
      <header>

      </header>
      <div id="content-wrapper">
        <aside>

          <label>
            Full Name: 
            <input 
              id='name-input' 
              name='name'
              onChange={handleTextChange}>

            </input>
          </label>
        </aside>
        <main>
          <p id='name-output'>{text}</p>
        </main>
      </div>
      <footer>

      </footer>
    </>
  )
}

export default App
