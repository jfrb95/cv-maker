export default function Input({ label, id, inputHandler }) {
    return (
        <label>
            {label}
            <input 
                id={id + '-input'}
                name={id}
                onChange={inputHandler} 
            />
        </label>
    )
}