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

  //deleting forms changes the ids of the forms in the DOM, as the id is 
  //  dynamically created on render. This means the corresponding outputs 
  //  are not deleted, as 'form0-' still exists, despite being a different 
  //  form

  const createFormMap = formMap();
  const personalInformationFormHandler = useSectionHandler(createFormMap.personalInformation);
  const personalInformationMap = createFormMap.personalInformation();
  const educationSectionHandler = useSectionHandler(createFormMap.education);
  const experienceSectionHandler = useSectionHandler(createFormMap.experience);

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
