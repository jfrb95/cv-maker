import Input from "./Input";
import { kebabToTitle } from "./utilityFunctions";

export default function Form({ identifier, inputIds, inputHandler }) {
    
    const classes = `${identifier} inputs`;
    
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form className={classes} onSubmit={handleSubmit}>
            {inputIds.map((id) => {
                return (
                    <Input
                        key={id}
                        label={kebabToTitle(id)}
                        id={id}
                        inputHandler={inputHandler}
                    />
                )
            })}
        </form>
    )
}