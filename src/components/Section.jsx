import { kebabToTitle, keyToFormKey } from "../utilityFunctions";
import Form from "./Form";
import { Fragment } from "react";

export default function Section({ sectionHandler, sectionId }) {

  return (
    <>
    <button className='add-form' onClick={sectionHandler.addForm}>
      Add {kebabToTitle(sectionId)}
    </button>

    {sectionHandler.map.map((formMap) => {

      return (
        <Fragment key={formMap.key}>
        <Form
          id={keyToFormKey(formMap.key)}
          className='section-form'
          formMap={formMap}
          handler={sectionHandler}
        />
        <button
          onClick={() => sectionHandler.deleteForm(formMap.key)}
        >
          Delete Entry
        </button>
        <button
          
        >
          Toggle Output
        </button>
        </Fragment>
      )
    })}

    </>
  )
}

