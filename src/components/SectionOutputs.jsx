import FormOutput from "./FormOutput"

export default function SectionOutput({ sectionHandler }) {

    return (
        <>
            {sectionHandler.map.map((formMap, index) => {
                const formPrefix = `form${index}-`;

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