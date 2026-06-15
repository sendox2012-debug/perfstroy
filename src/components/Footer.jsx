import { Link } from "react-router-dom";
import {
  Globe,
  MessageCircle,
  Share2,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
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
          </div>
          <p>
            Кровельные работы, фасады и строительство пристроек. Качественно и в
            срок с 2014 года.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <Globe size={18} />
            </a>
            <a href="#" className="social-link">
              <MessageCircle size={18} />
            </a>
            <a href="#" className="social-link">
              <Share2 size={18} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Услуги</h4>
          <Link to="/uslugi">Кровельные работы</Link>
          <Link to="/uslugi">Фасадные работы</Link>
          <Link to="/uslugi">Пристройки</Link>
          <Link to="/uslugi">Беседки и террасы</Link>
        </div>
        <div className="footer-links">
          <h4>Компания</h4>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/ceny">Цены</Link>
          <Link to="/o-nas">О нас</Link>
          <Link to="/kontakty">Контакты</Link>
        </div>
        <div className="footer-contact">
          <h4>Контакты</h4>
          <div className="contact-item">
            <Phone size={16} />
            <span>+7 (999) 123-45-67</span>
          </div>
          <div className="contact-item">
            <Mail size={16} />
            <span>info@perfstroy.ru</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <span>Москва и МО</span>
          </div>
          <div className="contact-item">
            <Clock size={16} />
            <span>Пн-Пт: 9:00 - 20:00</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 PerfStroy. Все права защищены.</p>
      </div>
    </div>
  </footer>
);
