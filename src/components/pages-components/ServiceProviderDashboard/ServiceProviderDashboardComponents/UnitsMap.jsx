import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";

const UnitsMap = ({ StorageUnitData }) => {
  const position = [
    StorageUnitData[0].location.lat,
    StorageUnitData[0].location.lon,
  ];

  console.log(StorageUnitData);

  // create custom icon
  const customIcon = new Icon({
    iconUrl: "/images/location-pin.png",
    iconSize: [38, 38], // size of the icon
  });

  // markers
  const markers =
    StorageUnitData &&
    StorageUnitData.map((unit) => {
      return {
        geocode: [unit.location.lat, unit.location.lon],
        popUp: unit.storage_provider.name,
        link: `/service-provider-dashboard/analytics/${unit.id}`,
        address: unit.location.address,
      };
    });

  return (
    <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
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
              <Link className="btn btn-sm btn-dark" to={marker.link}>
                View details
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default UnitsMap;
