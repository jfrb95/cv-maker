import Output from "./Output"

export default function FormOutput({ handler, formMap, formPrefix }) {
    //formPrefix is 'form1-', 'form0-' etc
    
    return (
        <>
            {formMap.map((output) => {
                return (
                    Object.keys(output).map((key) => {
                        return (
                            <Output
                                key={key}
                                forInputId={formPrefix + output[key]}
                                inputState={handler.sectionData}
                                element={output[key].element}
                            />
                        )
                    })
                )
            })}
        </>
    )
}