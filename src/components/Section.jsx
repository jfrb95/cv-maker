import { kebabToTitle } from "../utilityFunctions";
import Form from "./Form";

export default function Section({ sectionForms, sectionId }) {
    return (
        <>
        <button className='add-form'>
            {//click button to add new Form of predefined type
             //(education or experience)
            }
            Add {kebabToTitle(sectionId)}
        </button>

        {sectionForms.map((formInputs, index) => {
            return (
                <Form
                    id={index}
                    key={crypto.randomUUID()}
                    className='section-form'
                    formInputs={formInputs}
                />
            )
        })}

        </>
    )
}

