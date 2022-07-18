import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

// Components
// import Box from "./Box";

// Styles
import "./Home.css";

// SVG
import Duotone_1 from "../assets/Duotone-1.svg";
import Duotone_2 from "../assets/Duotone-2.svg";
import Diamond from "../assets/Frame.svg";
import Location_1 from "../assets/Locationn.svg";
import Calendar from "../assets/Calendar.svg";
import Left from "../assets/chevron-left.svg";
import Right from "../assets/chevron-right.svg";

// Locations
import { locsData } from "../data/locsData";

const position = [32.654629, 51.667984];

const Home = () => {
  const [id, setId] = useState();

  let customIcon_1 = L.icon({
    iconUrl: Duotone_2,
    iconSize: [30, 45],
    iconAnchor: [12.5, 41],
  });

  let customIcon_2 = L.icon({
    iconUrl: Duotone_1,
    iconSize: [45, 60],
    iconAnchor: [12.5, 41],
  });

  const clickHandler = (id) => {
    setId(id);
  };

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
            icon={id == loc.properties.PARK_ID ? customIcon_2 : customIcon_1}
          />
        ))}
      </MapContainer>

      <img src={Left} alt="Chevron Left" className="arrow-left" />
      <img src={Right} alt="Chevron Right" className="arrow-right" />

      <div className="Box-container">
        {locsData.features.map((loc) => (
          <div
            key={loc.properties.PARK_ID}
            className="Box"
            onClick={() => clickHandler(loc.properties.PARK_ID)}
          >
            <div className="Box__row-1">
              <span>
                {loc.properties.POINT}
                <figure>
                  <img src={Diamond} alt="Diamond" />
                </figure>
              </span>

              <h4>{loc.properties.NAME}</h4>
            </div>

            <div className="Box__row-2">
              <span>
                {loc.properties.ADDRESS}
                <figure>
                  <img src={Location_1} alt="Location" />
                </figure>
              </span>

              <span>
                {loc.properties.DATE}
                <figure>
                  <img src={Calendar} alt="Calendar" />
                </figure>
              </span>
            </div>

            <div className="Box__row-3">
              <span>کارفرما: {loc.properties.EMPLOYER}</span>

              <h4>
                <span>باز</span> . 32 پیشنهاد
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
