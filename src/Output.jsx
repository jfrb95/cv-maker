export default function Output({ forInputId, inputs, element:Element='p' }) {
    return (
        <Element>{inputs[forInputId]}</Element>
    )
}