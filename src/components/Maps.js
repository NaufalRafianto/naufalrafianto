import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import { Marker, Popup } from "react-leaflet";

export default function Maps() {
  const position = [-7.284787051519106, 112.79643059942477];
  return (
    <MapContainer style={{ height: "100%" }} center={position} zoom={20}>
      {" "}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          Department of Computer Engineering,
          <br />
          Institute Technology of Sepuluh Nopember,
          <br /> Kota SBY, Jawa Timur 60117{" "}
        </Popup>
      </Marker>{" "}
    </MapContainer>
  );
}
