import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
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
const ease = [0.25, 0.1, 0.25, 1]; // плавный cubic-bezier

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4, ease },
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25, ease } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// --- КОМПОНЕНТЫ ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Правильный scroll listener с cleanup
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Скролл наверх при смене страницы
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
          <Link to="/uslugi">Коммерция</Link>
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
          <div className="contact-item">
            <Clock size={18} />
            <span>Пн-Пт: 9:00 - 20:00</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 PerfStroy. Все права защищены.</p>
        <div className="footer-bottom-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Договор оферты</a>
        </div>
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
      desc: "Фиксированная смета без скрытых платежей",
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
      desc: "Полная замена всех коммуникаций",
    },
    {
      title: "Дизайнерский ремонт",
      price: "от 20 000 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
      desc: "Индивидуальный дизайн-проект",
    },
  ];

  const portfolio = [
    {
      title: "Современная квартира 85 м²",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      area: "85 м²",
      time: "3 месяца",
    },
    {
      title: "Скандинавская гостиная",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
      area: "42 м²",
      time: "2 месяца",
    },
    {
      title: "Ванная комната премиум",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
      area: "12 м²",
      time: "3 недели",
    },
  ];

  const testimonials = [
    {
      text: "Отличная команда! Сделали ремонт в квартире за 2.5 месяца, хотя обещали 3. Качеством очень довольны, все ровно, аккуратно.",
      author: "Александр Петров",
      project: "Ремонт 3-комнатной квартиры, 95 м²",
    },
    {
      text: "Заказывали дизайнерский ремонт. Результат превзошел ожидания! Отдельное спасибо дизайнеру за терпение и понимание.",
      author: "Елена Смирнова",
      project: "Дизайнерский ремонт, 120 м²",
    },
  ];

  return (
    <motion.div {...pageTransition} className="page">
      {/* Hero Section */}
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
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease, delay: 0.3 }}
            >
              ✓ Работаем с 2014 года
            </motion.span>
            <h1 className="hero-title">
              Ремонт квартир
              <br />
              <span className="highlight">премиум класса</span>
            </h1>
            <p className="hero-subtitle">
              Создаём пространства для комфортной жизни. Гарантия до 5 лет.
              Рассрочка 0%. Бесплатный дизайн-проект при заказе ремонта под
              ключ.
            </p>
            <div className="hero-buttons">
              <Link to="/kontakty" className="btn btn-primary btn-large">
                Бесплатная консультация
                <ArrowRight size={20} />
              </Link>
              <Link to="/portfolio" className="btn btn-outline btn-large">
                Наши работы
              </Link>
            </div>
            <motion.div
              className="hero-stats"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="stat" variants={staggerChild}>
                <span className="stat-number">500+</span>
                <span className="stat-label">Реализованных проектов</span>
              </motion.div>
              <motion.div className="stat" variants={staggerChild}>
                <span className="stat-number">10</span>
                <span className="stat-label">Лет опыта</span>
              </motion.div>
              <motion.div className="stat" variants={staggerChild}>
                <span className="stat-number">5</span>
                <span className="stat-label">Лет гарантии</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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

      {/* Services Preview */}
      <section className="section services-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="section-tag">Наши услуги</span>
            <h2 className="section-title">
              Выберите подходящий вариант ремонта
            </h2>
            <p className="section-subtitle">
              От косметического до дизайнерского ремонта любой сложности
            </p>
          </motion.div>

          <motion.div
            className="services-cards"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
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

          <motion.div
            className="text-center"
            style={{ marginTop: "48px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/uslugi" className="btn btn-outline">
              Все услуги
              <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section portfolio-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="section-tag">Портфолио</span>
            <h2 className="section-title">Последние проекты</h2>
            <p className="section-subtitle">Реальные работы нашей команды</p>
          </motion.div>

          <motion.div
            className="portfolio-grid-modern"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {portfolio.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="portfolio-card-modern"
              >
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="portfolio-info">
                    <span className="badge">{item.area}</span>
                    <span className="badge">{item.time}</span>
                  </div>
                </div>
                <h3>{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            style={{ marginTop: "48px" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/portfolio" className="btn btn-primary">
              Смотреть все работы
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease }}
          >
            <span className="section-tag">Отзывы</span>
            <h2 className="section-title">Что говорят наши клиенты</h2>
          </motion.div>

          <motion.div
            className="testimonials-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {testimonials.map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="testimonial-card"
              >
                <Quote size={32} className="quote-icon" />
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-author">
                  <div className="author-name">{item.author}</div>
                  <div className="author-project">{item.project}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
                <Phone size={18} />
                Позвонить
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
        "Покраска стен и потолков",
        "Замена напольных покрытий",
        "Замена дверей",
        "Установка светильников",
        "Монтаж плинтусов",
        "Обои или покраска",
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
        "Выравнивание стен и полов",
        "Укладка плитки",
        "Монтаж натяжных потолков",
        "Установка дверей",
      ],
    },
    {
      title: "Дизайнерский ремонт",
      price: "от 20 000 ₽/м²",
      time: "3-6 месяцев",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      features: [
        "Разработка дизайн-проекта",
        "3D визуализация",
        "Авторский надзор",
        "Премиум материалы",
        "Индивидуальные решения",
        "Комплектация объекта",
      ],
    },
    {
      title: "Ремонт ванной комнаты",
      price: "от 80 000 ₽",
      time: "2-4 недели",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
      features: [
        "Демонтаж старой отделки",
        "Замена труб",
        "Укладка плитки",
        "Установка сантехники",
        "Монтаж теплого пола",
        "Установка вентиляции",
      ],
    },
    {
      title: "Ремонт кухни",
      price: "от 100 000 ₽",
      time: "3-6 недель",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
      features: [
        "Замена коммуникаций",
        "Укладка фартука",
        "Монтаж кухонного гарнитура",
        "Подключение техники",
        "Установка освещения",
      ],
    },
    {
      title: "Дизайн интерьера",
      price: "от 2 000 ₽/м²",
      time: "2-4 недели",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
      features: [
        "Замеры помещения",
        "Планировочное решение",
        "3D визуализация",
        "Чертежи для строителей",
        "Подбор материалов",
        "Смета",
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
              viewport={{ once: true, margin: "-80px" }}
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
      title: 'Современная квартира в ЖК "Панорама"',
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
    {
      title: "Кухня-гостиная",
      area: "35 м²",
      time: "2 месяца",
      budget: "580 000 ₽",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    },
    {
      title: "Детская комната",
      area: "18 м²",
      time: "1 месяц",
      budget: "320 000 ₽",
      image:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
    },
    {
      title: "Спальня в классическом стиле",
      area: "22 м²",
      time: "6 недель",
      budget: "480 000 ₽",
      image:
        "https://images.unsplash.com/photo-1616594039964-40891a909d99?w=800&q=80",
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
        <p className="page-subtitle">
          Прозрачное ценообразование без скрытых платежей
        </p>
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
            <p>Базовый ремонт для тех, кто хочет быстро обновить интерьер</p>
          </div>
          <ul className="pricing-features">
            <li>
              <CheckCircle size={18} /> Демонтаж старых покрытий
            </li>
            <li>
              <CheckCircle size={18} /> Покраска стен и потолков
            </li>
            <li>
              <CheckCircle size={18} /> Укладка ламината/линолеума
            </li>
            <li>
              <CheckCircle size={18} /> Установка дверей
            </li>
            <li>
              <CheckCircle size={18} /> Монтаж плинтусов
            </li>
            <li>
              <CheckCircle size={18} /> Установка светильников
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
            <p>Оптимальное соотношение цены и качества</p>
          </div>
          <ul className="pricing-features">
            <li>
              <CheckCircle size={18} /> Всё из тарифа "Эконом"
            </li>
            <li>
              <CheckCircle size={18} /> Замена электрики
            </li>
            <li>
              <CheckCircle size={18} /> Замена сантехники
            </li>
            <li>
              <CheckCircle size={18} /> Выравнивание стен
            </li>
            <li>
              <CheckCircle size={18} /> Укладка плитки
            </li>
            <li>
              <CheckCircle size={18} /> Натяжные потолки
            </li>
            <li>
              <CheckCircle size={18} /> Теплый пол в ванной
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
            <p>Ремонт высокого класса с индивидуальным подходом</p>
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
            <li>
              <CheckCircle size={18} /> Премиум материалы
            </li>
            <li>
              <CheckCircle size={18} /> Сложные конструкции
            </li>
            <li>
              <CheckCircle size={18} /> Умный дом
            </li>
            <li>
              <CheckCircle size={18} /> Комплектация мебелью
            </li>
          </ul>
          <Link to="/kontakty" className="btn btn-outline">
            Выбрать
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="pricing-additional-modern"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        <h2>Дополнительные услуги</h2>
        <motion.div
          className="additional-grid-modern"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            variants={staggerChild}
            className="additional-item-modern"
          >
            <div className="additional-icon">
              <Palette size={24} />
            </div>
            <div>
              <span>Дизайн-проект</span>
              <strong>от 2 000 ₽/м²</strong>
            </div>
          </motion.div>
          <motion.div
            variants={staggerChild}
            className="additional-item-modern"
          >
            <div className="additional-icon">
              <Ruler size={24} />
            </div>
            <div>
              <span>3D визуализация</span>
              <strong>от 500 ₽/м²</strong>
            </div>
          </motion.div>
          <motion.div
            variants={staggerChild}
            className="additional-item-modern"
          >
            <div className="additional-icon">
              <Users size={24} />
            </div>
            <div>
              <span>Авторский надзор</span>
              <strong>от 30 000 ₽/мес</strong>
            </div>
          </motion.div>
          <motion.div
            variants={staggerChild}
            className="additional-item-modern"
          >
            <div className="additional-icon">
              <Truck size={24} />
            </div>
            <div>
              <span>Комплектация материалами</span>
              <strong>5% от стоимости</strong>
            </div>
          </motion.div>
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
            PerfStroy — это команда профессионалов с многолетним опытом в сфере
            ремонта и строительства. За 10 лет работы мы реализовали более 500
            проектов различной сложности.
          </p>
          <p>
            Наш подход основан на трех принципах: качество, прозрачность и
            соблюдение сроков. Мы используем только сертифицированные материалы
            от проверенных производителей.
          </p>

          <div className="about-features-modern">
            <div className="about-feature">
              <Wrench size={24} />
              <div>
                <h4>Собственные бригады</h4>
                <p>Все мастера в штате, не привлекаем случайных рабочих</p>
              </div>
            </div>
            <div className="about-feature">
              <Shield size={24} />
              <div>
                <h4>Гарантия качества</h4>
                <p>До 5 лет гарантии по договору на все виды работ</p>
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

      <motion.div
        className="about-stats-modern"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div variants={staggerChild} className="stat-card-modern">
          <span className="stat-number-modern">500+</span>
          <span className="stat-label-modern">Реализованных проектов</span>
        </motion.div>
        <motion.div variants={staggerChild} className="stat-card-modern">
          <span className="stat-number-modern">10</span>
          <span className="stat-label-modern">Лет на рынке</span>
        </motion.div>
        <motion.div variants={staggerChild} className="stat-card-modern">
          <span className="stat-number-modern">50+</span>
          <span className="stat-label-modern">Специалистов в штате</span>
        </motion.div>
        <motion.div variants={staggerChild} className="stat-card-modern">
          <span className="stat-number-modern">98%</span>
          <span className="stat-label-modern">Довольных клиентов</span>
        </motion.div>
      </motion.div>

      <motion.div
        className="about-values-modern"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
      >
        <h2>Наши ценности</h2>
        <motion.div
          className="values-grid-modern"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerChild} className="value-card-modern">
            <div className="value-icon-modern">
              <Shield size={32} />
            </div>
            <h4>Качество</h4>
            <p>Используем только проверенные материалы и технологии</p>
          </motion.div>
          <motion.div variants={staggerChild} className="value-card-modern">
            <div className="value-icon-modern">
              <Clock size={32} />
            </div>
            <h4>Пунктуальность</h4>
            <p>Сдаем объекты точно в срок, прописанный в договоре</p>
          </motion.div>
          <motion.div variants={staggerChild} className="value-card-modern">
            <div className="value-icon-modern">
              <TrendingUp size={32} />
            </div>
            <h4>Прозрачность</h4>
            <p>Фиксированная смета без скрытых платежей</p>
          </motion.div>
          <motion.div variants={staggerChild} className="value-card-modern">
            <div className="value-icon-modern">
              <Users size={32} />
            </div>
            <h4>Забота</h4>
            <p>Внимательное отношение к каждому клиенту</p>
          </motion.div>
        </motion.div>
      </motion.div>
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
          <p>
            Заполните анкету, и мы подготовим бесплатную консультацию и расчет
            стоимости в течение 24 часов.
          </p>

          <motion.div
            className="contact-details-modern"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={staggerChild} className="contact-item-modern">
              <div className="contact-icon-modern">
                <Phone size={24} />
              </div>
              <div>
                <div className="contact-label">Телефон</div>
                <div className="contact-value">+7 (999) 123-45-67</div>
              </div>
            </motion.div>
            <motion.div variants={staggerChild} className="contact-item-modern">
              <div className="contact-icon-modern">
                <Mail size={24} />
              </div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">info@perfstroy.ru</div>
              </div>
            </motion.div>
            <motion.div variants={staggerChild} className="contact-item-modern">
              <div className="contact-icon-modern">
                <MapPin size={24} />
              </div>
              <div>
                <div className="contact-label">Адрес офиса</div>
                <div className="contact-value">Москва, ул. Строителей, 10</div>
              </div>
            </motion.div>
            <motion.div variants={staggerChild} className="contact-item-modern">
              <div className="contact-icon-modern">
                <Clock size={24} />
              </div>
              <div>
                <div className="contact-label">Режим работы</div>
                <div className="contact-value">Пн-Пт: 9:00 - 20:00</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-advantages-modern"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
          >
            <h3>Почему стоит оставить заявку сейчас?</h3>
            <ul>
              <li>
                <CheckCircle size={18} /> Бесплатный выезд замерщика
              </li>
              <li>
                <CheckCircle size={18} /> Точный расчет стоимости
              </li>
              <li>
                <CheckCircle size={18} /> Помощь в выборе материалов
              </li>
              <li>
                <CheckCircle size={18} /> Рассрочка 0% на 6 месяцев
              </li>
            </ul>
          </motion.div>
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
              <label>Email</label>
              <input
                type="email"
                className="input"
                placeholder="example@mail.ru"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
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
                <option>Офис / Коммерция</option>
                <option>Другое</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Примерная площадь (м²)</label>
              <input
                type="number"
                className="input"
                placeholder="Например, 85"
                value={formData.area}
                onChange={(e) =>
                  setFormData({ ...formData, area: e.target.value })
                }
              />
            </div>
            <div className="input-group">
              <label>Планируемый бюджет</label>
              <select
                className="select"
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
              >
                <option>До 500 тыс. ₽</option>
                <option>500 тыс. - 1 млн ₽</option>
                <option>1 - 3 млн ₽</option>
                <option>3 - 5 млн ₽</option>
                <option>Более 5 млн ₽</option>
                <option>Пока не определился</option>
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Необходимые виды работ</label>
            <div className="checkbox-group">
              {[
                "Дизайн-проект",
                "Черновая отделка",
                "Чистовая отделка",
                "Ремонт под ключ",
                "Замена коммуникаций",
                "Укладка плитки",
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
            <label>Комментарий или пожелания</label>
            <textarea
              className="textarea"
              placeholder="Опишите вашу задачу..."
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Отправить заявку
          </button>
          <p className="form-note">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </motion.form>
      </div>
    </motion.div>
  );
};

// --- ГЛАВНЫЙ КОМПОНЕНТ ---

function App() {
  return (
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
