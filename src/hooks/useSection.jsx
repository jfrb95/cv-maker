//This hook is to be passed into a Section and SectionOutput

//'stateHandler' will be a hook defined in App.jsx so that 
//  a sectionOutput can also be connected to it.

export default function useSection({ sectionIdentifier }) {

    //sectionData:
    /*
        [
            schoolNameVal: {
                schoolName: schoolNameVal
                
            }
        ]
    */

    const [sectionData, setSectionData] = useState();
    
    function handler(event) {
        
    }

    return (

    )
}