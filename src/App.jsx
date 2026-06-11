import { useState, useEffect } from "react";
// ВАЖНО: Используем HashRouter для GitHub Pages
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hammer,
  Home as HomeIcon,
  Briefcase,
  Users,
  Mail,
  Phone,
  MapPin,
  CheckSquare,
  Star,
  Clock,
  Shield,
  TrendingUp,
  ChevronRight,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  MessageCircle,
  Share2,
  Quote,
  Ruler,
  Palette,
  Truck,
  Wrench,
} from "lucide-react";
import "./App.css";

// --- ЕДИНЫЕ НАСТРОЙКИ АНИМАЦИЙ ---
const ease = [0.25, 0.1, 0.25, 1];

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

// --- КОМПОНЕНТЫ ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const links = [
    { path: "/", label: "Главная" },
    { path: "/uslugi", label: "Услуги" },
    { path: "/portfolio", label: "Портфолио" },
    { path: "/ceny", label: "Цены" },
    { path: "/o-nas", label: "О нас" },
    { path: "/kontakty", label: "Контакты" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container navbar-content">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <Hammer size={24} color="#fff" strokeWidth={2.5} />
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
      </div>
    </motion.nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">
              <Hammer size={24} color="#fff" />
            </div>
            <span>PerfStroy</span>
          </div>
          <p>
            Профессиональный ремонт квартир в Москве. Создаём пространства для
            жизни с 2014 года.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">
              <Globe size={20} />
            </a>
            <a href="#" className="social-link">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="social-link">
              <Share2 size={20} />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Услуги</h4>
          <Link to="/uslugi">Ремонт квартир</Link>
          <Link to="/uslugi">Ремонт ванных</Link>
          <Link to="/uslugi">Дизайн интерьера</Link>
        </div>
        <div className="footer-links">
          <h4>Информация</h4>
          <Link to="/portfolio">Портфолио</Link>
          <Link to="/ceny">Цены</Link>
          <Link to="/o-nas">О компании</Link>
          <Link to="/kontakty">Контакты</Link>
        </div>
        <div className="footer-contact">
          <h4>Контакты</h4>
          <div className="contact-item">
            <Phone size={18} />
            <span>+7 (999) 123-45-67</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>info@perfstroy.ru</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>Москва, ул. Строителей, 10</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 PerfStroy. Все права защищены.</p>
      </div>
    </div>
  </footer>
);

// --- СТРАНИЦЫ ---

