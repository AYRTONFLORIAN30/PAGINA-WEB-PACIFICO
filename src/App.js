import { useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos"; 
import Contacto from "./pages/Contacto"; 
import ProductoDetalle from "./pages/ProductoDetalle"; 
import LibroReclamaciones from "./pages/LibroReclamaciones"; 

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="App">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<ProductoDetalle />} />
            
            <Route path="/contacto" element={<Contacto />} />

            <Route path="/libro-de-reclamaciones" element={<LibroReclamaciones />} />
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;