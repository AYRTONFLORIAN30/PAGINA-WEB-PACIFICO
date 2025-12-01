import React from 'react';
import "../styles/Nosotros.css";
// Asegúrate de tener esta imagen en assets o cambia el nombre aquí
import nosotrosImg from "../assets/nosotros.jpg"; 

function Nosotros() {
  return (
    <section className="nosotros-section">
      <div className="nosotros-container">
        
        {/* PARTE 1: INTRODUCCIÓN (Texto + Imagen) */}
        <div className="intro-grid">
          
          <div className="intro-text">
            <span className="subtitle">SOBRE NOSOTROS</span>
            <h1>Impulsando el Agro Peruano</h1>
            <p>
              En <strong>Minera Pacífico</strong>, nos dedicamos a potenciar la agricultura 
              a través de soluciones nutricionales de alta eficiencia. Con años de experiencia 
              en el sector, proveemos fertilizantes y enmiendas que garantizan suelos más 
              fértiles y cultivos más rentables.
            </p>
            <p>
              Trabajamos de la mano con agricultores y distribuidores para ofrecer 
              productos de calidad internacional que aseguran el éxito de cada cosecha.
            </p>
          </div>

          <div className="intro-image">
            {/* Si no tienes la imagen aún, esto mostrará un cuadro gris temporalmente */}
            <img src={nosotrosImg} alt="Equipo Minera Pacifico en campo" />
          </div>

        </div>

        {/* PARTE 2: MISIÓN Y VISIÓN (Tarjetas) */}
        <div className="mv-grid">
          
          {/* Tarjeta Misión */}
          <div className="card-mv">
            <div className="icon-mv">🎯</div>
            <h3>Nuestra Misión</h3>
            <p>
              Proveer fertilizantes de máxima calidad que incrementen la productividad 
              agrícola, promoviendo prácticas sostenibles y rentables para nuestros clientes.
            </p>
          </div>

          {/* Tarjeta Visión */}
          <div className="card-mv">
            <div className="icon-mv">🚀</div>
            <h3>Nuestra Visión</h3>
            <p>
              Ser reconocidos como el aliado estratégico líder en nutrición vegetal en el Perú, 
              destacando por nuestra innovación, calidad y compromiso con el campo.
            </p>
          </div>

          {/* Tarjeta Valores */}
          <div className="card-mv">
            <div className="icon-mv">🌱</div>
            <h3>Nuestros Valores</h3>
            <p>
              Integridad, Calidad, Innovación y Compromiso con el agricultor son los pilares 
              que sostienen cada saco que entregamos.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Nosotros;