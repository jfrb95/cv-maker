import { kebabToTitle } from "../utilityFunctions"
import Input from "./Input"


export default function Form({ formInputs}) {
    return (
        <form>
            {formInputs.map((inputData) => {
                return (
                    <Input
                        key={crypto.randomUUID()}
                        label={kebabToTitle(inputData.id)}
                        id={inputData.id}
                        inputType={inputData.type}
                    />
                )
            })}
        </form>
    )
}