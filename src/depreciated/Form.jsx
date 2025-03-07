import Input from "./Input";
import { kebabToTitle } from "../utilityFunctions";

/*
export default function Form({ identifier, formHook }) {

    const classes = `${identifier} inputs`;
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className={classes} onSubmit={handleSubmit}>
            {formHook.inputData.map((input) => {
                return (
                    <Input
                        key={input.id}
                        inputType={input.type}
                        label={kebabToTitle(input.id)}
                        id={input.id}
                        inputHandler={formHook.handler}
                    />
                )
            })}
        </form>
    )
}
*/

export default function Form({ formData }) {
    
    function handleSubmit(event) {
        event.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {formData.map((inputData) => {
                return (
                    <Input
                        key={inputData.id}
                        inputType={inputData.type}
                        label={kebabToTitle(inputData.id)}
                        id={inputData.id}
                    />
                )
            })
            }
        </form>
    )
}