import React from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix para los íconos de Leaflet en React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// --- COORDENADAS DE LOS POLÍGONOS (ZONAS REALES) ---
const zonasData = {
  1: { 
    center: [-12.065, -75.204], // Centro aproximado (Junín/Huancayo)
    zoom: 7, // Zoom ajustado para ver toda la región
    label: "ZONA 1: Junín, Pasco, Huancavelica, Ayacucho",
    // Polígono vertical que cubre la sierra central
    coords: [
      [-10.00, -76.50], // Norte (Pasco)
      [-10.00, -74.50], // Noreste
      [-13.00, -73.50], // Este (Ayacucho)
      [-15.50, -73.00], // Sur Este (Ayacucho Sur)
      [-15.50, -75.00], // Sur Oeste
      [-13.00, -76.00], // Oeste (Huancavelica)
      [-11.00, -76.80]  // Noroeste
    ]
  },
  2: { 
    center: [-9.50, -75.00], // Centro (Huánuco/Pucallpa)
    zoom: 6,
    label: "ZONA 2: Huánuco, San Martín, Ucayali",
    // Forma alargada hacia la selva y el norte
    coords: [
      [-5.50, -77.50], // Norte (San Martín)
      [-5.50, -75.50], // Noreste
      [-8.00, -73.50], // Frontera Brasil (Ucayali Norte)
      [-11.00, -72.00], // Sur Este (Ucayali Sur)
      [-11.50, -74.00], // Sur
      [-10.50, -76.80], // Oeste (Huánuco)
      [-7.00, -77.00]   // Noroeste
    ]
  },
  3: { 
    center: [-6.00, -78.50], // Centro (Cajamarca/Lambayeque)
    zoom: 7,
    label: "ZONA 3: Lambayeque, Cajamarca, Amazonas",
    // Bloque del norte
    coords: [
      [-3.00, -78.50], // Norte (Amazonas frontera)
      [-3.00, -77.00], // Noreste
      [-6.50, -77.00], // Sur Este
      [-7.80, -78.00], // Sur (Cajamarca sur)
      [-7.50, -79.50], // Sur Oeste
      [-7.00, -80.50], // Oeste (Costa Lambayeque)
      [-5.50, -80.00]  // Noroeste
    ]
  },
  4: { 
    center: [-12.50, -70.50], // Centro (Madre de Dios)
    zoom: 6,
    label: "ZONA 4: Cusco, Madre de Dios, Abancay",
    // Forma amplia del sur-oriente
    coords: [
      [-10.00, -71.50], // Norte (Madre de Dios)
      [-10.50, -69.00], // Este (Frontera)
      [-13.00, -68.50], // Sur Este
      [-15.00, -71.00], // Sur (Cusco)
      [-15.00, -73.50], // Sur Oeste (Apurímac)
      [-13.00, -74.00], // Oeste
      [-12.00, -73.00]  // Noroeste
    ]
  }
};

const MapaInteractivo = ({ zonaId }) => {
  const data = zonasData[zonaId];

  if (!data) return null;

  return (
    <div className="mapa-wrapper" style={{ height: '100%', width: '100%' }}>
      <MapContainer 
        key={zonaId} 
        center={data.center} 
        zoom={data.zoom} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Polígono irregular que sigue la forma de la región */}
        <Polygon
          positions={data.coords}
          pathOptions={{ 
            color: '#ff0000',       // Borde Rojo Intenso
            weight: 3,              // Grosor medio (ni muy fino ni muy tosco)
            fillColor: '#ff5722',   // Relleno Naranja
            fillOpacity: 0.15       // Muy suave para ver el mapa de fondo
          }}
        >
          <Popup>{data.label}</Popup>
        </Polygon>

      </MapContainer>
    </div>
  );
};

export default MapaInteractivo;