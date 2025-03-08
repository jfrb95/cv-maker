export default function Input({ label, id, inputHandler, inputType='text'}) {
    //console.log('input', id, 'has been re-rendered');
    
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