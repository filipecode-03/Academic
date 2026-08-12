"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { type LatLngExpression } from "leaflet";

interface MapControllerProps {
  position: LatLngExpression;
}

function MapController({ position }: MapControllerProps) {
  const map = useMap();

  useEffect(() => {
    map.setView(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return null;
}

export default MapController;