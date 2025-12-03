import React from 'react';
import "../styles/Nosotros.css";
import nosotrosImg from "../assets/nosotros.webp"; 

// --- 1. IMPORTAMOS TUS IMÁGENES PNG ---
import misionPng from "../assets/mision.webp";
import visionPng from "../assets/vision.webp";

// --- 2. MANTENEMOS LOS DEMÁS ICONOS EN SVG (VALORES) ---
const IconoCompromiso = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3c3f70" width="50" height="50"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/></svg>
);
const IconoResponsabilidad = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3c3f70" width="50" height="50"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
);
const IconoCompetitividad = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3c3f70" width="50" height="50"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
);
const IconoTrabajo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3c3f70" width="50" height="50"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
);
const IconoEmpatia = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3c3f70" width="50" height="50"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
);

function Nosotros() {
  return (
    <section className="nosotros-section">
      
      <div className="nosotros-container">
        
        {/* 1. INTRODUCCIÓN */}
        <div className="intro-centered">
          <div className="intro-text">
            <span className="subtitle">SOBRE NOSOTROS</span>
            <h1>PACIFICO ABONOS Y ENMIENDAS</h1>
            
            {/* AQUI ESTÁ EL CAMBIO SOLICITADO */}
            <h2 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#333' }}>¿Quiénes somos?</h2>
            <p>
              Somos una empresa peruana con más de 18 años en el mercado agrícola.
              <br />
              Especializada en la producción y comercialización de Abonos Naturales, 
              abonos orgánicos y enmiendas agrícolas cálcicas de marca PACIFICO.
            </p>
            {/* FIN DEL CAMBIO */}

          </div>
          <div className="intro-image">
            <img src={nosotrosImg} alt="Equipo de trabajo en planta" />
          </div>
        </div>

      </div>

      {/* 2. FRANJA AMARILLA: MISIÓN Y VISIÓN */}
      <div className="mision-vision-wrapper">
        <div className="mv-container">
          
          {/* Misión */}
          <div className="mv-block">
            <div className="mv-icon-circle">
              <img src={misionPng} alt="Icono Misión" />
            </div>
            <div className="mv-text">
              <h2>Misión</h2>
              <p>
                MINERALES & DERIVADOS SUDAMERICANA S.A.C empresa líder orientada a la calidad. Produce; 
                distribuye; y comercializa abonos naturales y enmiendas agrícolas de marca PACIFICO; 
                así como otros productos Industriales de reconocida calidad con el firme compromiso 
                de atender las exigencias de nuestros clientes. Para beneficiar a los miembros de 
                nuestra empresa, de la comunidad y del país.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="mv-block">
            <div className="mv-icon-circle">
              <img src={visionPng} alt="Icono Visión" />
            </div>
            <div className="mv-text">
              <h2>Visión</h2>
              <p>
                Al 2028, ser una empresa líder en la producción; distribución; y comercialización de 
                abonos naturales y enmiendas agrícolas de marca PACIFICO; así como otros productos 
                Industriales de reconocida calidad, dentro de la región generando alto rendimiento 
                sobre el patrimonio, a través del incremento de las ventas y utilidades, tanto a 
                nivel nacional como en el extranjero, desarrollando reservas para el futuro, de 
                manera socialmente responsable.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. VALORES */}
      <div className="nosotros-container">
        <div className="valores-section">
          <h2>Nuestros Valores Institucionales</h2>
          <p className="valores-subtitle">
            MINERALES & DERIVADOS SUDAMERICANA S.A.C promueve el bienestar de sus clientes, 
            colaboradores y las comunidades donde se encuentra presente. Para ello, está 
            guiada por sus valores institucionales:
          </p>

          <div className="valores-grid">
            
            <div className="valor-card">
              <div className="valor-icon"><IconoCompromiso /></div>
              <h3>Compromiso</h3>
              <p>De la empresa de atender las necesidades del cliente y satisfacer sus expectativas.</p>
            </div>

            <div className="valor-card">
              <div className="valor-icon"><IconoResponsabilidad /></div>
              <h3>Responsabilidad</h3>
              <p>Cumplimos con entregar los productos con los requerimientos acordados en el momento indicado.</p>
            </div>

            <div className="valor-card">
              <div className="valor-icon"><IconoCompetitividad /></div>
              <h3>Competitividad</h3>
              <p>Ofrecemos servicios y productos de calidad, con eficiencia, eficacia y a precios competitivos.</p>
            </div>

            <div className="valor-card">
              <div className="valor-icon"><IconoTrabajo /></div>
              <h3>Trabajo en Equipo</h3>
              <p>Unimos esfuerzos para el logro de nuestros objetivos, en un ambiente de confianza, comunicación permanente y respeto; compartiendo conocimiento, experiencia e información.</p>
            </div>

            <div className="valor-card">
              <div className="valor-icon"><IconoEmpatia /></div>
              <h3>Empatía</h3>
              <p>Ponernos en el lugar del cliente.</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}

export default Nosotros;