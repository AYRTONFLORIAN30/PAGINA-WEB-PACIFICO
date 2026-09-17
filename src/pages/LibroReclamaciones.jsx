import React, { useState, useEffect } from 'react';
import './LibroReclamaciones.css';

const LibroReclamaciones = () => {
  const [fecha, setFecha] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const hoy = new Date();
    setFecha(hoy.toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };

  return (
    <div className="libro-layout">
      <div className="libro-container">
        
        <div className="libro-header">
          <h1>LIBRO DE RECLAMACIONES</h1>
          <p className="fecha-actual">Fecha: <strong>{fecha}</strong></p>
          <p className="empresa-info">PACÍFICO ABONOS Y ENMIENDAS | RUC: 20600265068</p>
        </div>

        <form className="libro-form" onSubmit={handleSubmit}>
           <div className="form-section">
            <h3>1. Identificación del Consumidor Reclamante</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre Completo:</label>
                <input type="text" required placeholder="Nombres y Apellidos" />
              </div>
              <div className="form-group">
                <label>Domicilio:</label>
                <input type="text" required placeholder="Dirección completa" />
              </div>
              <div className="form-group">
                <label>DNI / CE:</label>
                <input type="text" required placeholder="Número de documento" />
              </div>
              <div className="form-group">
                <label>Teléfono / Celular:</label>
                <input type="tel" required placeholder="Número de contacto" />
              </div>
              <div className="form-group full-width">
                <label>Correo Electrónico:</label>
                <input type="email" required placeholder="ejemplo@correo.com" />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>2. Identificación del Bien Contratado</h3>
            <div className="form-grid">
              <div className="form-group radio-group">
                <label>Tipo:</label>
                <div>
                  <input type="radio" name="tipoBien" id="producto" value="producto" required /> 
                  <label htmlFor="producto">Producto</label>
                  <input type="radio" name="tipoBien" id="servicio" value="servicio" required /> 
                  <label htmlFor="servicio">Servicio</label>
                </div>
              </div>
              <div className="form-group">
                <label>Monto Reclamado (S/):</label>
                <input type="number" step="0.01" placeholder="0.00" />
              </div>
              <div className="form-group full-width">
                <label>Descripción del Bien Contratado:</label>
                <textarea rows="2" placeholder="Ej: Fertilizante orgánico saco 50kg..." required></textarea>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>3. Detalle de la Reclamación</h3>
            <div className="tipo-reclamo-info">
              <p><strong>RECLAMO:</strong> Disconformidad relacionada a los productos o servicios.</p>
              <p><strong>QUEJA:</strong> Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público.</p>
            </div>
            
            <div className="form-group radio-group">
                <label>Tipo:</label>
                <div>
                  <input type="radio" name="tipoReclamo" id="reclamo" value="reclamo" required /> 
                  <label htmlFor="reclamo">Reclamo</label>
                  <input type="radio" name="tipoReclamo" id="queja" value="queja" required /> 
                  <label htmlFor="queja">Queja</label>
                </div>
            </div>

            <div className="form-group full-width">
              <label>Detalle del Reclamo o Queja:</label>
              <textarea rows="4" required placeholder="Describa detalladamente los hechos..."></textarea>
            </div>
            <div className="form-group full-width">
              <label>Pedido del Consumidor:</label>
              <textarea rows="3" required placeholder="¿Qué solución solicita?"></textarea>
            </div>
          </div>

          <div className="form-footer">
            <div className="checkbox-legal">
              <input type="checkbox" id="declaracion" required />
              <label htmlFor="declaracion">
                Declaro ser el titular del servicio y acepto el contenido del presente formulario.
              </label>
            </div>
            <button type="submit" className="btn-enviar">ENVIAR HOJA DE RECLAMACIÓN</button>
          </div>
        </form>

      </div> 

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>¡Reclamo Registrado!</h2>
            <p>Se ha enviado una copia de la hoja de reclamación a su correo electrónico correctamente.</p>
            <p className="modal-id">ID Ticket: #2025-{Math.floor(Math.random() * 1000)}</p>
            <button onClick={cerrarModal} className="btn-modal-cerrar">ENTENDIDO</button>
          </div>
        </div>
      )}

    </div>
  );
};


export default LibroReclamaciones;


