import "./styles.css";
import GoogleMapReact from "google-map-react";
import Marker from "../marker";

const Map = () => {
  return (
    <div className="container-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCWBxlNpEtAk1yi9lgZ5WeW89b5pdva0Ek" }}
        center={{
          lat: -23.561684,
          lng: -46.625378,
        }}
        defaultZoom={15}
      >
        <Marker lat={-23.561684} lng={-46.625378} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
