import React, { useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
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
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [requestDirections, setRequestDirections] = useState(false);

  const handleGetDirections = async () => {
    try {
      const position = await getCurrentPosition();
      setCurrentPosition(position);
      setRequestDirections(true);
    } catch (error) {
      console.error("Error getting current position:", error);
    }
  };

  const directionsCallback = (
    result: google.maps.DirectionsResult | null,
    status: google.maps.DirectionsStatus
  ) => {
    if (status === "OK" && result) {
      setDirections(result);
    } else {
      console.error("Error fetching directions:", status);
    }
    setRequestDirections(false);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <LoadScript
        googleMapsApiKey={
          process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || ""
        }
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
          <Marker position={center} />
          {currentPosition && <Marker position={currentPosition} />}

          {requestDirections && currentPosition && (
            <DirectionsService
              options={{
                origin: currentPosition,
                destination: center,
                travelMode: google.maps.TravelMode.DRIVING,
              }}
              callback={directionsCallback}
            />
          )}

          {directions && <DirectionsRenderer directions={directions} />}
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
        onClick={handleGetDirections}
      >
        Get Directions
      </Button>
    </div>
  );
}

export default React.memo(Map);
