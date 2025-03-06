import Output from "./Output";

export default function FormOutputs({ identifier, inputIds, inputs }) {

    const classes = `${identifier} outputs`;

    return (
        <div className={classes}>
            {inputIds.map(id => {
                return (
                    <Output
                        key={id}
                        forInputId={id}
                        inputs={inputs}
                    />
                )
            })}
        </div>
    )
}