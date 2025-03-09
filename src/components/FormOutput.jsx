import Output from "./Output"

export default function FormOutput({ handler, formData }) {
    //GET IDS FROM FORMDATA
    
    return (
        <>
            {formData.map((outputData) => {
                return (
                    <Output
                        forInputId={}
                        inputState={handler.sectionData}
                    />
                )
            })}
        </>
    )
}