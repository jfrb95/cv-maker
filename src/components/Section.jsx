import { kebabToTitle } from "../utilityFunctions";
import Form from "./Form";
import { Fragment } from "react";

export default function Section({ sectionHandler, sectionId }) {

  return (
    <>
    <button className='add-form' onClick={sectionHandler.addForm}>
      Add {kebabToTitle(sectionId)}
    </button>

    {sectionHandler.map.map((formMap, index) => {
        
      return (
        <Fragment key={formMap.key}>
        <Form
          id={'form' + index}
          className='section-form'
          formMap={formMap}
          handler={sectionHandler}
        />
        <button
        onClick={() => sectionHandler.deleteForm(formMap.key)}
        >
          Delete Entry
        </button>
        </Fragment>
      )
    })}

    </>
  )
}

