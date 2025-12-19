import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- ARREGLO DE ÍCONOS DE LEAFLET ---
// Sin esto, los marcadores a veces no aparecen o se ven rotos
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Coordenadas exactas para centrar el mapa
const COORDS = {
  1: { lat: -11.4166, lng: -75.6833, label: "Tarma" },        // Centro
  2: { lat: -9.2944, lng: -76.0000, label: "Tingo María" },   // Selva
  3: { lat: -6.7011, lng: -79.9064, label: "Lambayeque" },    // Norte
  4: { lat: -12.5933, lng: -69.1894, label: "Madre de Dios" } // Sur
};

// Componente "Ayudante" para mover la cámara cuando cambia la zona
function Recenter({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 14); // Zoom 14 para ver calles
  }, [lat, lng, map]);
  return null;
}

const MapaInteractivo = ({ zonaId }) => {
  const location = COORDS[zonaId] || COORDS[1]; // Por defecto Tarma

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <MapContainer 
        center={[location.lat, location.lng]} 
        zoom={13} 
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false} // Evita que hagas zoom sin querer al bajar la página
        zoomControl={false} // Quitamos los botones +/- para que se vea limpio
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>{location.label}</Popup>
        </Marker>
        
        {/* Este componente mueve el mapa mágicamente */}
        <Recenter lat={location.lat} lng={location.lng} />
      </MapContainer>
    </div>
  );
};

export default MapaInteractivo;