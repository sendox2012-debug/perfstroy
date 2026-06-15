import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { staggerContainer, staggerChild } from "../utils/animations";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { path: "/", label: "Главная" },
    { path: "/uslugi", label: "Услуги" },
    { path: "/portfolio", label: "Портфолио" },
    { path: "/ceny", label: "Цены" },
    { path: "/o-nas", label: "О нас" },
    { path: "/kontakty", label: "Контакты" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`navbar ${scrolled ? "scrolled" : ""}`}
      >
        <div className="navbar-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <span>PerfStroy</span>
          </Link>
          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link to="/kontakty" className="nav-cta">
            <Phone size={16} />
            <span>+7 (999) 123-45-67</span>
          </Link>
          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="mobile-menu-links"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {links.map((link) => (
                <motion.div key={link.path} variants={staggerChild}>
                  <Link
                    to={link.path}
                    className={`mobile-link ${location.pathname === link.path ? "active" : ""}`}
                  >
                    {link.label}
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="mobile-menu-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <p>
                <Phone size={16} /> +7 (999) 123-45-67
              </p>
              <p>info@perfstroy.ru</p>
              <p>Москва и МО</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
