import { useState, useEffect, useRef } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import {
  Mountain,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  MessageCircle,
  Share2,
  Truck,
  Wrench,
} from "lucide-react";
import "./App.css";

// === ПРЕМИУМ АНИМАЦИИ ===
const easeOut = [0.22, 1, 0.36, 1];
const easeInOut = [0.65, 0, 0.35, 1];

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3, ease: easeInOut } },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

// === СЧЁТЧИК ЧИСЕЛ ===
const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing функция
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

// === NAVBAR ===
const Navbar = ({ menuOpen, setMenuOpen }) => {
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
    { path: "/ceny", label: "Цены" },
    { path: "/o-nas", label: "О нас" },
    { path: "/kontakty", label: "Контакты" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
        className={`navbar ${scrolled ? "scrolled" : ""}`}
      >
        <div className="navbar-content">
          <Link to="/" className="logo">
            <div className="logo-icon">
              <Mountain size={20} strokeWidth={2.5} />
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
            <Phone size={14} />
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
              <p>
                <Mail size={16} /> info@perfstroy.ru
              </p>
              <p>
                <MapPin size={16} /> Москва и МО
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// === FOOTER ===
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo">
            <div className="logo-icon">
              <Mountain size={20} />
            </div>
            <span>PerfStroy</span>
          </div>
          <p>
            Кровельные работы, фасады и строительство пристроек. Работаем с 2014
            года.
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
          <Link to="/uslugi">Кровля</Link>
          <Link to="/uslugi">Фасады</Link>
          <Link to="/uslugi">Пристройки</Link>
          <Link to="/uslugi">Беседки</Link>
        </div>
        <div className="footer-links">
          <h4>Компания</h4>
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

// === HOME ===
const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const features = [
    {
      icon: <Shield size={24} />,
      title: "Гарантия 10 лет",
      desc: "На кровлю и фасадные работы",
    },
    {
      icon: <Clock size={24} />,
      title: "Точно в срок",
      desc: "Штраф за просрочку 0.1% в день",
    },
    {
      icon: <Award size={24} />,
      title: "Опыт 10+ лет",
      desc: "Более 300 выполненных объектов",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Честная цена",
      desc: "Фиксированная смета",
    },
  ];

  const services = [
    {
      title: "Кровельные работы",
      price: "от 800 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1632759145351-1cfb8038c567?w=600&q=80",
      desc: "Монтаж и ремонт кровли",
    },
    {
      title: "Фасадные работы",
      price: "от 1 500 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
      desc: "Отделка сайдингом, штукатуркой",
    },
    {
      title: "Пристройки и веранды",
      price: "от 15 000 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      desc: "Строительство под ключ",
    },
  ];

  return (
    <motion.div {...pageTransition} className="page">
      <section ref={heroRef} className="hero-modern">
        <motion.div className="hero-bg" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1632759145351-1cfb8038c567?w=1920&q=80"
            alt="Roofing"
          />
          <div className="hero-overlay"></div>
        </motion.div>
        <motion.div
          className="container hero-content"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              ✓ Кровля • Фасады • Пристройки
            </motion.span>
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
            >
              Строительство
              <br />
              <span className="highlight">вашего дома</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: easeOut }}
            >
              Кровельные работы, фасадная отделка, строительство веранд, террас
              и беседок. Гарантия до 10 лет.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: easeOut }}
            >
              <Link to="/kontakty" className="btn btn-primary btn-large">
                Бесплатный замер
                <ArrowRight size={18} />
              </Link>
              <Link to="/uslugi" className="btn btn-outline btn-large">
                Наши услуги
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
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

      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <span className="section-tag">Услуги</span>
            <h2 className="section-title">Комплексное обустройство дома</h2>
            <p className="section-subtitle">
              От кровли до беседки — всё под ключ
            </p>
          </motion.div>
          <motion.div
            className="services-cards"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
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
                    <Link to="/kontakty" className="btn btn-primary">
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
        <motion.div
          className="cta-bg"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: easeOut }}
        >
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
            alt="Construction"
            loading="lazy"
          />
          <div className="cta-overlay"></div>
        </motion.div>
        <div className="container cta-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <h2>Готовы начать?</h2>
            <p>
              Бесплатный выезд замерщика и расчет стоимости в течение 24 часов
            </p>
            <div className="cta-buttons">
              <Link to="/kontakty" className="btn btn-primary btn-large">
                Оставить заявку
              </Link>
              <a href="tel:+79991234567" className="btn btn-outline btn-large">
                <Phone size={16} /> Позвонить
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

