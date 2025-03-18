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

      const classes = 'section-form' + formMap.hidden ? ' hidden' : '';

      return (
        <Fragment key={formMap.key}>
        <Form
          id={keyToFormKey(formMap.key)}
          className={classes}
          formMap={formMap}
          handler={sectionHandler}
        />
        <button
          onClick={() => sectionHandler.deleteForm(formMap.key)}
        >
          Delete Entry
        </button>
        <button
          onClick={() => {sectionHandler.toggleHideForm(formMap.key)}}
        >
          Toggle Output
        </button>
        </Fragment>
      )
    })}

    </>
  )
}

