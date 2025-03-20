export default function Output({ forInputId, inputState, classes, element:Element='p' }) {
    return (
        <Element
          classList={classes}
        >
          {inputState[forInputId]}
        </Element>
    )
}