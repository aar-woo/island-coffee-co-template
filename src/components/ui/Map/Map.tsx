import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Button } from "../base/button";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 21.3069,
  lng: -157.8583,
};

interface Position {
  lat: number;
  lng: number;
}

async function getCurrentPosition(): Promise<Position> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

function Map() {
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);

  const handleGetCurrentPosition = async () => {
    const position = await getCurrentPosition();
    setCurrentPosition(position);
  };
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <LoadScript
        googleMapsApiKey={process.env.GOOGLE_MAPS_EMBED_API_KEY || ""}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>

      <Button
        type="button"
        style={{
          position: "absolute",
          top: "10px",
          right: "60px",
          padding: "18px 20px",
          backgroundColor: "white",
          color: "black",
          border: "2px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        }}
        onClick={handleGetCurrentPosition}
      >
        Get Directions
      </Button>
    </div>
  );
}

export default React.memo(Map);
