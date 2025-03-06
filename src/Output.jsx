export default function Output({ forInputId, inputs }) {
    console.log(inputs);
    console.log(forInputId);
    return (
        <p>{inputs[forInputId]}</p>
    )
}