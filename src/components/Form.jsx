import { kebabToTitle } from "../utilityFunctions"
import Input from "./Input"


export default function Form({ formMap, id, handler }) {
    
    function handleSubmit(event) {
        event.preventDefault();
    }
    
    return (
        <form 
            id={id}
            onSubmit={handleSubmit}
        >
            {formMap.map((inputData) => {
                return (
                    <Input
                        key={id + inputData.id}
                        label={kebabToTitle(inputData.id)}
                        id={id + '-' + inputData.id}
                        inputType={inputData.type}
                        inputHandler={handler.handle}
                    />
                )
            })}
        </form>
    )
}