import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData'; 
import "../styles/ProductoDetalle.css"; 

// NOTA: Quité la importación de 'react-icons' para solucionar tu error de compilación.
// Usaremos un SVG directo en su lugar.

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
        
        <div className="detalle-grid">
          
          <div className="detalle-img-box">
            <img 
              src={producto.img} 
              alt={producto.nombre} 
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="detalle-info">
            <span className="detalle-categoria">{producto.categoria}</span>
            <h1>{producto.nombre}</h1>
            <p className="detalle-descripcion">{producto.descripcion}</p>

            <div className="detalle-specs">
              <h3>Beneficios Clave:</h3>
              <ul className="mb-6">
                {producto.beneficios && producto.beneficios.map((item, index) => (
                  <li key={index}>✅ {item}</li>
                ))}
              </ul>
              
              <div className="ficha-box">
                <h3 className="text-lg font-bold mb-3 text-gray-800 border-b pb-2">
                  Ficha Técnica / Composición
                </h3>

                {producto.composicion ? (
                  <div className="tabla-tecnica-container">
                    <table className="w-full text-sm text-left">
                      <thead className="bg-gray-100 text-gray-700 font-bold uppercase">
                        <tr>
                          <th className="px-4 py-2 rounded-tl-lg">Elemento</th>
                          <th className="px-4 py-2 rounded-tr-lg text-right">Concentración</th>
                        </tr>
                      </thead>
                      <tbody>
                        {producto.composicion.map((item, index) => (
                          <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                            <td className="px-4 py-2 font-medium text-gray-600">
                              {item.elemento}
                            </td>
                            <td className="px-4 py-2 text-right font-bold text-gray-800">
                              {item.porcentaje}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-600 font-medium bg-gray-50 p-3 rounded">
                    {producto.fichaTecnica}
                  </p>
                )}
              </div>
            </div>

            {/* --- SECCIÓN DE BOTONES --- */}
            <div className="botones-accion">
              
              {/* 1. BOTÓN VER PDF 
                  - Eliminé 'download' para que se abra en nueva pestaña.
                  - Usé un SVG manual para evitar el error de librería.
              */}
              {producto.pdfFile && (
                <a 
                  href={producto.pdfFile} 
                  target="_blank"            // Abre en nueva pestaña
                  rel="noopener noreferrer"  // Seguridad obligatoria
                  className="btn-descargar-pdf"
                >
                  {/* Icono PDF (SVG) */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                  Ver Ficha Técnica (PDF)
                </a>
              )}

              {/* 2. BOTÓN COTIZAR */}
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
    </div>
  );
}

export default ProductoDetalle;