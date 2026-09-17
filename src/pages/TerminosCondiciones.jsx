import React from 'react';
import { FiFileText, FiCheckCircle, FiAlertTriangle, FiGlobe, FiShield, FiLayout } from 'react-icons/fi';

const TerminosCondiciones = () => {
  const animationStyles = `
    @keyframes slideUpFadeIn {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes floatIcon {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes fadeInSection {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-card-entry {
      animation: slideUpFadeIn 0.8s ease-out forwards;
    }
    .animate-float {
      animation: floatIcon 3s ease-in-out infinite;
      display: inline-block;
    }
    .section-animated {
      opacity: 0;
      animation: fadeInSection 0.6s ease-out forwards;
    }
    /* Retrasos para el efecto cascada */
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
        
        <div className="legal-header blue">
          <div className="animate-float">
            <FiFileText size={50} />
          </div>
          <h1 className="legal-title">Términos y Condiciones</h1>
          <p style={{ opacity: 0.9, marginTop: '10px' }}>
            Condiciones Generales de Uso del Sitio Web
          </p>
        </div>

        <div className="legal-content">
          
          <p style={{ marginBottom: '30px', textAlign: 'justify' }} className="section-animated delay-1">
            Bienvenido al sitio web de <strong>Pacífico Abonos y Enmiendas</strong> (en adelante "LA EMPRESA"). El acceso y uso de esta página web están sujetos a las siguientes condiciones. Si usted no está de acuerdo con las mismas, le rogamos no utilizar este sitio.
          </p>
          <br />

          <div className="legal-section section-animated delay-2">
            <h2><FiCheckCircle color="#1e3a8a" /> 1. Aceptación y Uso</h2>
            <br />
            <p className="text-justify mb-3" style={{ marginLeft: '0' }}>
              El usuario se compromete a utilizar el sitio web, sus contenidos y servicios de conformidad con la Ley, las presentes Condiciones Generales, las buenas costumbres y el orden público.
            </p>
            <p className="text-justify" style={{ marginLeft: '0' }}>
              Queda prohibido el uso de la web con fines ilícitos o lesivos contra LA EMPRESA o cualquier tercero.
            </p>
          </div>

          <div className="legal-section section-animated delay-3">
            <h2><FiShield color="#1e3a8a" /> 2. Propiedad Intelectual e Industrial</h2>
            <br />
            <p className="text-justify mb-3">
              Toda la información, documentos, imágenes de productos, logotipos y material gráfico publicados en esta página web son propiedad exclusiva de <strong>Pacífico Abonos y Enmiendas</strong>.
            </p>
            <br />
            
            <ul style={{ 
              listStyleType: 'disc', 
              paddingLeft: '20px', 
              textAlign: 'left', 
              marginBottom: '15px'
            }}>
              <li style={{ marginBottom: '5px', paddingLeft: '5px' }}>
                Está prohibida la reproducción, transformación, distribución o comunicación pública de los contenidos sin autorización.
              </li>
              <li style={{ marginBottom: '5px', paddingLeft: '5px' }}>
                El uso no autorizado de estos materiales constituye una violación de los derechos de propiedad intelectual vigentes en Perú.
              </li>
            </ul>
          </div>

          <div className="legal-section section-animated delay-4">
            <h2><FiAlertTriangle color="#d97706" /> 3. Limitación de Responsabilidad</h2>
            <br />
            <p className="text-justify mb-3">
              LA EMPRESA se esfuerza por mantener la información técnica actualizada. Sin embargo:
            </p>
            <br />
            <div className="highlight-box" style={{ borderLeftColor: '#d97706', backgroundColor: '#fffbeb' }}>
              
              <ul style={{ listStyleType: 'none', padding: 0, textAlign: 'left' }}>
                <li style={{ marginBottom: '10px' }}>
                  <strong>3.1. Carácter Referencial:</strong> La información contenida en fichas técnicas tiene propósitos informativos.
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <strong>3.2. Asesoría Técnica:</strong> La orientación ofrecida en este sitio web <strong>no sustituye la asesoría de un ingeniero agrónomo</strong>.
                </li>
                <li>
                  <strong>3.3. Uso de Productos:</strong> LA EMPRESA no se hace responsable por daños derivados de una aplicación incorrecta.
                </li>
              </ul>
            </div>
          </div>

          <div className="legal-section section-animated delay-5">
            <h2><FiGlobe color="#1e3a8a" /> 4. Enlaces a Terceros</h2>
            <br />
            <p className="text-justify">
              Este sitio puede contener enlaces a páginas web de terceros. LA EMPRESA no garantiza ni se hace responsable por la disponibilidad o contenido de dichas páginas externas.
            </p>
          </div>

           <div className="legal-section section-animated delay-6">
            <h2><FiLayout color="#1e3a8a" /> 5. Información del Usuario</h2>
            <br />
            <p className="text-justify">
              El usuario es responsable de la veracidad de la información que suministre a través de los formularios. El tratamiento de dichos datos se regirá por nuestra <a href="/politica-de-privacidad" style={{color: '#1e3a8a', fontWeight: 'bold', textDecoration: 'underline'}}>Política de Privacidad</a>.
            </p>
          </div>

          <div className="legal-section section-animated delay-7" style={{ borderBottom: 'none' }}>
            <h2><FiFileText color="#1e3a8a" /> 6. Legislación y Jurisdicción</h2>
            <br />
            <p className="text-justify">
              Estas Condiciones Generales se rigen por la legislación peruana. Las partes se someten a la jurisdicción de los Juzgados y Tribunales competentes del departamento de Junín.
            </p>
            <br />
            <br />
            <p className="mt-4 text-sm text-gray-500 text-center">
              Pacífico Abonos y Enmiendas - Huasqui, Tarma.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;