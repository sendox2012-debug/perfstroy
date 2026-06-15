import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import {
  staggerContainer,
  staggerChild,
  easeOutExpo,
} from "../utils/animations";

export default function Contact() {
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
    // Здесь можно добавить реальную отправку (например, в Telegram или на почту)
  };

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
      className="contact-section"
    >
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            <span className="section-tag">Контакты</span>
            <h2>Бесплатный замер</h2>
            <p>Оставьте заявку, и наш специалист приедет в течение 24 часов.</p>

            <motion.div
              className="contact-details"
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
                  className="contact-item"
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="contact-advantages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
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
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
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
            <Button type="submit" variant="primary" fullWidth>
              Отправить заявку
            </Button>
            <p className="form-note">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
