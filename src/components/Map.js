import React, { useEffect, useState } from "react";

import { MapContainer, TileLayer, useMap } from "react-leaflet";

const Map = (props) => {
  const [coordinates, setCoordinates] = useState(props.coords);

  useEffect(() => {
    setCoordinates(props.coords);
  }, [props.coords]);
  if (!props.coords || !coordinates) return;

  function MyComponent() {
    const map = useMap();
    map.setView(coordinates, 13);

    return null;
  }

  return (
    // <div className="map">
    <MapContainer
      className="map"
      center={coordinates}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MyComponent />
    </MapContainer>
  );
};

export default Map;
