export default function Output({ forInputId, inputState, element:Element='p' }) {
    return (
        <Element>{inputState[forInputId]}</Element>
    )
}