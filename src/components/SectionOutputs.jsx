import FormOutput from "./FormOutput"

export default function SectionOutput({ sectionHandler }) {

    return (
        <>
            {sectionHandler.map.map((formMap) => {
                const formPrefix = `form-${formMap.key}-`;

                return (
                    <FormOutput
                        key={`${formMap.key}output`}
                        handler={sectionHandler}
                        formMap={formMap}
                        formPrefix={formPrefix}
                    />
                )
            })}
        </>
    )
}