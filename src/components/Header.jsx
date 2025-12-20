import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import logoMinera from "../assets/logo.webp"; 
import { getValue } from "@testing-library/user-event/dist/utils";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        
        <div className="logo">
          <Link to="/">
            <img src={logoMinera} alt="Pacifico Logo" className="logo-img" />
          </Link>
        </div>

        <div className={`menu-toggle ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
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