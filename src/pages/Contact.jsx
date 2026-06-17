import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { Button } from "../components/ui/Button";
import { createOrderLink, TELEGRAM_BOT_URL } from "../utils/telegram";
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
    serviceType: "Кровля",
    area: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const name = formData.name.trim();
    const phone = formData.phone.trim();

    if (!name || !phone) {
      alert("⚠️ Пожалуйста, введите имя и номер телефона");
      setIsSubmitting(false);
      return;
    }

    const telegramLink = createOrderLink(formData);

    if (!telegramLink) {
      alert("❌ Данные слишком длинные. Сократите имя (макс. 6 символов).");
      setIsSubmitting(false);
      return;
    }

    console.log("✅ Ссылка:", telegramLink);

    try {
      window.location.href = telegramLink;
      setTimeout(() => {
        window.open(telegramLink, "_blank");
      }, 100);
    } catch (error) {
      console.error("Ошибка:", error);
      const confirmed = confirm(
        "Не удалось открыть Telegram.\n\nНажмите OK, чтобы скопировать ссылку.",
      );
      if (confirmed) {
        navigator.clipboard.writeText(telegramLink);
        alert("✅ Ссылка скопирована!");
      }
    }

    setTimeout(() => {
      alert(
        "✅ Заявка сформирована!\n\n" +
          "Бот автоматически отправит её менеджерам.\n\n" +
          "💬 Если нужно добавить комментарий — напишите боту в Telegram.",
      );
      setIsSubmitting(false);

      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "Кровля",
        area: "",
      });
    }, 500);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.6, ease: easeOutExpo }}
      className="contact-section"
    >
      <div className="container">
        <div className="contact-grid">
          {/* Левая колонка - информация */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            <span className="section-tag">Контакты</span>
            <h2>Бесплатный замер</h2>
            <p>
              Заполните форму — вы автоматически перейдёте в наш Telegram-бот
              для отправки заявки менеджерам.
            </p>

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
                  href: "tel:+79991234567",
                },
                {
                  icon: <Mail size={20} />,
                  label: "Email",
                  value: "info@perfstroy.ru",
                  href: "mailto:info@perfstroy.ru",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Работаем",
                  value: "Москва и МО",
                  href: null,
                },
                {
                  icon: <Clock size={20} />,
                  label: "Режим",
                  value: "Пн-Пт: 9:00 - 20:00",
                  href: null,
                },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  variants={staggerChild}
                  className="contact-item"
                  href={item.href || "#"}
                  onClick={(e) => !item.href && e.preventDefault()}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div>
                    <div className="contact-label">{item.label}</div>
                    <div className="contact-value">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="contact-advantages"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
            >
              <h3>Как это работает?</h3>
              <ul>
                <li>
                  <CheckCircle size={16} />{" "}
                  <span>Заполните форму на сайте</span>
                </li>
                <li>
                  <CheckCircle size={16} /> <span>Откроется Telegram-бот</span>
                </li>
                <li>
                  <CheckCircle size={16} />{" "}
                  <span>Заявка придёт менеджерам</span>
                </li>
                <li>
                  <CheckCircle size={16} />{" "}
                  <span>Свяжемся в течение 24 часов</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Правая колонка - форма */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeOutExpo }}
          >
            <h3>Заявка на расчёт</h3>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="name">Имя *</label>
                <input
                  id="name"
                  required
                  className="input"
                  placeholder="Иван"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  maxLength={6}
                  disabled={isSubmitting}
                />
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--text-tertiary)",
                    marginTop: "4px",
                  }}
                >
                  Макс. 6 символов
                </p>
              </div>
              <div className="input-group">
                <label htmlFor="phone">Телефон *</label>
                <input
                  id="phone"
                  required
                  className="input"
                  placeholder="79991234567"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  maxLength={15}
                  disabled={isSubmitting}
                />
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--text-tertiary)",
                    marginTop: "4px",
                  }}
                >
                  Без + и пробелов
                </p>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="serviceType">Тип работ *</label>
                <select
                  id="serviceType"
                  required
                  className="select"
                  value={formData.serviceType}
                  onChange={(e) => handleChange("serviceType", e.target.value)}
                  disabled={isSubmitting}
                >
                  <option>Кровля</option>
                  <option>Фасад</option>
                  <option>Замена</option>
                  <option>Под ключ</option>
                  <option>Пристройка</option>
                  <option>Веранда</option>
                  <option>Терраса</option>
                  <option>Беседка</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="area">Площадь</label>
                <input
                  id="area"
                  className="input"
                  placeholder="100 м²"
                  value={formData.area}
                  onChange={(e) => handleChange("area", e.target.value)}
                  maxLength={8}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Формирование..."
              ) : (
                <>
                  Отправить в Telegram <MessageCircle size={18} />
                </>
              )}
            </Button>

            <p className="form-note">
              Нажимая кнопку, вы перейдёте в Telegram для отправки заявки
            </p>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
