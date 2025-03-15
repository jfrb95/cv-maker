import { useState } from "react"

export default function useSectionMapHandler() {

  const [map, setMap] = useState({});

  function handle(event) {
    //click button > set map to { map, new section-specific map}

    setMap();
  }

  return {
    handle,
    map
  }
}