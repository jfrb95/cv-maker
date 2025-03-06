import { useState } from "react";

export default function useFormInOutPair(inputData) {
    const [inputs, setInputs] = useState({});

    function handler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return {
        inputs,
        handler,
        inputData
    }
}