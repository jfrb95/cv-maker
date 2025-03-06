import Input from "./Input";
import { kebabToTitle } from "./utilityFunctions";

export default function Form({ identifier, formHook }) {
    
    const classes = `${identifier} inputs`;
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className={classes} onSubmit={handleSubmit}>
            {formHook.inputIds.map((id) => {
                return (
                    <Input
                        key={id}
                        label={kebabToTitle(id)}
                        id={id}
                        inputHandler={formHook.handler}
                    />
                )
            })}
        </form>
    )
}