import FormOutput from "./FormOutput"

export default function SectionOutput({ handler, formMap }) {

    return (
        <>
            {formMap.map((form, index) => {
                const formPrefix = `form${index}-`;

                return (
                    <FormOutput
                        key={`${formPrefix}output`}
                        handler={handler}
                        formData={form}
                        formPrefix={formPrefix}
                    />
                )
            })}
        </>
    )
}