import React from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = () => {
  return (
    <div id="map" className="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        fdgfdg
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        dfsdfds
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </MapContainer>
    </div>
  );
};

export default Map;
