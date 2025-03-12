import FormOutput from "./FormOutput"

export default function SectionOutput({ handler }) {
    //currently this is returning a form output per item in
    //  sectionData, this is not correct. It should match 
    //  what is currently 'educationData' in App.jsx

    return (
        <>
            {handler.sectionData.map((formData) => {
                return (
                    <FormOutput
                        handler={handler}
                        formData={formData}
                    />
                )
            })}
        </>
    )
}