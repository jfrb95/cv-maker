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

  //add function to map handler that toggles hidden class on formOutput

  const createFormMap = formMap();
  const personalInformationFormHandler = useSectionHandler(createFormMap.personalInformation);
  const personalInformationMap = createFormMap.personalInformation();
  const educationSectionHandler = useSectionHandler(createFormMap.education);
  const experienceSectionHandler = useSectionHandler(createFormMap.experience);

  function logEducationData() {
    console.log(educationSectionHandler.sectionData);
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
            <button
              onClick={logEducationData}
            >
              Log Data
            </button>

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

            <FormOutput
              formMap={personalInformationMap}
              formPrefix='personal-information'
              handler={personalInformationFormHandler}
            />
            <SectionOutput
              sectionHandler={educationSectionHandler}
            />
            <SectionOutput
              sectionHandler={experienceSectionHandler}
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
