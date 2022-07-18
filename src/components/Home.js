import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

// Styles
import "./Home.css";

// SVG
import Duotone_1 from "../assets/Duotone-1.svg";
import Duotone_2 from "../assets/Duotone-2.svg";
import Diamond from "../assets/Frame.svg";
import Location_1 from "../assets/Locationn.svg";
import Calendar from "../assets/Calendar.svg";
import Search from "../assets/Search.svg";
import Location_2 from "../assets/Location.svg";
import Discovery from "../assets/Discovery.svg";

// Locations
import { locsData } from "../data/locsData";

const position = [32.654629, 51.667984];

const Home = () => {
  const [id, setId] = useState();
  const [width, setWidth] = useState(0);

  const carousel = useRef();

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

  useEffect(() => {
    setWidth(carousel.current.scrollWidth);
  }, []);

  return (
    <div className="Home">
      <MapContainer center={position} zoom={11} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <div className="Home__infos">
          <div>
            <span>
              <input
                type="text"
                placeholder="5 کیلومتر"
                style={{ direction: "rtl" }}
              />
              <figure>
                <img src={Discovery} alt="Discovery" />
              </figure>
            </span>

            <span>
              <input type="text" placeholder="اصفهان، اصفهان، دروازه تهران" />
              <figure>
                <img src={Location_2} alt="Location" />
              </figure>
            </span>

            <span>
              <input type="text" placeholder="تعمیر پکیج" />
              <figure>
                <img src={Search} alt="Search" />
              </figure>
            </span>
          </div>
        </div>

        {locsData.features.map((loc) => (
          <Marker
            key={loc.properties.PARK_ID}
            position={loc.geometry.coordinates}
            icon={id == loc.properties.PARK_ID ? customIcon_2 : customIcon_1}
          />
        ))}
      </MapContainer>

      <motion.div
        ref={carousel}
        className="Box-container carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {locsData.features.map((loc) => (
            <motion.div
              key={loc.properties.PARK_ID}
              className={`Box Box-item ${
                id == loc.properties.PARK_ID && "Box-choose"
              }`}
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
                <span className="employer">
                  کارفرما : <span>{loc.properties.EMPLOYER}</span>
                </span>

                <h4>
                  <span>باز</span> . 32 پیشنهاد
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
