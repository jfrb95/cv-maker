import { kebabToTitle } from "../utilityFunctions";
import Form from "./Form";

export default function Section({ section, sectionId, handler }) {
    
  console.log(section);
  console.log(section.map);

  return (
    <>
    <button className='add-form' onClick={section.handle}>
      Add {kebabToTitle(sectionId)}
    </button>

    {section.map.map((formMap, index) => {
        
      return (
        <Form
          key={'form' + index}
          id={'form' + index}
          className='section-form'
          formMap={formMap}
          handler={handler}
        />
      )
    })}

    </>
  )
}

