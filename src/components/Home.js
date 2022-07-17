import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

// Styles
import "./Home.css";

// Functions
function Map() {
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 32.654629, lng: 51.667984 }}
    />
  );
}

const WrrapedMap = withScriptjs(withGoogleMap(Map));

const Home = () => {
  return (
    <div className="Home">
      <WrrapedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCKuhxABU_EfchLjAHz06FlO2W-2Bjv4xA`}
        loadingElement={<div style={{ height: "100%", width: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default Home;
