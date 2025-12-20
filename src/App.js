import { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 

// Componentes Globales
import Header from "./components/Header";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos"; 
import Contacto from "./pages/Contacto"; 
import ProductoDetalle from "./pages/ProductoDetalle"; 
import LibroReclamaciones from "./pages/LibroReclamaciones"; // <--- NUEVA IMPORTACIÓN

import "./App.css";

// --- INICIO DE LA SOLUCIÓN ---
// Este componente detecta cuando cambia la ruta y sube el scroll automáticamente
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
// --- FIN DE LA SOLUCIÓN ---

function App() {
  return (
    <Router>
      {/* Aquí activamos el ScrollToTop dentro del Router */}
      <ScrollToTop />

      <div className="App">
        <Header />

        <main className="content">
          <Routes>
            {/* Rutas Principales */}
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            
            {/* Rutas de Productos */}
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
            
            {/* Ruta de Contacto */}
            <Route path="/contacto" element={<Contacto />} />

            {/* --- NUEVA RUTA: LIBRO DE RECLAMACIONES --- */}
            <Route path="/libro-de-reclamaciones" element={<LibroReclamaciones />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;