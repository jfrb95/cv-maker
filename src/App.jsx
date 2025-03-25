import './styles/App.css'
import Input from './components/Input';
import Output from './components/Output';
import Section from './components/Section';
import Form from './components/Form';
import useSectionHandler from './hooks/useSectionHandler';
import FormOutput from './components/FormOutput';
import SectionOutput from './components/SectionOutputs';
import formMap from './formMap';

function App() {

  //needs style added

  //BUG: in formMap.js, adding properties to the objects representing the inputs
  //  also adds an associated output for that proerty. Only visible in devtools

  const createFormMap = formMap();
  const personalInformationFormHandler = useSectionHandler(createFormMap.personalInformation);
  const personalInformationMap = createFormMap.personalInformation();
  const educationSectionHandler = useSectionHandler(createFormMap.education);
  const experienceSectionHandler = useSectionHandler(createFormMap.experience);

  function loadExample() {
    personalInformationFormHandler.example();
    educationSectionHandler.example();
    experienceSectionHandler.example();
  }

  function logSectionData() {
    console.log(personalInformationFormHandler.sectionData);
    console.log(educationSectionHandler.sectionData);
    console.log(experienceSectionHandler.sectionData);
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
            
            <Form
              formMap={personalInformationMap}
              id='personal-information'
              handler={personalInformationFormHandler}
            />
            <Section
              sectionHandler={educationSectionHandler}
              sectionId='education'
            />
            <Section
              sectionHandler={experienceSectionHandler}
              sectionId='experience'
            />
            
          </div>
          <div className='cv-container'>

            <div id='personal-information-output'>
              <FormOutput
                formMap={personalInformationMap}
                formPrefix='personal-information'
                handler={personalInformationFormHandler}
              />
            </div>
            
            <div className="section-output">
              <SectionOutput
                sectionHandler={educationSectionHandler}
                sectionId='education'
              />
            </div>
            
            <div className="section-output">
              <SectionOutput
                sectionHandler={experienceSectionHandler}
                sectionId='experience'
              />
            </div>
          </div>
          
        </main>
      </div>
      <footer>

      </footer>
    </>
  )
}

export default App
