import React from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/Home.css";
import homeBgImage from '../assets/HOME-IMAGEN.webp';
import { productsData } from '../data/productsData';

function Home() {
  
  return (
    <div className="home-wrapper">
      
      {/* 1. BANNER PRINCIPAL */}
      <div className="banner" style={{ backgroundImage: `url(${homeBgImage})` }}>
        <div className="overlay">
          <div className="home-container">
              <h1>Nutrición Avanzada para tus Cultivos</h1>
              <h2>Fertilizantes premium que maximizan el rendimiento de tu tierra.</h2>
              <Link to="/productos">
                <button className="cta-button">VER PRODUCTOS</button>
              </Link>
          </div>
        </div>
      </div>

      {/* 2. ACERCA DE */}
      <section className="about-home">
        <div className="about-content">
          <span className="section-tag">NUESTRA ESENCIA</span>
          <h2>Acerca de Pacífico Abonos y Enmiendas</h2>
          <p>
            Con más de 18 años de experiencia, somos especialistas en potenciar el rendimiento agrícola. 
            Producimos y comercializamos la línea más completa de abonos naturales, orgánicos y enmiendas 
            cálcicas marca PACIFICO.
          </p>
          
          <div className="stats-grid">
            <div className="stat-item"><h3>20</h3><p>Años de Experiencia</p></div>
            <div className="stat-item"><h3>100%</h3><p>Calidad Garantizada</p></div>
            <div className="stat-item"><h3>Nacional</h3><p>Cobertura en todo el Perú</p></div>
          </div>
        </div>
      </section>

      {/* 3. CARRUSEL DE PRODUCTOS */}
      <section className="home-products-section">
        <div className="section-header">
          <h2>Nuestros Productos</h2>
          <p>Calidad garantizada para cada etapa del cultivo</p>
        </div>

        <div className="product-slider">
          <div className="product-slide-track">
            {productsData.map((prod, index) => (
              <div className="product-slide" key={`p1-${index}`}>
                <Link to={`/producto/${prod.id}`} className="home-product-card">
                  <div className="card-image">
                    <img src={prod.img} alt={prod.nombre} />
                  </div>
                  <div className="card-content">
                    <h4>{prod.nombre}</h4>
                    <span className="card-btn">Ver Detalle</span>
                  </div>
                </Link>
              </div>
            ))}
            {productsData.map((prod, index) => (
              <div className="product-slide" key={`p2-${index}`}>
                <Link to={`/producto/${prod.id}`} className="home-product-card">
                  <div className="card-image">
                    <img src={prod.img} alt={prod.nombre} />
                  </div>
                  <div className="card-content">
                    <h4>{prod.nombre}</h4>
                    <span className="card-btn">Ver Detalle</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        
      </section> 

      {/* --- 4. NUEVO: NUESTROS PROCESOS (VIDEO) --- */}
      <section className="processes-section">
        <div className="section-header">
          <h2>Nuestros Procesos</h2>
          <p>Tecnología y dedicación en cada gramo de producto</p>
        </div>
        
        <div className="video-wrapper">
          {/* Reemplaza el enlace 'src' con tu video de YouTube */}
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/KSva8cuHFL4" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* WHATSAPP */}
      <a href="https://wa.me/51999999999" className="whatsapp-float" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>
    </div>
  );
}

export default Home;


