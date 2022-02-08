import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import * as React from "react";
import { useState, useEffect, useRef } from "react";

import Container from "@mui/material/Container";
import MKInput from "components/MKInput";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// import crimeSearch from "./CrimeSearch";

// https://developer.tomtom.com/blog/build-different/adding-tomtom-maps-modern-react-app

const MAX_ZOOM = 16;

function TomTomMap() {
  const tomTomMap = useRef();
  const [lng, setLng] = useState(34.047548);
  const [lat, setLat] = useState(-118.256836);
  const [zoom, setZoom] = useState(13);
  const [map, setMap] = useState({});

  // zoom in function
  // eslint-disable-next-line no-unused-vars
  const zoomIn = () => {
    if (zoom < MAX_ZOOM) {
      setZoom(zoom + 1);
    }
  };

  // zoom out function
  // eslint-disable-next-line no-unused-vars
  const zoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom - 1);
    }
  };

  // update map with new lng and lat
  // eslint-disable-next-line no-unused-vars
  const updateMap = () => {
    map.setCenter([parseFloat(lng), parseFloat(lat)]);
    map.setZoom(zoom);
  };

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const map = tt.map({
      key: "acTmhfIVvSA0PkBJ16eOMWz5bfCrXW5G",
      container: tomTomMap.current,
      center: [lat, lng],
      zoom,
    });
    setMap(map);
    return () => map.remove();
  }, []);

  return (
    <Container>
      <MKTypography variant="h4">Longitude</MKTypography>
      <MKInput
        type="number"
        step="0.01"
        variant="outlined"
        label="Type here..."
        onChange={(e) => setLng(e.target.value)}
      />
      <MKTypography variant="h4">Latitude</MKTypography>
      <MKInput
        type="number"
        step="0.01"
        variant="outlined"
        label="Type here..."
        onChange={(e) => setLat(e.target.value)}
      />
      {/* <MKButton onChange={() => console.log("button clicked")}>Button</MKButton> */}
      <div ref={tomTomMap} className="mapDiv" style={{ width: "80vw", height: "80vh" }} />
    </Container>
  );
}

export default TomTomMap;
