import React, { useState } from 'react';
import './Contacto.css'; 
import MapaPeruSelector from '../components/MapaPeruSelector'; 

const MapPin = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const Clock = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const User = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const Phone = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;

const zonasData = [
  {
    id: 1, 
    titulo: "ZONA 1 (Junín,Pasco,Huancavelica,Ayacucho)",
    representante: "Freddy Caracuzma",
    ciudad: "Tarma",
    direccion: "Av. Ramón Castilla N° 251",
    horario: "Lunes a Sábado: 8am - 5pm",
    telefonos: ["964699046", "935919049"]
  },
  {
    id: 2, 
    titulo: "ZONA 2 (Huánuco,San Martín,Ucayali)",
    representante: "Andy Sanancio",
    ciudad: "Tingo Maria",
    direccion: "Car. Marginal Huánuco Tingo María Km 111",
    horario: "Lunes a Viernes: 8am - 5pm",
    telefonos: ["925135078", "930872013"]
  },
  {
    id: 3, 
    titulo: "ZONA 3 (Lambayeque,Cajamarca,Amazonas)",
    representante: "Ruth Rojas",
    ciudad: "Lambayeque",
    direccion: "Calle 2 de mayo N°136",
    horario: "Lunes a Viernes: 8am - 5pm",
    telefonos: ["910867681", "930872013"]
  },
  {
    id: 4, 
    titulo: "ZONA 4 (Abancay,Cusco,Madre de Dios)",
    representante: "Daniel Benitez",
    ciudad: "Madre de Dios",
    direccion: "Av. Hernesto Rivero 1302 piso 02",
    horario: "Lunes a Sábado: 8am - 5pm",
    telefonos: ["910867681", "930872013"]
  }
];

const Contacto = () => {
  const [selectedId, setSelectedId] = useState(1);
  const activeData = zonasData.find(z => z.id === selectedId);

  const renderTitulo = (tituloCompleto) => {
    const partes = tituloCompleto.split(' (');
    if (partes.length > 1) {
      return (
        <div className="zona-label-container">
          <span className="zona-titulo-principal">{partes[0]}</span>
          <span className="zona-regiones">({partes[1]}</span>
        </div>
      );
    }
    return <span className="zona-titulo-principal">{tituloCompleto}</span>;
  };

  return (
    <div className="hortus-layout">
      
      <div className="main-header-section animate-fade-down">
        <h1 className="mapa-title">Nuestras Sucursales</h1>
        <p className="mapa-subtitle">Selecciona una región con tienda</p>
      </div>

      <div className="layout-grid">
        
        <div className="mapa-section animate-fade-right">
          <MapaPeruSelector 
            activeZoneId={selectedId} 
            onZoneClick={setSelectedId} 
          />
        </div>

        <div className="info-card-container">
          <div className="card-content-wrapper" key={selectedId}>
            
            <div className="card-header-hortus">
              {renderTitulo(activeData.titulo)}
            </div>

            <div className="card-body">
              <div className="detail-row" style={{animationDelay: '0.1s'}}>
                <div className="icon-circle"><MapPin /></div>
                <div className="detail-text">
                  <h4>Dirección:</h4>
                  <p>{activeData.direccion} - {activeData.ciudad}</p>
                </div>
              </div>

              <div className="detail-row" style={{animationDelay: '0.2s'}}>
                <div className="icon-circle"><Clock /></div>
                <div className="detail-text">
                  <h4>Horario:</h4>
                  <p>{activeData.horario}</p>
                </div>
              </div>

              <div className="detail-row" style={{animationDelay: '0.3s'}}>
                <div className="icon-circle"><User /></div>
                <div className="detail-text">
                  <h4>Representante:</h4>
                  <p>{activeData.representante}</p>
                </div>
              </div>

              <div className="detail-row" style={{animationDelay: '0.4s'}}>
                <div className="icon-circle"><Phone /></div>
                <div className="detail-text">
                   {activeData.telefonos.map((tel, idx) => (
                      <span key={idx} style={{display:'block', marginBottom:'4px'}}>{tel}</span>
                   ))}
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;