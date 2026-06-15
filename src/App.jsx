import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Компоненты макета
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

// Страницы
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Prices from "./pages/Prices";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Глобальные стили
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main className="main-content">
          {/* AnimatePresence с mode="wait" обеспечивает плавный уход старой страницы
              перед появлением новой. Ключ (key) обязателен для корректной работы. */}
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home key="home" />} />
              <Route path="/uslugi" element={<Services key="services" />} />
              <Route
                path="/portfolio"
                element={<Portfolio key="portfolio" />}
              />
              <Route path="/ceny" element={<Prices key="prices" />} />
              <Route path="/o-nas" element={<About key="about" />} />
              <Route path="/kontakty" element={<Contact key="contact" />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
