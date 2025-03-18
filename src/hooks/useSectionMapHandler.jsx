import { useState } from "react"

export default function useSectionMapHandler(formMapFunc) {

  const [map, setMap] = useState([]);

  function addForm() {
    const newFormMap = formMapFunc();
    setMap(values => [...values, newFormMap]);
  }

  function deleteForm(reactKey) {
    setMap(previousMap => previousMap.filter((element) => element.key !== reactKey));
  }

  function toggleHideForm(formKey) {

    setMap(prevMap => 
      prevMap.map(formMap => {
          if (formMap.key === formKey) {
            const hideOrShow = formMap.hidden ? false : true;
            return { ...formMap, hidden: hideOrShow};
          }
          return formMap;
          }
        )
      );
  }

  return {
    addForm,
    deleteForm,
    toggleHideForm,
    map
  }
}