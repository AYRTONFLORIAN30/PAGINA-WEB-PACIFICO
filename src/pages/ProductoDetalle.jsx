import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// Importamos la base de datos de productos
import { productsData } from '../data/productsData'; 
import "../styles/ProductoDetalle.css"; 

function ProductoDetalle() {
  const { id } = useParams(); // Captura el nombre del producto de la URL (ej: 'agrocal-mix')
  const navigate = useNavigate();

  // Busca el producto específico en la lista
  const producto = productsData.find(p => p.id === id);

  // Si alguien escribe una URL mal o el producto no existe, lo devolvemos al catálogo
  useEffect(() => {
    if (!producto) {
      navigate('/productos'); 
    }
    // Truco: Hacer que la página empiece siempre desde arriba
    window.scrollTo(0, 0);
  }, [id, producto, navigate]);

  // Mientras carga o si no hay producto, no mostramos nada para evitar errores
  if (!producto) return null;

  return (
    <div className="detalle-page">
      <div className="detalle-container">
        
        {/* Botón para regresar */}
        <button className="btn-volver" onClick={() => navigate('/productos')}>
          ← Volver a Productos
        </button>

        <div className="detalle-grid">
          
          {/* Columna Izquierda: Imagen */}
          <div className="detalle-img-box">
            <img src={producto.img} alt={producto.nombre} />
          </div>

          {/* Columna Derecha: Datos */}
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