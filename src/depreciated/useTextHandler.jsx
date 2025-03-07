import { useState } from "react";
import { useMemo } from "react";

export default function useTextHandler() {
    const [text, setText] = useState();

    function handleTextChange(e) {
        setText(e.target.value);
    }

    const memo = useMemo(() => ({
        text,
        handleTextChange
    }), [text]);

    return memo
}