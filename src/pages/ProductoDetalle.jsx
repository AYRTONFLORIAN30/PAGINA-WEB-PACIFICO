import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData'; 
import "../styles/ProductoDetalle.css"; 
import { getValue } from '@testing-library/user-event/dist/utils';

function ProductoDetalle() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const producto = productsData.find(p => p.id === id);

  useEffect(() => {
    if (!producto) {
      navigate('/productos'); 
    }

    window.scrollTo(0, 0);
  }, [id, producto, navigate]);

  if (!producto) return null;

  return (
    <div className="detalle-page">
      <div className="detalle-container">
        
        <button className="btn-volver" onClick={() => navigate('/productos')}>
          ← Volver a Productos
        </button>

        <div className="detalle-grid">
          
          <div className="detalle-img-box">
            <img 
              src={producto.img} 
              alt={producto.nombre} 
              
              fetchpriority="high"
              
              decoding="async"
            />
          </div>

          <div className="detalle-info">
            <span className="detalle-categoria">{producto.categoria}</span>
            <h1>{producto.nombre}</h1>
            <p className="detalle-descripcion">{producto.descripcion}</p>

            <div className="detalle-specs">
              <h3>Beneficios Clave:</h3>
              <ul>
                {producto.beneficios && producto.beneficios.map((item, index) => (
                  <li key={index}>✅ {item}</li>
                ))}
              </ul>
              
              <div className="ficha-box">
                <strong>Ficha Técnica / Composición:</strong>
                <p>{producto.fichaTecnica}</p>
              </div>
            </div>

            <button 
              className="btn-cotizar-grande"
              onClick={() => window.open(`https://wa.me/51999999999?text=Hola, estoy interesado en el producto: ${producto.nombre}. ¿Me podrían dar más información y precios?`, '_blank')}
            >
              Cotizar por WhatsApp
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductoDetalle;
