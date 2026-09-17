import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/logo.webp"; 
import libroImg from "../assets/libro-reclamaciones.webp"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col brand-col">
          <img src={logo} alt="Pacifico Logo" className="footer-logo" />
          
          <div className="social-icons">
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1Bxt2gdUoc/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="icon facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            
            {/* Instagram */}
            <a href="https://www.instagram.com/pacificoabonosyenmiendas?igsh=MW1ibGl3MTdrejVjcA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="icon instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/pacifico-abonos/" target="_blank" rel="noreferrer" className="icon linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            
            {/* TIKTOK (Nuevo) */}
            <a href="https://www.tiktok.com/@pacifico.abonos.y" target="_blank" rel="noreferrer" className="icon tiktok">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>

          </div>
        </div>

        <div className="footer-col">
          <h3>CONTACTO:</h3>
          <p><strong>Correo:</strong> ventas@pacifico.com.pe</p>
          <p><strong>Dirección:</strong> Carretera Central Tarma - La Oroya km. 25, <br/>Huasqui</p>
        </div>

        <div className="footer-col">
          <h3>ENLACES DE INTERÉS:</h3>
          <ul className="footer-links">
            <li><Link to="/productos">Portafolio de productos</Link></li>
             <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contáctanos</Link></li>
          
            
            <li style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
              <Link to="/libro-de-reclamaciones">
                <img 
                  src={libroImg} 
                  alt="Libro de Reclamaciones"
                  style={{ 
                    width: '180px', 
                    height: 'auto',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    backgroundColor: 'white',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </Link>
            </li>
            
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
  <p>© 2025 PACIFICO ABONOS Y ENMIENDAS — Todos los derechos reservados.</p>
  <div className="legal-links">
    <Link to="/politica-de-privacidad">Política de Privacidad</Link> 
    {' | '}
    <Link to="/terminos-y-condiciones">Condiciones de Uso</Link>
  </div>
</div>
    </footer>
  );
}

export default Footer;