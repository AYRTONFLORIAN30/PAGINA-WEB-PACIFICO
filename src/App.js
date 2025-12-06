import { useEffect } from "react"; // 1. Importamos useEffect
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // 2. Importamos useLocation
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos"; 
import Contacto from "./pages/Contacto";
import ProductoDetalle from "./pages/ProductoDetalle"; 
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
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            
            {/* Ruta del Catálogo completo */}
            <Route path="/productos" element={<Productos />} />
            
            {/* Ruta de detalle del producto */}
            <Route path="/producto/:id" element={<ProductoDetalle />} />
            
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;