import React, { useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  InfoWindow,
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

function getRouteMidpoint(directions: google.maps.DirectionsResult): Position {
  const route = directions.routes[0];
  if (!route) return center;

  const path = route.overview_path;
  if (!path || path.length === 0) return center;

  const midIndex = Math.floor(path.length / 2);
  const midPoint = path[midIndex];

  return {
    lat: midPoint.lat(),
    lng: midPoint.lng(),
  };
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
          {!directions && (
            <Marker
              position={center}
              icon={{
                path: 0,
                scale: 20,
                fillColor: "white",
                fillOpacity: 1,
                strokeColor: "green",
                strokeWeight: 4,
              }}
              label={{
                text: "☕️",
                fontSize: "24px",
              }}
            />
          )}
          {!directions && currentPosition && (
            <Marker position={currentPosition} />
          )}

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
          {directions && (
            <div>
              <DirectionsRenderer
                directions={directions}
                options={{
                  suppressMarkers: true,
                }}
              />
              {currentPosition && <Marker position={currentPosition} />}
              <Marker
                position={center}
                icon={{
                  path: 0,
                  scale: 20,
                  fillColor: "white",
                  fillOpacity: 1,
                  strokeColor: "green",
                  strokeWeight: 4,
                }}
                label={{
                  text: "☕️",
                  fontSize: "24px",
                }}
              />
              <InfoWindow
                position={getRouteMidpoint(directions)}
                options={{
                  pixelOffset: new google.maps.Size(0, -10),
                  headerDisabled: true,
                }}
              >
                <div className="flex flex-col items-center gap-2 text-xs md:text-sm">
                  <h1 className="font-bold">Estimated travel time:</h1>
                  <div>🕒 {directions.routes[0]?.legs[0]?.duration?.text}</div>
                  <div>🏁 {directions.routes[0]?.legs[0]?.distance?.text}</div>
                </div>
              </InfoWindow>
            </div>
          )}
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
