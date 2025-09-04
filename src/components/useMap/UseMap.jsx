import { useEffect } from "react";
import { useMap } from "react-leaflet";

function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize(); // force leaflet to recalc size
  }, [map]);
  return null;
}

export default ResizeMap
