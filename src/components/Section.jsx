import { kebabToTitle } from "../utilityFunctions";
import Form from "./Form";

<<<<<<< HEAD
export default function Section({ sectionForms, sectionId, handler }) {
    console.log(sectionForms);
=======
export default function Section({ sectionMap, sectionId, handler }) {
    
    function addFormMap() {

    }
>>>>>>> 4f1f69aa31880743126d1fd6011ddb34623ae8d6
    
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

