import Output from "./Output";

export default function FormOutputs({ identifier, formHook }) {

    const classes = `${identifier} outputs`;

    return (
        <div className={classes}>
            {formHook.inputData.map(input => {
                return (
                    <Output
                        key={input.id}
                        forInputId={input.id}
                        inputs={formHook.inputs}
                        element={input.element}
                    />
                )
            })}
        </div>
    )
}