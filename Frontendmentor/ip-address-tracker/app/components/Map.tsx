"use client";

import {
  MapContainer,
  Marker,
  TileLayer,
} from "react-leaflet";

import { type LatLngExpression } from "leaflet";

import "leaflet/dist/leaflet.css";

import MapController from "./MapController";

interface MapProps {
  latitude: number;
  longitude: number;
}

function Map({ latitude, longitude }: MapProps) {
  const position: LatLngExpression = [latitude, longitude];

  return (
    <section className="h-[calc(100vh-280px)] min-h-125 w-full">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController position={position} />

        <Marker position={position} />
      </MapContainer>
    </section>
  );
}

export default Map;