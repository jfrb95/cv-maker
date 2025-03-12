import Output from "./Output"

export default function FormOutput({ handler, formData, formPrefix }) {
    //formPrefix is 'form1-', 'form0-' etc
    console.log(handler.sectionData);
    return (
        <>
            {formData.map((outputData) => {
                return (
                    Object.keys(outputData).map((key) => {
                        console.log(outputData[key]);
                        return (
                            <Output
                                key={key}
                                forInputId={formPrefix + key}
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