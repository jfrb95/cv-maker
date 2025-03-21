export default function Output({ forInputId, inputState, classes, element:Element='p' }) {
    return (
        <Element
          className={classes}
        >
          {inputState[forInputId]}
        </Element>
    )
}