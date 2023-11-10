import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// const startCoords = L.latLng(31.025009, 73.847878);
//       const endCoords = L.latLng(31.5204, 74.3587);

//       center={[31.025009, 73.847878]}

const MapWithRoute = ({ storageFacility, formData }) => {
  // const [mapCenter, setMapCenter] = useState([31.5204, 74.3587]);

  // const [startLocation, setStartLocation] = useState([
  //   formData.location.lat,
  //   formData.location.lon,
  // ]); // Replace with actual start location coordinates
  // const [endLocation, setEndLocation] = useState([31.5204, 74.3587]); // Replace with actual end location coordinates
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);

  const icon = L.icon({
    iconUrl: "/images/location-pin.png",
    iconSize: [38, 38], // size of the icon
  });

  const polylineOptions = {
    color: "#22adf2", // Replace 'red' with the desired color
    weight: 10, // Adjust the weight of the line if needed
  };

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248fd6185f0d3d9405f8aa2bc7f40a428ad&start=${formData.location.lon},${formData.location.lat}&end=${storageFacility.location.lon},${storageFacility.location.lat}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch route.");
        }

        const data = await response.json();

        console.log(data);

        const coordinates = data.features[0].geometry.coordinates.map(
          (coord) => [coord[1], coord[0]]
        );
        setRouteCoordinates(coordinates);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    fetchRoute();
  }, [formData.location.lat, formData.location.lon]);

  return (
    !loading && (
      <MapContainer
        center={[storageFacility.location.lat, storageFacility.location.lon]}
        zoom={5}
        style={{ height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; OpenStreetMap contributors"
        />

        <Marker
          position={[formData.location.lat, formData.location.lon]}
          icon={icon}
        >
          <Popup>Start Location</Popup>
        </Marker>

        <Marker
          position={[
            storageFacility.location.lat,
            storageFacility.location.lon,
          ]}
          icon={icon}
        >
          <Popup>End Location</Popup>
        </Marker>

        <Polyline positions={routeCoordinates} pathOptions={polylineOptions} />
      </MapContainer>
    )
  );
};

export default MapWithRoute;
