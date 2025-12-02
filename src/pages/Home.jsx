import React from 'react';
import "../styles/Home.css";
// Importamos la imagen grande desde assets
import homeBgImage from '../assets/HOME-IMAGEN.jpg';

// --- IMPORTACIÓN DE LOGOS DE CLIENTES ---
import cliente1 from '../assets/AGRO RURAL.png';
import cliente2 from '../assets/AGROIDEAS.jpeg';
import cliente3 from '../assets/AGUA-LORETO.png';
import cliente4 from '../assets/DEVIDA.jpeg';
import cliente5 from '../assets/EPS EMAPAT.png';
import cliente6 from '../assets/ESSALUD.jpeg';
import cliente7 from '../assets/PICHIS PALCAZU.jpeg';
import cliente8 from '../assets/SEDAPAL.png';

function Home() {
  // Array de clientes para generar el carrusel
  const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6, cliente7, cliente8];

  return (
    <div className="home-wrapper">
      
      {/* --- SECCIÓN 1: BANNER PRINCIPAL --- */}
      <div className="banner" style={{ backgroundImage: `url(${homeBgImage})` }}>
        <div className="overlay">
          <div className="home-container">
              <h1>Nutrición Avanzada para tus Cultivos</h1>
              <h2>Fertilizantes premium que maximizan el rendimiento de tu tierra.</h2>
              <button className="cta-button">VER PRODUCTOS</button>
          </div>
        </div>
      </div>

      {/* --- SECCIÓN 2: ACERCA DE PACÍFICO --- */}
      <section className="about-home">
        <div className="about-content">
          <span className="section-tag">NUESTRA ESENCIA</span>
          <h2>Acerca de Pacífico Abonos y Enmiendas</h2>
          <p>
            Somos una empresa líder dedicada a la extracción, producción y comercialización 
            de fertilizantes y enmiendas agrícolas de alta pureza. Nuestro compromiso es 
            brindar soluciones que recuperen la vitalidad de los suelos peruanos, 
            garantizando cultivos más sanos, rentables y sostenibles.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3>+10</h3>
              <p>Años de Experiencia</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Calidad Garantizada</p>
            </div>
            <div className="stat-item">
              <h3>Nacional</h3>
              <p>Cobertura en todo el Perú</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: NUESTROS CLIENTES (Logos Grandes) --- */}
      <section className="clients-section">
        <div className="clients-header">
          <h2>Nuestros Clientes</h2>
          <p>Instituciones y empresas que confían en nuestra calidad</p>
        </div>
        
        <div className="slider">
          <div className="slide-track">
            {/* PRIMERA VUELTA DE LOGOS */}
            {clientes.map((logo, index) => (
              <div className="slide" key={`logo-1-${index}`}>
                <img src={logo} alt={`Cliente ${index + 1}`} />
              </div>
            ))}

            {/* SEGUNDA VUELTA (DUPLICADA PARA EFECTO INFINITO) */}
            {clientes.map((logo, index) => (
              <div className="slide" key={`logo-2-${index}`}>
                <img src={logo} alt={`Cliente ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTÓN FLOTANTE DE WHATSAPP --- */}
      <a 
        href="https://wa.me/51999999999?text=Hola,%20quisiera%20más%20información%20sobre%20sus%20productos." 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

    </div>
  );
}

export default Home;