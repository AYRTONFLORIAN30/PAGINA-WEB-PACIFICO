import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
// Asegúrate de que este sea el nombre correcto de tu imagen en la carpeta assets
import logoMinera from "../assets/logo.webp"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        
        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img src={logoMinera} alt="Pacifico Logo" className="logo-img" />
          </Link>
        </div>

        {/* BOTÓN MÓVIL */}
        <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
        {/* MENÚ */}
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/nosotros" onClick={() => setIsOpen(false)}>Nosotros</Link>
          <Link to="/productos" onClick={() => setIsOpen(false)}>Productos</Link>
          <Link to="/contacto" onClick={() => setIsOpen(false)}>Contacto</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;