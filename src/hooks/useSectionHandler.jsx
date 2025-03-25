import { useState } from "react";
import useSectionMapHandler from "./useSectionMapHandler";
import { keyToFormKey } from "../utilityFunctions";

export default function useSectionHandler(formMapFunc) {

    const [sectionData, setSectionData] = useState({});
    
    function handle(event) {
        if (event.target.tagName === 'INPUT' ||
            event.target.tagName === 'TEXTAREA'
        ) {
            const { name, value } = event.target;
            setSectionData(values => ({...values, [name]: value}));
        }
    }

    const mapHandler = useSectionMapHandler(formMapFunc);

    function deleteData(reactKey) {

      mapHandler.deleteForm(reactKey)

      const formKey = keyToFormKey(reactKey)

      Object.keys(sectionData).forEach(inputKey => {
        if (inputKey.includes(formKey)) {
          setSectionData(previousState => {
            const {[inputKey]: _ , ...remainingState} = previousState;
            return {...remainingState}
          })
        }
      });
    }

    return {
        sectionData,
        handle,
        map: mapHandler.map,
        addForm: mapHandler.addForm,
        deleteForm: deleteData,
        toggleHideForm: mapHandler.toggleHideForm
    }
}