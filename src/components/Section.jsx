import { kebabToTitle } from "../utilityFunctions";
import Form from "./Form";

export default function Section({ sectionForms, sectionId, handler }) {
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
                    key={'form' + index}
                    id={'form' + index}
                    className='section-form'
                    formInputs={formInputs}
                    handler={handler}
                />
            )
        })}

        </>
    )
}

