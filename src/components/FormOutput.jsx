import Output from "./Output"

export default function FormOutput({ handler, formMap, formPrefix }) {
  
  if (formPrefix.slice(-1) !== '-') {
    formPrefix += '-';
  }

  if (formMap.hidden) {
    return;
  }

  return (
    <>
      {formMap.map.map((output) => {
        return (
          Object.keys(output).map((key) => {
            return (
              <Output
                key={key}
                forInputId={formPrefix + output[key]}
                inputState={handler.sectionData}
                classes={output[key] + '-output'}
                element={output.element}
              />
            )
          })
        )
      })}
    </>
  )
}