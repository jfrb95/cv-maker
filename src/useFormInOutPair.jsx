import { useState } from "react";

export default function useFormInOutPair(inputIds) {
    const [inputs, setInputs] = useState({});

    function handler(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    return {
        inputs,
        handler,
        inputIds
    }
}