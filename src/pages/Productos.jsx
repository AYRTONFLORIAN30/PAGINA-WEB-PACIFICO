import React from 'react';
import { Link } from 'react-router-dom'; 
import { productsData } from '../data/productsData'; 
import "../styles/Productos.css";

function Productos() {
  
  // Filtramos los productos por categoría
  const catCalcicas = productsData.filter(p => p.categoria === "Enmiendas Agrícolas Cálcicas");
  const catNaturales = productsData.filter(p => p.categoria === "Abonos Naturales");
  const catOrganicos = productsData.filter(p => p.categoria === "Abonos Orgánicos");

  // Función para renderizar una sección completa
  const renderSection = (title, description, products) => (
    <div className="categoria-section">
      <h2 className="categoria-titulo">{title}</h2>
      <p className="categoria-desc">{description}</p>
      
      <div className="productos-grid">
        {products.map((prod) => (
          <div key={prod.id} className="producto-card">
            
            {/* El Link envuelve la imagen y el título para ir al detalle */}
            <Link to={`/producto/${prod.id}`} className="producto-link-wrapper">
              <div className="producto-img-container">
                <img src={prod.img} alt={prod.nombre} className="producto-img" />
              </div>
              <h3>{prod.nombre}</h3>
            </Link>
            
            <button 
              className="btn-cotizar" 
              onClick={() => window.open(`https://wa.me/51999999999?text=Hola, me interesa cotizar el producto: ${prod.nombre}`, '_blank')}
            >
              Cotizar Ahora
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
        <p>Soluciones de alta calidad para cada etapa de tu cultivo.</p>
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