import Output from "./Output"

export default function FormOutput({ handler, formData, formPrefix }) {
    //formPrefix is 'form1-', 'form0-' etc
    
    return (
        <>
            {formData.map((outputData) => {
                return (
                    Object.keys(outputData).map((key) => {
                        console.log(formPrefix + outputData[key]);
                        return (
                            <Output
                                key={key}
                                forInputId={formPrefix + outputData[key]}
                                inputState={handler.sectionData}
                                element={outputData[key].element}
                            />
                        )
                    })
                )
            })}
        </>
    )
}