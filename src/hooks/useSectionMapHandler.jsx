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

  return {
    addForm,
    deleteForm,
    map
  }
}