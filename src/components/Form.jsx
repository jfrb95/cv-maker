import Input from "./Input";
import { kebabToTitle } from "../utilityFunctions";

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