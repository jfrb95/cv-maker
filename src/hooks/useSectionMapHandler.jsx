import { useState } from "react"

export default function useSectionMapHandler(formMapFunc) {

  const [map, setMap] = useState([]);

  function handle(event) {
    //click button > set map to { map, new section-specific map}
    const newFormMap = formMapFunc();
    setMap(values => [...values, newFormMap]);
  }

  return {
    handle,
    map
  }
}