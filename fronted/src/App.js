import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ContactoPage from "./pages/ContactoPage";
import MascotasenadopcionPage from "./pages/MascotasenadopcionPage";
import MascotasCard from "./pages/MascotasCard";
import FormularioAdopcionPage from "./pages/FormularioAdopcionPage";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/mascotas" element={<MascotasenadopcionPage />} />
            <Route path="/mascotas/:tipo" element={<MascotasCard />} />
            <Route path="/formulario-adopcion" element={<FormularioAdopcionPage />} />
          </Routes>
        </main>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