// === SERVICES ===
const Services = () => {
  const services = [
    {
      title: "Кровельные работы",
      price: "от 800 ₽/м²",
      time: "от 3 дней",
      image:
        "https://images.unsplash.com/photo-1632759145351-1cfb8038c567?w=800&q=80",
      features: [
        "Металлочерепица",
        "Мягкая кровля",
        "Профнастил",
        "Ремонт кровли",
        "Водостоки",
        "Утепление",
      ],
    },
    {
      title: "Фасадные работы",
      price: "от 1 500 ₽/м²",
      time: "от 5 дней",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      features: [
        "Сайдинг",
        "Штукатурка",
        "Утепление",
        "Блок-хаус",
        "Цокольный сайдинг",
        "Покраска",
      ],
    },
    {
      title: "Пристройки",
      price: "от 15 000 ₽/м²",
      time: "от 2 недель",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      features: [
        "Каркасные",
        "Из бруса",
        "Из пеноблока",
        "Фундамент",
        "Крыша",
        "Под ключ",
      ],
    },
    {
      title: "Веранды",
      price: "от 12 000 ₽/м²",
      time: "от 10 дней",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
      features: [
        "Открытые",
        "Закрытые",
        "С остеклением",
        "Теплые",
        "Поликарбонат",
        "Деревянные",
      ],
    },
    {
      title: "Террасы",
      price: "от 8 000 ₽/м²",
      time: "от 7 дней",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      features: [
        "Деревянные",
        "Из ДПК",
        "На сваях",
        "Террасная доска",
        "Перила",
        "Крытые",
      ],
    },
    {
      title: "Беседки",
      price: "от 50 000 ₽",
      time: "от 5 дней",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      features: [
        "Деревянные",
        "Металлические",
        "С мангалом",
        "Шестигранные",
        "Прямоугольные",
        "Под ключ",
      ],
    },
  ];

  return (
    <motion.div {...pageTransition} className="page">
      <div className="container">
        <div className="page-header">
          <motion.span className="section-tag" {...fadeUp}>
            Услуги
          </motion.span>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          >
            Наши услуги
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Кровля, фасады и строительство
          </motion.p>
        </div>
        <div className="services-detailed-grid">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: easeOut, delay: idx * 0.05 }}
              className="service-detailed-card-modern"
            >
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-info-wrapper">
                <h3>{service.title}</h3>
                <div className="service-meta-modern">
                  <div className="meta-item">
                    <TrendingUp size={16} />
                    <span>{service.price}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{service.time}</span>
                  </div>
                </div>
                <ul className="service-features-modern">
                  {service.features.map((f, i) => (
                    <li key={i}>
                      <CheckCircle size={16} />
                      <span>{f}</span>
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

// === PRICES ===
const Prices = () => {
  const sections = [
    {
      title: "Кровельные работы",
      items: [
        {
          name: "Металлочерепица",
          price: "от 800 ₽/м²",
          features: ["Обрешетка", "Гидроизоляция", "Монтаж", "Доборы"],
          featured: false,
        },
        {
          name: "Мягкая кровля",
          price: "от 1 200 ₽/м²",
          features: [
            "Сплошная обрешетка",
            "Подкладочный ковер",
            "Монтаж",
            "Ендовы",
          ],
          featured: true,
        },
        {
          name: "Профнастил",
          price: "от 600 ₽/м²",
          features: ["Обрешетка", "Гидроизоляция", "Укладка", "Крепеж"],
          featured: false,
        },
      ],
    },
    {
      title: "Фасадные работы",
      items: [
        {
          name: "Сайдинг",
          price: "от 1 500 ₽/м²",
          features: ["Обрешетка", "Утепление", "Монтаж", "Отливы"],
          featured: false,
        },
        {
          name: "Штукатурка",
          price: "от 2 000 ₽/м²",
          features: ["Грунтовка", "Утепление", "Армирование", "Декор"],
          featured: true,
        },
      ],
    },
    {
      title: "Строительство",
      items: [
        {
          name: "Пристройки",
          price: "от 15 000 ₽/м²",
          features: ["Фундамент", "Каркас", "Кровля", "Отделка"],
          featured: false,
        },
        {
          name: "Веранды",
          price: "от 12 000 ₽/м²",
          features: ["Фундамент", "Каркас", "Остекление", "Отделка"],
          featured: false,
        },
        {
          name: "Беседки",
          price: "от 50 000 ₽",
          features: ["Фундамент", "Каркас", "Кровля", "Пол"],
          featured: false,
        },
      ],
    },
  ];

  return (
    <motion.div {...pageTransition} className="page">
      <div className="container">
        <div className="page-header">
          <motion.span className="section-tag" {...fadeUp}>
            Цены
          </motion.span>
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          >
            Стоимость работ
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Прозрачное ценообразование
          </motion.p>
        </div>

        {sections.map((section, sIdx) => (
          <div key={sIdx} style={{ marginBottom: "80px" }}>
            <motion.h2
              className="pricing-section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              {section.title}
            </motion.h2>
            <motion.div
              className="pricing-grid-modern"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerChild}
                  className={`pricing-card-modern ${item.featured ? "featured" : ""}`}
                >
                  {item.featured && (
                    <div className="pricing-badge">Популярно</div>
                  )}
                  <div className="pricing-header">
                    <h3>{item.name}</h3>
                    <div className="pricing-price">{item.price}</div>
                  </div>
                  <ul className="pricing-features">
                    {item.features.map((f, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/kontakty"
                    className={`btn ${item.featured ? "btn-primary" : "btn-outline"}`}
                  >
                    Заказать
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// === ABOUT ===
const About = () => (
  <motion.div {...pageTransition} className="page">
    <div className="container">
      <div className="page-header">
        <motion.span className="section-tag" {...fadeUp}>
          О компании
        </motion.span>
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
        >
          PerfStroy
        </motion.h1>
        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Работаем с 2014 года
        </motion.p>
      </div>
      <div className="about-content-modern">
        <motion.div
          className="about-text-modern"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <h3>Кровля, фасады и строительство</h3>
          <p>
            PerfStroy — специализированная компания по кровельным и фасадным
            работам, а также строительству пристроек, веранд, террас и беседок.
          </p>
          <p>
            Работаем с современными материалами. Гарантия на все виды работ до
            10 лет.
          </p>
          <div className="about-features-modern">
            <motion.div
              className="about-feature"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <Wrench size={22} />
              <div>
                <h4>Собственные бригады</h4>
                <p>Опытные кровельщики и строители</p>
              </div>
            </motion.div>
            <motion.div
              className="about-feature"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <Shield size={22} />
              <div>
                <h4>Гарантия до 10 лет</h4>
                <p>На кровлю и фасадные работы</p>
              </div>
            </motion.div>
            <motion.div
              className="about-feature"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.4, ease: easeOut }}
            >
              <Truck size={22} />
              <div>
                <h4>Свои материалы</h4>
                <p>Закупаем у производителей</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="about-image-modern"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
            alt="Команда"
            loading="lazy"
          />
        </motion.div>
      </div>
      <motion.div
        className="about-stats-modern"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.div variants={staggerChild} className="stat-card-modern">
          <span className="stat-number-modern">
            <AnimatedCounter value="300" suffix="+" />
          </span>
          <span className="stat-label-modern">Объектов</span>
        </motion.div>
        <motion.div variants={staggerChild} className="stat-card-modern">
          <span className="stat-number-modern">
            <AnimatedCounter value="10" />
          </span>
          <span className="stat-label-modern">Лет опыта</span>
        </motion.div>
        <motion.div variants={staggerChild} className="stat-card-modern">
          <span className="stat-number-modern">
            <AnimatedCounter value="10" />
          </span>
          <span className="stat-label-modern">Лет гарантии</span>
        </motion.div>
        <motion.div variants={staggerChild} className="stat-card-modern">
          <span className="stat-number-modern">
            <AnimatedCounter value="98" suffix="%" />
          </span>
          <span className="stat-label-modern">Довольных клиентов</span>
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);

// === CONTACT ===
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Кровельные работы",
    area: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Спасибо! Мы свяжемся с вами в течение 24 часов.");
  };

  return (
    <motion.div {...pageTransition} className="page">
      <div className="container contact-container-modern">
        <motion.div
          className="contact-info-modern"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <motion.span className="section-tag" {...fadeUp}>
            Контакты
          </motion.span>
          <h2>Бесплатный замер</h2>
          <p>Оставьте заявку, и наш специалист приедет в течение 24 часов.</p>
          <motion.div
            className="contact-details-modern"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: <Phone size={20} />,
                label: "Телефон",
                value: "+7 (999) 123-45-67",
              },
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "info@perfstroy.ru",
              },
              {
                icon: <MapPin size={20} />,
                label: "Работаем",
                value: "Москва и МО",
              },
              {
                icon: <Clock size={20} />,
                label: "Режим",
                value: "Пн-Пт: 9:00 - 20:00",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="contact-item-modern"
              >
                <div className="contact-icon-modern">{item.icon}</div>
                <div>
                  <div className="contact-label">{item.label}</div>
                  <div className="contact-value">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="contact-advantages-modern"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>Почему мы?</h3>
            <ul>
              <li>
                <CheckCircle size={16} /> Бесплатный выезд замерщика
              </li>
              <li>
                <CheckCircle size={16} /> Точный расчет в день замера
              </li>
              <li>
                <CheckCircle size={16} /> Помощь в выборе материалов
              </li>
              <li>
                <CheckCircle size={16} /> Рассрочка без процентов
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.form
          className="contact-form-modern"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
        >
          <h3>Заявка на расчет</h3>
          <div className="form-row">
            <div className="input-group">
              <label>Имя *</label>
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
              <label>Тип работ *</label>
              <select
                required
                className="select"
                value={formData.serviceType}
                onChange={(e) =>
                  setFormData({ ...formData, serviceType: e.target.value })
                }
              >
                <option>Кровельные работы</option>
                <option>Фасадные работы</option>
                <option>Пристройка</option>
                <option>Веранда</option>
                <option>Терраса</option>
                <option>Беседка</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <label>Площадь / размер</label>
            <input
              className="input"
              placeholder="100 м² или 3x4 м"
              value={formData.area}
              onChange={(e) =>
                setFormData({ ...formData, area: e.target.value })
              }
            />
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
          <motion.button
            type="submit"
            className="btn btn-primary btn-full"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            Отправить заявку
          </motion.button>
          <p className="form-note">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </motion.form>
      </div>
    </motion.div>
  );
};

// === APP ===
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="app-wrapper">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home key="home" />} />
              <Route path="/uslugi" element={<Services key="services" />} />
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
