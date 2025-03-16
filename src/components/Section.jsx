import { kebabToTitle } from "../utilityFunctions";
import Form from "./Form";

export default function Section({ sectionHandler, sectionId }) {

  return (
    <>
    <button className='add-form' onClick={sectionHandler.addForm}>
      Add {kebabToTitle(sectionId)}
    </button>

    {sectionHandler.map.map((formMap, index) => {
        
      return (
        <Form
          key={formMap.key}
          id={'form' + index}
          className='section-form'
          formMap={formMap}
          handler={sectionHandler}
        />
      )
    })}

    </>
  )
}

