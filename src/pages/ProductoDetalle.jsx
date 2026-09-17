import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productsData } from '../data/productsData'; 
import "../styles/ProductoDetalle.css"; 

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
          
          <div className="detalle-img-box animate-on-load delay-1">
            <img 
              src={producto.img} 
              alt={producto.nombre} 
              fetchPriority="high"
              decoding="async"
            />
          </div>

          <div className="detalle-info">
            <div className="animate-on-load delay-2">
                <span className="detalle-categoria">{producto.categoria}</span>
                <h1>{producto.nombre}</h1>
                <p className="detalle-descripcion">{producto.descripcion}</p>
            </div>

            <div className="detalle-specs animate-on-load delay-3">
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

            <div className="botones-accion animate-on-load delay-4">
              
              {producto.pdfFile && (
                <a 
                  href={producto.pdfFile} 
                  target="_blank"            
                  rel="noopener noreferrer"  
                  className="btn-descargar-pdf"
                >
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

              {producto.pdfRegistro && (
                <a 
                  href={producto.pdfRegistro} 
                  target="_blank"            
                  rel="noopener noreferrer"  
                  className="btn-descargar-pdf"
                  style={{ marginTop: '10px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                  Ver Registro Sanitario (PDF)
                </a>
              )}

              <button 
                className="btn-cotizar-grande"
                onClick={() => window.open(`https://wa.me/51935919049?text=Hola, estoy interesado en el producto: ${producto.nombre}. ¿Me podrían dar más información y precios?`, '_blank')}
                style={{ marginTop: '10px' }}
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