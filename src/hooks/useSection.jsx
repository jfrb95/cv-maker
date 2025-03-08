import { useState } from "react";

export default function useSection() {

    const [sectionData, setSectionData] = useState({});
    
    function handle(event) {
        if (event.target.tagName === 'INPUT' ||
            event.target.tagName === 'TEXTAREA'
        ) {
            const id = event.target.id;
            const value = event.target.value;
            setSectionData((values) => ({...values, [id]: value}));
        }
    }

    return {
        sectionData,
        handle
    }
}