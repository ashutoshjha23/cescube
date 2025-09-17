import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px"
};

const center = {
  lat: 28.6139, // default latitude
  lng: 77.2090  // default longitude
};

const MapPage = () => {
  const [markers, setMarkers] = useState([]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // 🔑 replace with your API key
  });

  useEffect(() => {
    fetch("http://localhost/your_backend/get_markers.php") // your PHP endpoint
      .then(res => res.json())
      .then(data => setMarkers(data))
      .catch(err => console.error(err));
  }, []);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      {markers.map((marker: any, index: number) => (
        <Marker
          key={index}
          position={{ lat: parseFloat(marker.lat), lng: parseFloat(marker.lng) }}
          title={marker.title}
        />
      ))}
    </GoogleMap>
  );
};

export default MapPage;
