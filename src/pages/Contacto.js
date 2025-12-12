import React from 'react';
import './Contacto.css';

// 1. CORRECCIÓN DE RUTA: Salimos de 'pages' (..) y entramos a 'components'
// 2. IMPORTAMOS el nuevo mapa interactivo
import MapaInteractivo from '../components/MapaInteractivo'; 

// Iconos SVG simples
const PinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;

const Contacto = () => {
  const zonas = [
    {
      id: 1,
      titulo: "ZONA 1",
      representante: "Freddy Caracusma",
      regiones: "Junín, Pasco, Huancavelica, Ayacucho",
      ciudad: "TARMA",
      direccion: "Av. Ramón Castilla N° 251",
      telefonos: ["964699046", "935919049"]
    },
    {
      id: 2,
      titulo: "ZONA 2",
      representante: "Andy Sanancio",
      regiones: "Huánuco, San Martín, Ucayali",
      ciudad: "TINGO MARÍA",
      direccion: "Car. Marginal Huánuco Tingo María Km 111",
      telefonos: ["925135078", "930872013"]
    },
    {
      id: 3,
      titulo: "ZONA 3",
      representante: "Ruth Rojas",
      regiones: "Lambayeque, Cajamarca, Amazonas",
      ciudad: "LAMBAYEQUE",
      direccion: "Carr. Panamericana Norte Km 801 Lambayeque",
      telefonos: ["910867681", "930872013"]
    },
    {
      id: 4,
      titulo: "ZONA 4",
      representante: "Daniel Benitez",
      regiones: "Abancay, Cusco, Madre de Dios",
      ciudad: "MADRE DE DIOS",
      direccion: "Av. Hernesto Rivero 1302 piso 02",
      telefonos: ["910867681", "930872013"]
    }
  ];

  return (
    <div className="contacto-container">
      <header className="contacto-header">
        <h1>Nuestros Representantes</h1>
        <p className="slogan">"La riqueza viene de la tierra... hay que cuidar de ella"</p>
      </header>

      <div className="zonas-grid">
        {zonas.map((zona) => (
          <article key={zona.id} className="zona-card">
            {/* Cabecera */}
            <div className="card-header">
              <div className="badge-zona">
                <PinIcon /> {zona.titulo}
              </div>
              <h2 className="representante-nombre">{zona.representante}</h2>
            </div>

            <div className="card-content">
              {/* Info */}
              <div className="info-column">
                <div className="info-group">
                  <label>Cobertura</label>
                  <p className="regiones-text">{zona.regiones}</p>
                </div>

                <div className="info-group highlight-bg">
                  <span className="ciudad-tag">{zona.ciudad}</span>
                  <p className="direccion-text">{zona.direccion}</p>
                </div>

                <div className="telefonos-list">
                  {zona.telefonos.map((tel, idx) => (
                    <a href={`tel:${tel}`} key={idx} className="btn-telefono">
                      <PhoneIcon /> {tel}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mapa Real con React-Leaflet */}
              <div className="map-column">
                <div className="mapa-container">
                    {/* Pasamos el ID para que el mapa sepa qué coordenadas pintar */}
                    <MapaInteractivo zonaId={zona.id} />
                </div>
                <small>Ubicación Referencial</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Contacto;