import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import RecenterAutomatically from "./RecenterAutomatically";

const AddUnitMap = ({ mapData }) => {
  const position = [mapData.properties.lat, mapData.properties.lon];

  // create custom icon
  const customIcon = new Icon({
    iconUrl: "/images/location-pin.png",
    iconSize: [38, 38], // size of the icon
  });

  return (
    <div>
      <h5>Location</h5>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        // style={{
        //   height: 500,
        // }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <p>{mapData.properties.formatted}</p>
          </Popup>
        </Marker>
        <RecenterAutomatically
          lat={mapData.properties.lat}
          lon={mapData.properties.lon}
        />
      </MapContainer>
    </div>
  );
};

export default AddUnitMap;
