import React from 'react';
import { FiShield, FiInfo, FiMail, FiMapPin, FiFileText, FiLock, FiGlobe, FiCheckSquare } from 'react-icons/fi';

const PoliticaPrivacidad = () => {
  const animationStyles = `
    /* Animación de entrada para la tarjeta principal */
    @keyframes slideUpFadeIn {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Animación de flotación suave para el icono principal */
    @keyframes floatIcon {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    /* Animación de aparición simple para las secciones */
    @keyframes fadeInSection {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Clases para aplicar las animaciones */
    .animate-card-entry {
      animation: slideUpFadeIn 0.8s ease-out forwards;
    }

    .animate-float {
      animation: floatIcon 3s ease-in-out infinite;
      display: inline-block;
    }

    /* Clases para aparición en cascada (staggered) */
    .section-animated {
      opacity: 0; /* Empiezan invisibles */
      animation: fadeInSection 0.6s ease-out forwards;
    }
    .delay-1 { animation-delay: 0.3s; }
    .delay-2 { animation-delay: 0.5s; }
    .delay-3 { animation-delay: 0.7s; }
    .delay-4 { animation-delay: 0.9s; }
    .delay-5 { animation-delay: 1.1s; }
    .delay-6 { animation-delay: 1.3s; }
    .delay-7 { animation-delay: 1.5s; }
  `;

  return (
    <div className="legal-container">
      <style>{animationStyles}</style>

      <div className="legal-card animate-card-entry">
        
        <div className="legal-header green">
          <div className="animate-float">
            <FiShield size={50} />
          </div>
          <h1 className="legal-title">Política de Privacidad</h1>
          <p style={{ opacity: 0.9, marginTop: '10px' }}>
            En cumplimiento de la Ley N° 29733 – Ley de Protección de Datos Personales
          </p>
        </div>

        <div className="legal-content">
          
          <p style={{ marginBottom: '30px', textAlign: 'justify' }} className="section-animated delay-1">
            <strong>Pacífico Abonos y Enmiendas</strong> (en adelante, "LA EMPRESA") es consciente de la importancia que tiene la privacidad de sus usuarios y clientes. Por este motivo, hemos elaborado la presente Política de Privacidad para describir el tratamiento de sus datos personales.
          </p>

          <div className="legal-section section-animated delay-2">
            <h2><FiInfo color="#15803d" /> 1. Generalidades</h2>
            <p style={{ textAlign: 'justify', marginBottom: '15px' }}>
              LA EMPRESA recopila información para brindar una mejor experiencia de navegación y facilitar el acceso a nuestros productos de abonos y enmiendas agrícolas.
            </p>
          </div>

          <div className="legal-section section-animated delay-3">
            <h2><FiFileText color="#15803d" /> 2. Datos Personales Recopilados</h2>
            <p style={{ textAlign: 'justify', marginBottom: '15px' }}>
              Se denomina dato personal a toda información que pueda identificar a una persona natural. A través de nuestros formularios web, WhatsApp o contacto directo, podemos recopilar:
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <ul style={{ 
                listStyleType: 'disc', 
                paddingLeft: '20px', 
                marginBottom: '15px', 
                textAlign: 'left' 
              }}>
                <li style={{ marginBottom: '5px' }}>Nombres y apellidos completos.</li>
                <li style={{ marginBottom: '5px' }}>Correo electrónico.</li>
                <li style={{ marginBottom: '5px' }}>Número de teléfono celular y/o fijo.</li>
                <li style={{ marginBottom: '5px' }}>Dirección de envío (en caso de compras).</li>
                <li style={{ marginBottom: '5px' }}>RUC o DNI para facturación.</li>
              </ul>
            </div>

            <p style={{ textAlign: 'justify' }}>
              El usuario garantiza la exactitud y veracidad de los datos facilitados. Al suministrar su información en nuestros formularios, usted otorga su <strong>consentimiento expreso</strong> para el tratamiento de dichos datos.
            </p>
          </div>

          <div className="legal-section section-animated delay-4">
            <h2><FiCheckSquare color="#15803d" /> 3. Finalidad del Tratamiento</h2>
            <p style={{ textAlign: 'justify', marginBottom: '15px' }}>
              Los datos personales serán tratados estrictamente para:
            </p>
            
            <ul style={{ 
              listStyleType: 'disc', 
              paddingLeft: '20px', 
              textAlign: 'left' 
            }}>
              <li style={{ marginBottom: '5px' }}>Atender consultas, cotizaciones y reclamos sobre nuestros productos.</li>
              <li style={{ marginBottom: '5px' }}>Gestión comercial y envío de información sobre nuevos abonos (previo consentimiento).</li>
              <li style={{ marginBottom: '5px' }}>Procesos de facturación y coordinación de despachos.</li>
              <li style={{ marginBottom: '5px' }}>Gestión de nuestra base de datos de clientes y proveedores.</li>
            </ul>
          </div>
          
          <div className="legal-section section-animated delay-5">
            <h2><FiLock color="#15803d" /> 4. Seguridad y Confidencialidad</h2>
            <p style={{ textAlign: 'justify' }}>
              LA EMPRESA ha adoptado todas las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida o acceso no autorizado.
            </p>
          </div>
          
          <div className="legal-section section-animated delay-6">
            <h2><FiShield color="#15803d" /> 5. Derechos ARCO</h2>
            <p style={{ textAlign: 'justify', marginBottom: '15px' }}>
              Como titular de sus datos personales, usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) en cualquier momento.
            </p>
            <div className="highlight-box">
              <p style={{ marginBottom: '10px' }}><strong>Para ejercer estos derechos, contáctenos:</strong></p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                <li style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                  <FiMapPin style={{ marginRight: '10px', minWidth: '20px' }} />
                  <span><strong>Dirección:</strong> Carretera Central Tarma - La Oroya km. 25, Huasqui, Junín.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center' }}>
                  <FiMail style={{ marginRight: '10px', minWidth: '20px' }} />
                  <span><strong>Correo:</strong> <a href="mailto:ventas@pacifico.com.pe" style={{ color: '#15803d', textDecoration: 'underline' }}>ventas@pacifico.com.pe</a></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="legal-section section-animated delay-7">
            <h2><FiGlobe color="#15803d" /> 6. Enlaces a Terceros</h2>
            <p style={{ textAlign: 'justify' }}>
              Nuestro sitio web puede contener enlaces a sitios externos. LA EMPRESA no se hace responsable por las políticas de privacidad o el contenido de dichos sitios de terceros.
            </p>
          </div>

          <div className="legal-section section-animated delay-7" style={{ borderBottom: 'none' }}>
            <h2><FiInfo color="#15803d" /> 7. Actualizaciones</h2>
            <p style={{ textAlign: 'justify' }}>
              Nos reservamos el derecho de modificar esta Política de Privacidad para adaptarla a novedades legislativas.
            </p>
            <p className="mt-4 text-sm text-gray-500 text-center" style={{ marginTop: '40px' }}>
              Última actualización: Diciembre 2025
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;