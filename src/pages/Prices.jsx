import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { LinkButton } from "../components/ui/Button";
import {
  staggerContainer,
  staggerChild,
  easeOutExpo,
} from "../utils/animations";

export default function Prices() {
  const sections = [
    {
      title: "Кровельные работы",
      items: [
        {
          name: "Металлочерепица",
          price: "800",
          unit: "₽/м²",
          features: ["Обрешетка", "Гидроизоляция", "Монтаж", "Доборы"],
          featured: false,
        },
        {
          name: "Мягкая кровля",
          price: "1 500",
          unit: "₽/м²",
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
          price: "600",
          unit: "₽/м²",
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
          price: "1 500",
          unit: "₽/м²",
          features: ["Обрешетка", "Утепление", "Монтаж", "Отливы"],
          featured: false,
        },
        {
          name: "Штукатурка",
          price: "2 000",
          unit: "₽/м²",
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
          price: "15 000",
          unit: "₽/м²",
          features: ["Фундамент", "Каркас", "Кровля", "Отделка"],
          featured: false,
        },
        {
          name: "Веранды",
          price: "12 000",
          unit: "₽/м²",
          features: ["Фундамент", "Каркас", "Остекление", "Отделка"],
          featured: false,
        },
        {
          name: "Беседки",
          price: "50 000",
          unit: "₽",
          features: ["Фундамент", "Каркас", "Кровля", "Пол"],
          featured: false,
        },
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
      className="pricing-section"
    >
      <div className="container">
        <SectionHeader
          tag="Цены"
          title="Стоимость работ"
          subtitle="Прозрачное ценообразование без скрытых платежей"
        />

        {sections.map((section, sIdx) => (
          <div key={sIdx} className="pricing-category">
            <h3 className="pricing-category-title">{section.title}</h3>
            <motion.div
              className="pricing-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={staggerChild}
                  className={`pricing-card ${item.featured ? "featured" : ""}`}
                >
                  {item.featured && (
                    <div className="pricing-badge">Популярно</div>
                  )}
                  <div className="pricing-header">
                    <h3>{item.name}</h3>
                    <div className="pricing-price">
                      от {item.price}{" "}
                      <span className="pricing-price-unit">{item.unit}</span>
                    </div>
                  </div>
                  <ul className="pricing-features">
                    {item.features.map((f, i) => (
                      <li key={i}>
                        <CheckCircle size={16} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <LinkButton
                    to="/kontakty"
                    variant={item.featured ? "primary" : "outline"}
                    fullWidth
                  >
                    Заказать
                  </LinkButton>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
