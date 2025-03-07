import { useState } from "react";

const acceptedElements = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']);

export default function useFormInOutPair(arrayOfObjects) {

    arrayOfObjects.forEach((inputObj) => {
        if (!acceptedElements.has(inputObj.element)) {
            throw new Error(`Output element must be an <h#> or <p>. Currently it is <${inputObj.element}> for output id='${inputObj.id}'`);
        }
    })

    const [inputs, setInputs] = useState({});

    function handler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return {
        inputs,
        handler,
        inputData: arrayOfObjects
    }
}