import { useState } from "react";
import useSectionMapHandler from "./useSectionMapHandler";

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

    return {
        sectionData,
        handle,
        map: mapHandler.map,
        addForm: mapHandler.addForm,
        deleteForm: mapHandler.deleteForm
    }
}