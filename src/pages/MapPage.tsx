import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 28.6139, // Example: New Delhi
  lng: 77.209,
};

const locations = [
  { lat: 28.6139, lng: 77.209, title: "New Delhi" },
  { lat: 19.076, lng: 72.8777, title: "Mumbai" },
  { lat: 12.9716, lng: 77.5946, title: "Bangalore" },
];

const MapPage = () => {
  return (
    <div className="min-h-screen px-6 md:px-12 py-16">
      <h1 className="text-3xl font-bold mb-6">Our Locations</h1>

      <LoadScript googleMapsApiKey='AIzaSyAf_oo0U4AjluwnhnM_pqH17mQHHz-hRuU'>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
          {locations.map((location, index) => (
            <Marker key={index} position={{ lat: location.lat, lng: location.lng }} title={location.title} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
