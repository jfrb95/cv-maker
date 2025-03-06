import Input from "./Input";
import { kebabToTitle } from "./utilityFunctions";

export default function Form({ inputIds, inputHandler }) {
    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
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