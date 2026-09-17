import React, { useEffect } from 'react'; 
import "../styles/Nosotros.css";

import nosotrosImg from "../assets/nosotros.webp"; 
import nosotrosImg2 from "../assets/nosotros 2.webp"; 
import misionPng from "../assets/mision.webp";
import visionPng from "../assets/vision.webp";

import iso9001Img from "../assets/cert-iso9001.png"; 
import iso14001Img from "../assets/cert-iso14001.png"; 
import iso37001Img from "../assets/cert-iso37001.png"; 
import bplImg from "../assets/cert-bpl.png"; 

import pdf9001 from "../assets/CERTIFICADO ICO- MINERALES & DERIVADOS SUDAMERICANA SOCIEDAD ANONIMA CERRADA 9001.pdf";
import pdf14001 from "../assets/CERTIFICADO ICO- MINERALES & DERIVADOS SUDAMERICANA SOCIEDAD ANONIMA CERRADA 14001.pdf";
import pdf37001 from "../assets/CERTIFICADO ICO- MINERALES & DERIVADOS SUDAMERICANA SOCIEDAD ANONIMA CERRADA 37001.pdf";
import pdfBpl from "../assets/CERTIFICADO ICO- MINERALES & DERIVADOS SUDAMERICANA SOCIEDAD ANONIMA CERRADA BPL.pdf";

const IconoCompromiso = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0a2588" width="50" height="50"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"/></svg>
);
const IconoResponsabilidad = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0a2588" width="50" height="50"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
);
const IconoCompetitividad = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0a2588" width="50" height="50"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
);
const IconoTrabajo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0a2588" width="50" height="50"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
);
const IconoEmpatia = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0a2588" width="50" height="50"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
);

function Nosotros() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.scroll-scale');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="nosotros-section">
      
      <div className="nosotros-container">
        
        <div className="intro-centered">
          
          <div className="intro-text scroll-scale">
            <span className="subtitle">SOBRE NOSOTROS</span>
            <h1>PACIFICO ABONOS Y ENMIENDAS</h1>
            
            <h2 style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#333' }}>¿Quiénes somos?</h2>
            <p>
              Somos una empresa peruana con más de 20 años en el mercado agrícola.
              <br />
              Especializada en la producción y comercialización de Abonos Naturales, 
              abonos orgánicos y enmiendas agrícolas cálcicas de marca PACIFICO.
            </p>
          </div>
          
          <div className="intro-images-grid scroll-scale delay-100">
            <div className="foto-card">
                <img src={nosotrosImg} alt="Equipo de trabajo en planta 2018" />
                <p>Año 2018</p>
            </div>
            <div className="foto-card">
                <img src={nosotrosImg2} alt="Equipo de trabajo en planta 2012" />
                <p>Año 2012</p>
            </div>
          </div>
        </div>

      </div>

      <div className="mision-vision-wrapper">
        <div className="mv-container">
          
          <div className="mv-block scroll-scale">
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

          <div className="mv-block scroll-scale delay-200">
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

      <div className="cert-section">
        <div className="nosotros-container">
            <div className="intro-text scroll-scale" style={{textAlign: 'center', marginBottom: '40px'}}>
                <span className="subtitle">EXCELENCIA GARANTIZADA</span>
                <h2 style={{fontSize: '2.5rem', color: '#0e1a24'}}>Nuestras Certificaciones</h2>
                <p>Cumplimos con los más altos estándares internacionales en nuestra planta.</p>
            </div>

            <div className="cert-grid">
                
                <div className="cert-card scroll-scale">
                    <div className="cert-img-container">
                        <img src={iso9001Img} alt="Certificado ISO 9001" />
                    </div>
                    <h3>ISO 9001:2015</h3>
                    <div className="cert-line"></div>
                    <p>Gestión de Calidad</p>
                    <small>Garantía de satisfacción y estandarización de procesos.</small>
                    
                    <a href={pdf9001} target="_blank" rel="noopener noreferrer" className="btn-ver-cert">
                        Ver Certificado
                    </a>
                </div>

                <div className="cert-card scroll-scale delay-100">
                    <div className="cert-img-container">
                        <img src={iso14001Img} alt="Certificado ISO 14001" />
                    </div>
                    <h3>ISO 14001:2015</h3>
                    <div className="cert-line"></div>
                    <p>Gestión Ambiental</p>
                    <small>Compromiso con el cuidado del medio ambiente y manejo de residuos.</small>

                    <a href={pdf14001} target="_blank" rel="noopener noreferrer" className="btn-ver-cert">
                        Ver Certificado
                    </a>
                </div>

                <div className="cert-card scroll-scale delay-200">
                    <div className="cert-img-container">
                         <img src={iso37001Img} alt="Certificado ISO 37001" />
                    </div>
                    <h3>ISO 37001:2016</h3>
                    <div className="cert-line"></div>
                    <p>Gestión Antisoborno</p>
                    <small>Transparencia total en todas nuestras operaciones comerciales.</small>

                    <a href={pdf37001} target="_blank" rel="noopener noreferrer" className="btn-ver-cert">
                        Ver Certificado
                    </a>
                </div>

                <div className="cert-card scroll-scale delay-100">
                    <div className="cert-img-container">
                        <img src={bplImg} alt="Certificado BPL" />
                    </div>
                    <h3>Certificación BPL</h3>
                    <div className="cert-line"></div>
                    <p>Buenas Prácticas Laborales</p>
                    <small>Entornos de trabajo seguros, justos y con igualdad de oportunidades.</small>

                    <a href={pdfBpl} target="_blank" rel="noopener noreferrer" className="btn-ver-cert">
                        Ver Certificado
                    </a>
                </div>

            </div>
        </div>
      </div>

      <div className="nosotros-container">
        <div className="valores-section">
          
          <div className="scroll-scale">
            <h2 style={{marginTop: '40px'}}>Nuestros Valores Institucionales</h2>
            <p className="valores-subtitle">
                MINERALES & DERIVADOS SUDAMERICANA S.A.C promueve el bienestar de sus clientes, 
                colaboradores y las comunidades donde se encuentra presente. Para ello, está 
                guiada por sus valores institucionales:
            </p>
          </div>

          <div className="valores-grid">
            
            <div className="valor-card scroll-scale">
              <div className="valor-icon"><IconoCompromiso /></div>
              <h3>Compromiso</h3>
              <p>De la empresa de atender las necesidades del cliente y satisfacer sus expectativas.</p>
            </div>

            <div className="valor-card scroll-scale delay-100">
              <div className="valor-icon"><IconoResponsabilidad /></div>
              <h3>Responsabilidad</h3>
              <p>Cumplimos con entregar los productos con los requerimientos acordados en el momento indicado.</p>
            </div>

            <div className="valor-card scroll-scale delay-200">
              <div className="valor-icon"><IconoCompetitividad /></div>
              <h3>Competitividad</h3>
              <p>Ofrecemos servicios y productos de calidad, con eficiencia, eficacia y a precios competitivos.</p>
            </div>

            <div className="valor-card scroll-scale">
              <div className="valor-icon"><IconoTrabajo /></div>
              <h3>Trabajo en Equipo</h3>
              <p>Unimos esfuerzos para el logro de nuestros objetivos, en un ambiente de confianza, comunicación permanente y respeto; compartiendo conocimiento, experiencia e información.</p>
            </div>

            <div className="valor-card scroll-scale delay-100">
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