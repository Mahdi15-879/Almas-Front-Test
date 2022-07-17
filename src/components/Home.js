import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Styles
import "./Home.css";

// SVG
// import Duotone_1 from "../assets/Duotone-1.svg";
// import Duotone_2 from "../assets/Duotone-2.svg";

// Locations
import { locsData } from "../data/locsData";

const position = [32.654629, 51.667984];

const Home = () => {
  const [isChoose, setIsChoose] = useState(false);

  return (
    <div className="Home">
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locsData.features.map((loc) => (
          <Marker
            key={loc.properties.PARK_ID}
            position={loc.geometry.coordinates}
          >
            <Popup>Salam</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Home;
