import { useState } from "react"

export default function useSectionMapHandler(formMapFunc) {

  const [map, setMap] = useState([]);

  function handle() {
    //click button > set map to { map, new section-specific map}
    const newFormMap = formMapFunc();
    setMap(values => [...values, newFormMap]);
  }

  function deleteForm(reactKey) {
    setMap(previousMap => previousMap.filter((element) => element.key !== reactKey));
  }

  return {
    handle,
    deleteForm,
    map
  }
}