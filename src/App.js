import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Proyectos } from './components/Proyectos';
import { Curriculum } from './components/Curriculum';
import { Contacto } from './components/Contacto';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router> {/* ESTO AYUDA A MANEJAR LAS RUTAS */}
      <Header />
      <Routes> {/* ESTO NOS AYUDA A DIFERENCIAR LOS LINKS */}
        <Route path="/" element={<Home />} /> {/* ESTO NOS AYUDA A CREAR LAS RUTAS */}
        <Route path="/Curriculum" element={<Curriculum />} />
        <Route path="/Proyectos" element={<Proyectos />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
