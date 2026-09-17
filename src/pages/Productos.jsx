import React, { useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import { productsData } from '../data/productsData'; 
import "../styles/Productos.css";

function Productos() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
        }
      });
    }, { threshold: 0.1 }); 

    const hiddenElements = document.querySelectorAll('.scroll-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  const catCalcicas = productsData.filter(p => p.categoria === "Enmiendas Agrícolas Cálcicas");
  const catNaturales = productsData.filter(p => p.categoria === "Abonos Naturales");
  const catOrganicos = productsData.filter(p => p.categoria === "Abonos Orgánicos");

  const renderSection = (title, description, products) => (
    <div className="categoria-section">
      <h2 className="categoria-titulo">{title}</h2>
      <p className="categoria-desc">{description}</p>
      
      <div className="productos-grid">
        {products.map((prod) => (
          <div key={prod.id} className="producto-card scroll-card">
            
            <Link to={`/producto/${prod.id}`} className="producto-link-wrapper">
              <div className="producto-img-container">
                <img 
                  src={prod.img} 
                  alt={prod.nombre} 
                  className="producto-img"
                  loading="lazy"
                  width="300"
                  height="300"
                />
              </div>
              <h3>{prod.nombre}</h3>
            </Link>
            
            <button 
              className="btn-cotizar" 
              onClick={() => window.open(`https://wa.me/51935919049?text=Hola, me interesa cotizar el producto: ${prod.nombre}`, '_blank')}
            >
              Cotizar
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="productos-page">
      
      <div className="productos-header">
        <h1>NUESTROS PRODUCTOS</h1>
        <p>Soluciones de alta calidad para cada etapa de tu cultivo y tratamiento.</p>
      </div>

      <div className="productos-container">
        
        {renderSection("Enmiendas Agrícolas Cálcicas", "Corrección de acidez y aporte de calcio para suelos equilibrados.", catCalcicas)}
        {renderSection("Abonos Naturales", "Nutrientes esenciales de origen natural para potenciar tus cultivos.", catNaturales)}
        {renderSection("Abonos Orgánicos", "Materia orgánica procesada para mejorar la estructura del suelo.", catOrganicos)}

      </div>
    </section>
  );
}

export default Productos;