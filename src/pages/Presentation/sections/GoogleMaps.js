import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

// const latLng = {
//   lat: 34.0522,
//   lng: 118.2437,
// };

function Map() {
  // eslint-disable-next-line prettier/prettier
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{
        lat: 34.0522,
        lng: 118.2437,
      }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
