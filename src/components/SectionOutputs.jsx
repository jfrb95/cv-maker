import FormOutput from "./FormOutput"

export default function SectionOutput({ handler }) {
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