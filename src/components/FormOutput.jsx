import Output from "./Output"

export default function FormOutput({ handler, formMap, formPrefix }) {
  //formPrefix is 'form1-', 'form0-' etc
  
  if (formPrefix.slice(-1) !== '-') {
    formPrefix += '-';
  }

  return (
    <>
      {formMap.map.map((output) => {
        return (
          Object.keys(output).map((key) => {
            console.log('output[key]', output[key]);
            return (
              <Output
                key={key}
                forInputId={formPrefix + output[key]}
                inputState={handler.sectionData}
                element={output[key].element}
              />
            )
          })
        )
      })}
    </>
  )
}