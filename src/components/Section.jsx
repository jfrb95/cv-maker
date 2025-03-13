import { kebabToTitle } from "../utilityFunctions";
import Form from "./Form";

export default function Section({ sectionMap, sectionId, handler }) {
    
    function addFormMap() {

    }
    
    return (
        <>
        <button className='add-form'>
            {//click button to add new Form of predefined type
             //(education or experience)
            }
            Add {kebabToTitle(sectionId)}
        </button>

        {sectionMap.map((formMap, index) => {
            
            
            return (
                <Form
                    key={'form' + index}
                    id={'form' + index}
                    className='section-form'
                    formMap={formMap}
                    handler={handler}
                />
            )
        })}

        </>
    )
}

