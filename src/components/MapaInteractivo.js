import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// --- CONFIGURACIÓN DEL "ALFILER ROJO" ---
const RedIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = RedIcon;

// --- DATA EXACTA ---
const zonasData = {
  1: { 
    ciudad: "TARMA",
    direccion: "Av. Ramón Castilla N° 251",
    // INTACTO
    center: [-11.426041, -75.755381] 
  },
  2: { 
    ciudad: "TINGO MARÍA",
    direccion: "Car. Marginal Huánuco Tingo María Km 111",
    // CORREGIDO: Movido a zona Afilador/Las Palmas (Carretera recta y poblada, no selva)
    center: [-9.31400, -76.00550] 
  },
  3: { 
    ciudad: "LAMBAYEQUE",
    direccion: "Calle 2 de Mayo N°136",
    // INTACTO
    center: [-6.70240, -79.90680] 
  },
  4: { 
    ciudad: "MADRE DE DIOS",
    direccion: "Av. Ernesto Rivero 1302",
    // INTACTO
    center: [-12.59655, -69.18705] 
  }
};

const MapaInteractivo = ({ zonaId }) => {
  const data = zonasData[zonaId];

  if (!data) return <div style={{background: '#eee', height:'100%'}}>Cargando...</div>;

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer 
        key={zonaId} 
        center={data.center} 
        zoom={19} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false} 
        dragging={false}        
        zoomControl={false}     
        doubleClickZoom={false}
        attributionControl={false}
      >
        {/* Mapa de Google Maps */}
        <TileLayer
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />

        <Marker position={data.center}>
          <Popup>
            <strong>{data.ciudad}</strong><br/>
            {data.direccion}
          </Popup>
        </Marker>

      </MapContainer>
    </div>
  );
};

export default MapaInteractivo;