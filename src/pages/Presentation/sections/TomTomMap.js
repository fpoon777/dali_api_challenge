/* eslint-disable no-unused-vars */
import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";

import * as React from "react";
import { useState, useEffect, useRef } from "react";

// MK components
import Container from "@mui/material/Container";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

// import crimeTypes from "./markers/CrimeTypes";
import robberyIcon from "../../../assets/images/markerImages/robbery.png";
import othersIcon from "../../../assets/images/markerImages/general.png";
import burglaryIcon from "../../../assets/images/markerImages/burglary.png";
import assaultIcon from "../../../assets/images/markerImages/assault_deadly_weapon.png";
import houseIcon from "../../../assets/images/markerImages/house.png";

// function for crime and house search
import crimeSearch from "./CrimeSearch";
import houseSearch from "./HouseSearch";

require("dotenv").config();

function TomTomMap() {
  const tomTomMap = useRef();
  const [lng, setLng] = useState(34.047548);
  const [lat, setLat] = useState(-118.256836);
  const [mapZoom, setZoom] = useState(13);
  const [map, setMap] = useState({});

  // add marker and popup for each house listing
  const addHouseMarker = (locLng, locLat, toMap, address, price, link) => {
    const markerElement = document.createElement("img");
    markerElement.className = "marker";
    markerElement.width = "30";
    markerElement.height = "36";
    markerElement.src = houseIcon;

    // popUp
    const aElem = document.createElement("a");
    aElem.href = link;
    aElem.target = "_blank";
    aElem.rel = "noreferrer";

    const divElem = document.createElement("div");
    const h3Elem = document.createElement("h3");
    const h3ElemText = document.createTextNode(address);
    h3Elem.appendChild(h3ElemText);

    const pElem = document.createElement("p");
    const pElemText = document.createTextNode(price);
    pElem.appendChild(pElemText);

    divElem.appendChild(h3Elem);
    divElem.appendChild(pElem);
    aElem.appendChild(divElem);

    const generalElem = document.createElement("div");
    generalElem.appendChild(aElem);
    const marker = new tt.Marker({ element: markerElement, anchor: "center" })
      .setLngLat([locLng, locLat])
      .setPopup(new tt.Popup({ offset: 35 }).setHTML(generalElem.innerHTML))
      .addTo(toMap);
  };

  // add marker and popup for crime
  const addMarker = (locLng, locLat, toMap, crimeType) => {
    const markerElement = document.createElement("img");
    markerElement.className = "marker";
    markerElement.width = "24";
    markerElement.height = "28";
    const newPopUp = new tt.Popup({ offset: 35 });
    switch (crimeType) {
      case "BURGLARY":
        markerElement.src = burglaryIcon;
        newPopUp.setHTML("<div><p>BURGLARY</p></div>");
        break;
      case "ROBBERY":
        markerElement.src = robberyIcon;
        newPopUp.setHTML("<div><p>ROBBERY</p></div>");
        break;
      case "ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT":
        newPopUp.setHTML("<div><p>ASSAULT WITH DEADLY WEAPON, AGGRAVATED ASSAULT</p></div>");
        markerElement.src = assaultIcon;
        break;
      default:
        markerElement.src = othersIcon;
        newPopUp.setHTML("<div><p>Other Crimes</p></div>");
        break;
    }

    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line prefer-const
    let marker = new tt.Marker({ element: markerElement, anchor: "center" })
      .setLngLat([locLng, locLat])
      .setPopup(newPopUp)
      .addTo(toMap);
  };

  // get house listings from API and add markers
  const getHouses = (toMap) => {
    try {
      houseSearch().then((houses) => {
        // eslint-disable-next-line array-callback-return
        houses.map((item) => {
          addHouseMarker(
            parseFloat(item.lon),
            parseFloat(item.lat),
            toMap,
            item.address,
            item.price,
            item.rdc_web_url
          );
        });
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Error is: ", error);
    }
  };

  // get crime incidents from API and add markers
  const getCrimes = (toMap) => {
    try {
      crimeSearch().then((crimes) => {
        // eslint-disable-next-line array-callback-return
        crimes.map((item) => {
          let inputCrimeType;
          if (item.crm_cd_desc === undefined) {
            inputCrimeType = "OTHERS";
          } else {
            inputCrimeType = item.crm_cd_desc;
          }
          addMarker(parseFloat(item.lon), parseFloat(item.lat), toMap, inputCrimeType);
        });
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("Error is: ", error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const map = tt.map({
      key: process.env.REACT_APP_TOM_TOM_KEY,
      container: tomTomMap.current,
      center: [lat, lng],
      zoom: mapZoom,
    });
    setMap(map);
    getCrimes(map);
    getHouses(map);
    return () => map.remove();
  }, []);

  return (
    <div className="MapComponent">
      <Container>
        <MKBox textAlign="center">
          <MKTypography variant="h3" mt={1} mb={3}>
            House and Crime Map:
          </MKTypography>
        </MKBox>
        <div ref={tomTomMap} className="mapDiv" style={{ width: "100%", height: "80vh" }} />
      </Container>
    </div>
  );
}

export default TomTomMap;
