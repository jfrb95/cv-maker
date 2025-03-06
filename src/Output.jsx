export default function Output({ forInputId, inputs}) {
    return (
        <p>{inputs[forInputId]}</p>
    )
}