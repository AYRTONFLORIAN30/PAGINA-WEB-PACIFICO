import React, { useEffect } from 'react';
import '../styles/Servicios.css';

import cargaBarco from '../assets/Carga en barco.jpg';
import cargaTrasera from '../assets/Carga trasera.jpeg';
import carroBlanco from '../assets/Carro blanco.png';
import carroRojo from '../assets/Carro rojo.jpg';

const Servicios = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
        }
      });
    }, { threshold: 0.1 }); 

    const cards = document.querySelectorAll('.servicio-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="servicios-container">
      
      <div className="servicios-header">
        <h1>SOLUCIONES LOGÍSTICAS INTEGRALES</h1>
        <h2>Transportamos Insumos Químicos, Productos Fiscalizados y Peligrosos</h2>
        <p>
          Garantizamos seguridad, puntualidad y cumplimiento normativo en cada kilómetro. 
          Tu carga en manos de expertos.
        </p>
      </div>

      <div className="servicios-grid">
        
        <div className="servicio-card">
          <img src={cargaBarco} alt="Transporte Marítimo" className="servicio-img" />
          <div className="servicio-info">
            <h3>Logística Marítima y Portuaria</h3>
            <p>
              Gestión experta en carga y descarga masiva. Conectamos tus insumos con el mundo 
              asegurando la integridad de productos a gran escala desde el puerto hasta su destino.
            </p>
          </div>
        </div>

        <div className="servicio-card">
          <img src={cargaTrasera} alt="Manejo de Carga" className="servicio-img" />
          <div className="servicio-info">
            <h3>Protocolos de Carga Segura</h3>
            <p>
              Especialistas en la manipulación de materiales delicados y peligrosos. 
              Nuestro equipo sigue estrictas normativas de seguridad para evitar riesgos durante la estiba.
            </p>
          </div>
        </div>

        <div className="servicio-card">
          <img src={carroBlanco} alt="Transporte Fiscalizado" className="servicio-img" />
          <div className="servicio-info">
            <h3>Flota de Monitoreo Constante</h3>
                <p className="text-gray-600 mb-4">
                  Registro de transporte de insumos químicos y bienes fiscalizados. 
                  Ofrecemos trazabilidad total y documentación en regla ante la SUNAT.
                </p>
          </div>
        </div>
    
        <div className="servicio-card wide">
          <img 
            src={carroRojo} 
            alt="Transporte Todo Terreno" 
            className="servicio-img" 
            style={{ objectPosition: 'center 30%' }} 
          />
          <div className="servicio-info">
            <h3>Cobertura Nacional Todo Terreno</h3>
            <p>
              Llegamos a las zonas más difíciles. Nuestra flota pesada está diseñada para soportar 
              las rutas más exigentes del Perú, llevando tu carga a tiempo, llueva o truene.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Servicios;