import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const StorageUnitMap = ({ unit }) => {
  const position = [unit.location.lat, unit.location.lon];

  // create custom icon
  const customIcon = new Icon({
    iconUrl: "/images/location-pin.png",
    iconSize: [38, 38], // size of the icon
  });

  // markers
  const markers = [
    {
      geocode: [unit.location.lat, unit.location.lon],
      popUp: unit.storage_provider.name,
      address: unit.location.address,
    },
  ];

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>
            <div className="text-center">
              <h3 className=" border-bottom">{marker.popUp}</h3>
              <p>{marker.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default StorageUnitMap;
