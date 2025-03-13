import FormOutput from "./FormOutput"

export default function SectionOutput({ sectionMap, handler }) {

    return (
        <>
            {sectionMap.map((formMap, index) => {
                const formPrefix = `form${index}-`;

                return (
                    <FormOutput
                        key={`${formPrefix}output`}
                        handler={handler}
                        formMap={formMap}
                        formPrefix={formPrefix}
                    />
                )
            })}
        </>
    )
}