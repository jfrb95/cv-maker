import { kebabToTitle } from "../utilityFunctions";
import FormOutput from "./FormOutput"

export default function SectionOutput({ sectionHandler, sectionId }) {

  return (
    <>
      <hr/>
      <h2 className='section-header'>
        {kebabToTitle(sectionId)}
      </h2>
      {sectionHandler.map.map((formMap) => {
        const formPrefix = `form-${formMap.key}-`;

        return (
          <FormOutput
            key={`${formMap.key}output`}
            handler={sectionHandler}
            formMap={formMap}
            formPrefix={formPrefix}
          />
        )
      })}
    </>
  )
}