const Home = () => {
  const features = [
    {
      icon: <Shield size={28} />,
      title: "Гарантия 5 лет",
      desc: "На все виды работ по договору",
    },
    {
      icon: <Clock size={28} />,
      title: "Точно в срок",
      desc: "Штраф за просрочку 0.1% в день",
    },
    {
      icon: <Award size={28} />,
      title: "Опыт 10+ лет",
      desc: "Более 500 успешных проектов",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Честная цена",
      desc: "Фиксированная смета",
    },
  ];

  const services = [
    {
      title: "Косметический ремонт",
      price: "от 5 000 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600&q=80",
      desc: "Быстрое обновление интерьера",
    },
    {
      title: "Капитальный ремонт",
      price: "от 12 000 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
      desc: "Полная замена коммуникаций",
    },
    {
      title: "Дизайнерский ремонт",
      price: "от 20 000 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
      desc: "Индивидуальный дизайн-проект",
    },
  ];

  return (
    <motion.div {...pageTransition} className="page">
      <section className="hero hero-modern">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Interior"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
          >
            <span className="hero-badge">✓ Работаем с 2014 года</span>
            <h1 className="hero-title">
              Ремонт квартир
              <br />
              <span className="highlight">премиум класса</span>
            </h1>
            <p className="hero-subtitle">
              Создаём пространства для комфортной жизни. Гарантия до 5 лет.
              Рассрочка 0%.
            </p>
            <div className="hero-buttons">
              <Link to="/kontakty" className="btn btn-primary btn-large">
                Бесплатная консультация <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline btn-large">
                Наши работы
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <motion.div
            className="features-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="feature-card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="section-tag">Наши услуги</span>
            <h2 className="section-title">Выберите подходящий вариант</h2>
          </motion.div>
          <motion.div
            className="services-cards"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="service-card-modern"
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-overlay">
                    <Link to="/kontakty" className="btn btn-white">
                      Рассчитать
                    </Link>
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <div className="service-price">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-section-modern">
        <div className="cta-bg">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Construction"
            loading="lazy"
          />
          <div className="cta-overlay"></div>
        </div>
        <div className="container cta-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2>Готовы начать ремонт?</h2>
            <p>
              Получите бесплатную консультацию и расчет стоимости уже сегодня
            </p>
            <div className="cta-buttons">
              <Link to="/kontakty" className="btn btn-white btn-large">
                Оставить заявку
              </Link>
              <a
                href="tel:+79991234567"
                className="btn btn-outline-white btn-large"
              >
                <Phone size={18} /> Позвонить
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Косметический ремонт",
      price: "от 5 000 ₽/м²",
      time: "2-4 недели",
      image:
        "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
      features: [
        "Покраска стен",
        "Замена покрытий",
        "Замена дверей",
        "Установка светильников",
      ],
    },
    {
      title: "Капитальный ремонт",
      price: "от 12 000 ₽/м²",
      time: "2-4 месяца",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      features: [
        "Замена электрики",
        "Замена сантехники",
        "Выравнивание стен",
        "Укладка плитки",
      ],
    },
    {
      title: "Дизайнерский ремонт",
      price: "от 20 000 ₽/м²",
      time: "3-6 месяцев",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      features: [
        "Дизайн-проект",
        "3D визуализация",
        "Авторский надзор",
        "Премиум материалы",
      ],
    },
  ];

  return (
    <motion.div {...pageTransition} className="page">
      <div className="container">
        <div className="page-header">
          <span className="section-tag">Услуги</span>
          <h1 className="page-title">Наши услуги</h1>
          <p className="page-subtitle">
            Профессиональный ремонт любой сложности
          </p>
        </div>
        <div className="services-detailed-grid">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="service-detailed-card-modern"
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-info-wrapper">
                <h3>{service.title}</h3>
                <div className="service-meta-modern">
                  <div className="meta-item">
                    <TrendingUp size={18} />
                    <span>{service.price}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={18} />
                    <span>{service.time}</span>
                  </div>
                </div>
                <ul className="service-features-modern">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/kontakty" className="btn btn-primary">
                  Рассчитать стоимость
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      title: "Современная квартира",
      area: "85 м²",
      time: "3 месяца",
      budget: "1.2 млн ₽",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      title: "Скандинавская гостиная",
      area: "42 м²",
      time: "2 месяца",
      budget: "650 000 ₽",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    },
    {
      title: "Ванная комната премиум",
      area: "12 м²",
      time: "3 недели",
      budget: "180 000 ₽",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    },
  ];

  return (
    <motion.div {...pageTransition} className="page">
      <div className="container">
        <div className="page-header">
          <span className="section-tag">Портфолио</span>
          <h1 className="page-title">Наши работы</h1>
          <p className="page-subtitle">Более 500 реализованных проектов</p>
        </div>
        <motion.div
          className="portfolio-full-grid-modern"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={staggerChild}
              className="portfolio-full-card-modern"
            >
              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="portfolio-overlay-modern">
                  <span className="badge badge-primary">{project.area}</span>
                </div>
              </div>
              <div className="portfolio-info-wrapper">
                <h3>{project.title}</h3>
                <div className="portfolio-meta-modern">
                  <span>
                    <Clock size={14} /> {project.time}
                  </span>
                  <span>
                    <TrendingUp size={14} /> {project.budget}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Prices = () => (
  <motion.div {...pageTransition} className="page">
    <div className="container">
      <div className="page-header">
        <span className="section-tag">Цены</span>
        <h1 className="page-title">Стоимость ремонта</h1>
        <p className="page-subtitle">Прозрачное ценообразование</p>
      </div>
      <motion.div
        className="pricing-grid-modern"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={staggerChild} className="pricing-card-modern">
          <div className="pricing-header">
            <h3>Эконом</h3>
            <div className="pricing-price">от 5 000 ₽/м²</div>
          </div>
          <ul className="pricing-features">
            <li>
              <CheckCircle size={18} /> Демонтаж старых покрытий
            </li>
            <li>
              <CheckCircle size={18} /> Покраска стен и потолков
            </li>
            <li>
              <CheckCircle size={18} /> Укладка ламината
            </li>
          </ul>
          <Link to="/kontakty" className="btn btn-outline">
            Выбрать
          </Link>
        </motion.div>
        <motion.div
          variants={staggerChild}
          className="pricing-card-modern featured"
        >
          <div className="pricing-badge">Популярный</div>
          <div className="pricing-header">
            <h3>Комфорт</h3>
            <div className="pricing-price">от 12 000 ₽/м²</div>
          </div>
          <ul className="pricing-features">
            <li>
              <CheckCircle size={18} /> Всё из тарифа "Эконом"
            </li>
            <li>
              <CheckCircle size={18} /> Замена электрики
            </li>
            <li>
              <CheckCircle size={18} /> Укладка плитки
            </li>
          </ul>
          <Link to="/kontakty" className="btn btn-primary">
            Выбрать
          </Link>
        </motion.div>
        <motion.div variants={staggerChild} className="pricing-card-modern">
          <div className="pricing-header">
            <h3>Премиум</h3>
            <div className="pricing-price">от 20 000 ₽/м²</div>
          </div>
          <ul className="pricing-features">
            <li>
              <CheckCircle size={18} /> Всё из тарифа "Комфорт"
            </li>
            <li>
              <CheckCircle size={18} /> Дизайн-проект
            </li>
            <li>
              <CheckCircle size={18} /> Авторский надзор
            </li>
          </ul>
          <Link to="/kontakty" className="btn btn-outline">
            Выбрать
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);

const About = () => (
  <motion.div {...pageTransition} className="page">
    <div className="container">
      <div className="page-header">
        <span className="section-tag">О компании</span>
        <h1 className="page-title">PerfStroy</h1>
        <p className="page-subtitle">Работаем с 2014 года</p>
      </div>
      <div className="about-content-modern">
        <motion.div
          className="about-text-modern"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <h3>Мы создаем пространства для комфортной жизни</h3>
          <p>
            PerfStroy — это команда профессионалов с многолетним опытом. За 10
            лет мы реализовали более 500 проектов.
          </p>
          <div className="about-features-modern">
            <div className="about-feature">
              <Wrench size={24} />
              <div>
                <h4>Собственные бригады</h4>
                <p>Все мастера в штате</p>
              </div>
            </div>
            <div className="about-feature">
              <Shield size={24} />
              <div>
                <h4>Гарантия качества</h4>
                <p>До 5 лет по договору</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="about-image-modern"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
            alt="Наша команда"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    objectType: "Квартира",
    area: "",
    workType: [],
    budget: "До 1 млн",
    comment: "",
  });

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      workType: checked
        ? [...prev.workType, value]
        : prev.workType.filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 24 часов.",
    );
  };

  return (
    <motion.div {...pageTransition} className="page">
      <div className="container contact-container-modern">
        <motion.div
          className="contact-info-modern"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <span className="section-tag">Контакты</span>
          <h2>Обсудим ваш проект</h2>
          <p>Заполните анкету, и мы подготовим бесплатную консультацию.</p>
          <div className="contact-details-modern">
            <div className="contact-item-modern">
              <div className="contact-icon-modern">
                <Phone size={24} />
              </div>
              <div>
                <div className="contact-label">Телефон</div>
                <div className="contact-value">+7 (999) 123-45-67</div>
              </div>
            </div>
            <div className="contact-item-modern">
              <div className="contact-icon-modern">
                <Mail size={24} />
              </div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">info@perfstroy.ru</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form-modern"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <h3>Анкета клиента</h3>
          <div className="form-row">
            <div className="input-group">
              <label>Ваше имя *</label>
              <input
                required
                className="input"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="input-group">
              <label>Телефон *</label>
              <input
                required
                className="input"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <label>Тип объекта *</label>
              <select
                required
                className="select"
                value={formData.objectType}
                onChange={(e) =>
                  setFormData({ ...formData, objectType: e.target.value })
                }
              >
                <option>Квартира</option>
                <option>Загородный дом</option>
                <option>Офис</option>
              </select>
            </div>
            <div className="input-group">
              <label>Площадь (м²)</label>
              <input
                type="number"
                className="input"
                placeholder="85"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
              />
            </div>
          </div>
          <div className="input-group">
            <label>Виды работ</label>
            <div className="checkbox-group">
              {[
                "Дизайн-проект",
                "Черновая отделка",
                "Чистовая отделка",
                "Под ключ",
              ].map((type) => (
                <label key={type} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={type}
                    checked={formData.workType.includes(type)}
                    onChange={handleCheckbox}
                  />
                  <span className="custom-checkbox">
                    <CheckSquare size={16} />
                  </span>
                  {type}
                </label>
              ))}
            </div>
          </div>
          <div className="input-group">
            <label>Комментарий</label>
            <textarea
              className="textarea"
              placeholder="Опишите задачу..."
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Отправить заявку
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

// --- ГЛАВНЫЙ КОМПОНЕНТ ---
function App() {
  return (
    // HashRouter решает все проблемы с путями на GitHub Pages
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <main className="main-content">
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
