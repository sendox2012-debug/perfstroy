import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  Clock,
  Award,
  TrendingUp,
  ArrowRight,
  Phone,
  Grid3X3,
} from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { LinkButton } from "../components/ui/Button";
import { AnimatedCounter } from "../components/AnimatedCounter";
import {
  staggerContainer,
  staggerChild,
  easeOutExpo,
} from "../utils/animations";
import { portfolioProjects } from "../data/portfolio";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const features = [
    {
      icon: <Shield size={26} />,
      title: "Гарантия 10 лет",
      desc: "На все виды работ по договору",
    },
    {
      icon: <Clock size={26} />,
      title: "Точно в срок",
      desc: "Штраф за просрочку 0.1% в день",
    },
    {
      icon: <Award size={26} />,
      title: "Опыт 10+ лет",
      desc: "Более 300 успешных проектов",
    },
    {
      icon: <TrendingUp size={26} />,
      title: "Честная цена",
      desc: "Фиксированная смета без скрытых платежей",
    },
  ];

  const services = [
    {
      title: "Кровельные работы",
      price: "от 800 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1632759145351-1cfb8038c567?w=800&q=80",
      desc: "Монтаж и ремонт кровли любой сложности",
    },
    {
      title: "Фасадные работы",
      price: "от 1 500 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
      desc: "Отделка фасадов сайдингом и штукатуркой",
    },
    {
      title: "Пристройки и веранды",
      price: "от 15 000 ₽/м²",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      desc: "Строительство под ключ",
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.5 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
      }}
      className="page"
    >
      <section ref={heroRef} className="hero">
        <motion.div className="hero-bg" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
            alt="Construction"
            loading="eager"
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
              transition={{ duration: 0.8, delay: 0.6, ease: easeOutExpo }}
            >
              Строительство
              <br />
              <span className="gradient-text">вашего дома</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: easeOutExpo }}
            >
              Кровельные работы, фасадная отделка, строительство веранд, террас
              и беседок. Гарантия до 10 лет.
            </motion.p>
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1, ease: easeOutExpo }}
            >
              <LinkButton to="/kontakty" variant="primary" size="large">
                Бесплатный замер <ArrowRight size={18} />
              </LinkButton>
              <LinkButton to="/uslugi" variant="outline" size="large">
                Наши услуги
              </LinkButton>
            </motion.div>
            <motion.div
              className="hero-stats"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div className="hero-stat" variants={staggerChild}>
                <span className="hero-stat-number">
                  <AnimatedCounter value="300" suffix="+" />
                </span>
                <span className="hero-stat-label">Выполненных объектов</span>
              </motion.div>
              <motion.div className="hero-stat" variants={staggerChild}>
                <span className="hero-stat-number">
                  <AnimatedCounter value="10" />
                </span>
                <span className="hero-stat-label">Лет опыта</span>
              </motion.div>
              <motion.div className="hero-stat" variants={staggerChild}>
                <span className="hero-stat-number">
                  <AnimatedCounter value="10" />
                </span>
                <span className="hero-stat-label">Лет гарантии</span>
              </motion.div>
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
          <SectionHeader
            tag="Наши услуги"
            title="Комплексное обустройство дома"
            subtitle="От кровли до беседки — всё под ключ"
          />
          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={staggerChild}
                className="service-card"
              >
                <div className="service-image">
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className="service-overlay">
                    <LinkButton to="/kontakty" variant="primary">
                      Рассчитать
                    </LinkButton>
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

      <section
        className="section"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="container">
          <SectionHeader
            tag="Портфолио"
            title="Наши последние работы"
            subtitle="Реальные проекты, которыми мы гордимся"
          />
          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {portfolioProjects.slice(0, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                variants={staggerChild}
                className="service-card"
              >
                <div className="service-image">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
                <div className="service-content">
                  <h3>{project.title}</h3>
                  <LinkButton to="/portfolio" variant="ghost" fullWidth>
                    Смотреть все работы <Grid3X3 size={16} />
                  </LinkButton>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
