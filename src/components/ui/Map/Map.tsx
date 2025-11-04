import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 21.3069,
  lng: -157.8583,
};

function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_EMBED_API_KEY || ""}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
