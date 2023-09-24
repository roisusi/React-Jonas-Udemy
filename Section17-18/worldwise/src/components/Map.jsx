import React, { useEffect } from "react";
import styles from "../css/Map.module.css";
import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useCities } from "../contexts/CitiesProvider.jsx";
import { useGeolocation } from "../hooks/useGeolocation.js";
import Button from "./Button.jsx";
import { useUrlPosition } from "../hooks/useUrlPosition.js";

function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = React.useState([40.46635901755316, -3.7133789062500004]);
  const { isLoading: isLoadingPosition, position: geolocationPosition, getPosition } = useGeolocation();
  const [mapLat, mapLng] = useUrlPosition();

  useEffect(function() {
    if (mapLat && mapLng) {
      setMapPosition([mapLat, mapLng]);
    }
  }, [mapLat, mapLng]);

  useEffect(function() {
    if (geolocationPosition) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    }
  }, [geolocationPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && <Button type="position" onClick={getPosition}>
        {isLoadingPosition ? "Loading..." : "Use your location"}
      </Button>}
      <MapContainer className={styles.map} center={mapPosition} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map(city => <Marker key={city.id} position={[city.position.lat, city.position.lng]}>
          <Popup>
            <span>{city.emoji}</span>
            <span>{city.cityName}</span>
          </Popup>
        </Marker>)}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>);
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    }
  });

}

export default Map;
