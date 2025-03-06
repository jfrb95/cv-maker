import Output from "./Output";

export default function FormOutputs({ identifier, formHook }) {

    const classes = `${identifier} outputs`;

    return (
        <div className={classes}>
            {formHook.inputIds.map(id => {
                return (
                    <Output
                        key={id}
                        forInputId={id}
                        inputs={formHook.inputs}
                    />
                )
            })}
        </div>
    )
}