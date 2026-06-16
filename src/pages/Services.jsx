import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, CheckCircle } from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { LinkButton } from "../components/ui/Button";
import { fadeUp, easeOutExpo } from "../utils/animations";

export default function Services() {
  const services = [
    {
      title: "Кровельные работы",
      price: "от 1500 ₽/м²",
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
      price: "от 20 000 ₽/м²",
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
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={{
        initial: { opacity: 0, y: 16 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easeOutExpo },
        },
        exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
      }}
      className="page"
    >
      <div className="container">
        <div className="section-header" style={{ paddingTop: "40px" }}>
          <motion.span className="section-tag" {...fadeUp}>
            Услуги
          </motion.span>
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOutExpo }}
          >
            Наши услуги
          </motion.h1>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Кровля, фасады и строительство
          </motion.p>
        </div>
        <div
          className="services-grid"
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: idx * 0.05,
                ease: easeOutExpo,
              }}
              className="service-card"
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    marginBottom: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <TrendingUp size={14} /> {service.price}
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <Clock size={14} /> {service.time}
                  </span>
                </div>
                <ul style={{ listStyle: "none", marginBottom: "24px" }}>
                  {service.features.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "10px",
                        color: "var(--text-secondary)",
                        fontSize: "15px",
                      }}
                    >
                      <CheckCircle
                        size={16}
                        style={{
                          color: "var(--accent-primary)",
                          flexShrink: 0,
                        }}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <LinkButton to="/kontakty" variant="primary" fullWidth>
                  Рассчитать стоимость
                </LinkButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
