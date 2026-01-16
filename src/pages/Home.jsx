import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import "../styles/Home.css";
import homeBgImage from '../assets/HOME-IMAGEN.webp';
import { productsData } from '../data/productsData';

import iconEco from '../assets/icono-eco.webp';
import iconEnvio from '../assets/icono-envio.webp';
import iconAsesor from '../assets/icono-asesor.webp';

function Home() {
  
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    rucDni: '',
    lugar: '',
    mensaje: ''
  });

  const [showModal, setShowModal] = useState(false);

  const testimonials = [
    {
      id: 1,
      nombre: "Carlos Mendoza",
      cargo: "Productor de Palto, Ica",
      texto: "Desde que utilizo el compost de Pacífico, la estructura de mi suelo ha mejorado notablemente. Mis árboles están más vigorosos y la fruta tiene mejor calibre."
    },
    {
      id: 2,
      nombre: "Asoc. Agricultores del Valle",
      cargo: "Junín",
      texto: "La asesoría técnica que brindan es excelente. No solo te venden el producto, sino que te enseñan a aplicarlo para no desperdiciar nada. 100% recomendados."
    },
    {
      id: 3,
      nombre: "Roberto H.",
      cargo: "Fundo Santa Rosa",
      texto: "Probé su línea de enmiendas cálcicas y solucioné mis problemas de acidez rápidamente. La logística de envío fue puntual y sin contratiempos."
    },
    {
      id: 4,
      nombre: "Ing. Sofia Torres",
      cargo: "Agroexportadora del Norte, Piura",
      texto: "Sus fertilizantes orgánicos fueron clave para cumplir con los estándares de residuos cero en nuestra exportación de uva de mesa. Calidad garantizada."
    },
    {
      id: 5,
      nombre: "Cooperativa Cafetalera",
      cargo: "San Martín",
      texto: "Recuperamos el vigor de nuestros cafetales antiguos gracias a su plan de nutrición. El rendimiento por hectárea aumentó un 20% esta campaña."
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({
      nombre: '', empresa: '', email: '', telefono: '', rucDni: '', lugar: '', mensaje: ''
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.scroll-scale, .scroll-blur, .scroll-slide');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="home-wrapper">
      
      <div className="banner">
        <img 
            src={homeBgImage} 
            className="banner-bg-image" 
            fetchPriority="high"
        />
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

      <section className="about-home">
        <div className="about-content scroll-scale">
          <span className="section-tag">NUESTRA ESENCIA</span>
          <h2>Acerca de Pacífico Abonos y Enmiendas</h2>
          <p>
            Con más de 20 años de experiencia, somos especialistas en potenciar el rendimiento agrícola. 
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

      <section className="benefits-section">
        <div className="section-header scroll-scale">
          <h2>¿Por qué elegir Pacífico?</h2>
        </div>
        
        <div className="benefits-grid">
          <div className="benefit-card scroll-scale">
            <div className="icon-box"><img src={iconEco} alt="Ecológico" /></div>
            <h3>100% Ecológico</h3>
            <p>Insumos que respetan el medio ambiente y regeneran tu suelo.</p>
          </div>
          <div className="benefit-card scroll-scale delay-100">
            <div className="icon-box"><img src={iconEnvio} alt="Envíos" /></div>
            <h3>Envíos a todo el Perú</h3>
            <p>Logística eficiente para llegar a tu campo donde estés.</p>
          </div>
          <div className="benefit-card scroll-scale delay-200">
            <div className="icon-box"><img src={iconAsesor} alt="Asesoría" /></div>
            <h3>Asesoría Técnica</h3>
            <p>Acompañamiento profesional para maximizar tu cosecha.</p>
          </div>
        </div>
      </section>

      <div className="products-title-section">
        <h2>Nuestros Productos</h2>
        <p>Calidad garantizada para cada etapa del cultivo</p>
      </div>
      <section className="home-products-section">
        <div className="product-slider">
          <div className="product-slide-track">
            {productsData.map((prod, index) => (
              <div className="product-slide" key={`p1-${index}`}>
                <Link to={`/producto/${prod.id}`} className="home-product-card">
                  <div className="card-image"><img src={prod.img} alt={prod.nombre} /></div>
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
                  <div className="card-image"><img src={prod.img} alt={prod.nombre} /></div>
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

      <section className="processes-section scroll-blur">
        <div className="products-title-section" style={{ padding: '0 20px 40px 20px' }}>
          <h2>Nuestros Procesos</h2>
          <p>Tecnología y dedicación en cada gramo de producto</p>
        </div>
        <div className="video-wrapper">
          <iframe 
            width="560" height="315" src="https://www.youtube.com/embed/KSva8cuHFL4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="products-title-section" style={{ paddingBottom: '10px' }}>
          <h2>Testimonios de nuestros clientes</h2>
          <p>La voz de quienes confían en nuestra calidad</p>
        </div>
        
        <div className="testimonials-container">
          {testimonials.map((testimonio, index) => (
            <div 
              key={testimonio.id} 
              className={`testimonial-card scroll-scale ${index % 3 === 1 ? 'delay-100' : index % 3 === 2 ? 'delay-200' : ''}`}
            >
              <div className="quote-icon">❝</div>
              <p className="testimonial-text">"{testimonio.texto}"</p>
              <div className="testimonial-author">
                <h4>{testimonio.nombre}</h4>
                <span>{testimonio.cargo}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cotizacion-section">
        <div className="cotizacion-overlay"></div>
        <div className="cotizacion-container">
          <div className="form-card scroll-slide">
            <div className="form-header-yellow">
              <h2>Solicite una cotización</h2>
            </div>

            <div className="form-body">
              <p className="form-description">
                Complete el siguiente formulario para realizar una cotización. Con gusto nos contactaremos 
                con usted en el menor tiempo posible.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-left-col">
                    <input type="text" name="nombre" placeholder="Nombre*" required value={formData.nombre} onChange={handleChange} />
                    <input type="text" name="empresa" placeholder="Empresa*" required value={formData.empresa} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} />
                    <input type="tel" name="telefono" placeholder="Teléfono*" required value={formData.telefono} onChange={handleChange} />
                    <input type="text" name="rucDni" placeholder="RUC o DNI*" required value={formData.rucDni} onChange={handleChange} />
                    <input type="text" name="lugar" placeholder="Especificar para que lugar cotiza el fertilizante*" required value={formData.lugar} onChange={handleChange} />
                  </div>
                  <div className="form-right-col">
                    <textarea name="mensaje" placeholder="Mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className="form-footer-action">
                  <button type="submit" className="btn-enviar-cotizacion">Enviar</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      <a href="https://wa.me/51935919049" className="whatsapp-float" target="_blank" rel="noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="white"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      </a>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content-yellow">
            <div className="success-icon-yellow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>¡Cotización Enviada!</h2>
            <p>Hemos recibido tus datos correctamente. Nuestro equipo comercial se pondrá en contacto contigo a la brevedad.</p>
            <button onClick={closeModal} className="btn-modal-yellow">ENTENDIDO</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;