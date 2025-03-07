export default function Input({ label, id, inputHandler, inputType='text'}) {
    const Element = (inputType === 'textarea') 
        ? 'textarea'
        : 'input'
    
    return (
        <label>
            {label}
            <Element 
                id={id + '-input'}
                type={inputType}
                name={id}
                onChange={inputHandler} 
            />
        </label>
    )
}