import { useState } from "react";

export default function useSectionHandler() {

    const [sectionData, setSectionData] = useState({});
    
    function handle(event) {
        if (event.target.tagName === 'INPUT' ||
            event.target.tagName === 'TEXTAREA'
        ) {
            const { name, value } = event.target;
            setSectionData(values => ({...values, [name]: value}));
        }
    }

    return {
        sectionData,
        handle
    }
}