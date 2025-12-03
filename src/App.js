import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos"; 
import Contacto from "./pages/Contacto";
// 1. Importamos la página de detalle que creamos antes
import ProductoDetalle from "./pages/ProductoDetalle"; 
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            
            {/* Ruta del Catálogo completo */}
            <Route path="/productos" element={<Productos />} />
            
            {/* 2. ESTA ES LA RUTA QUE FALTABA: */}
            {/* El ":id" permite que la URL cambie según el producto (ej: /producto/agrocal-mix) */}
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