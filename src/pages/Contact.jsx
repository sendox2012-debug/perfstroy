import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { Button } from "../components/ui/Button";
import { encodeTelegramData, TELEGRAM_BOT_URL } from "../utils/telegram";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Валидация обязательных полей
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Пожалуйста, заполните обязательные поля (Имя и Телефон)");
      setIsSubmitting(false);
      return;
    }

    // Валидация телефона
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Пожалуйста, введите корректный номер телефона");
      setIsSubmitting(false);
      return;
    }

    try {
      // Добавляем метаданные
      const dataWithMeta = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: "perfstroy.ru",
        userAgent: navigator.userAgent,
      };

      // Кодируем данные в короткую строку
      const code = await encodeTelegramData(dataWithMeta);

      if (!code) {
        throw new Error("Не удалось сформировать код заявки");
      }

      // Формируем ссылку на бота
      const telegramLink = `${TELEGRAM_BOT_URL}?start=${code}`;

      // Открываем Telegram в новой вкладке
      const newWindow = window.open(telegramLink, "_blank");

      // Если браузер заблокировал popup
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed === "undefined"
      ) {
        // Показываем ссылку вручную
        const confirmed = confirm(
          "Браузер заблокировал открытие Telegram.\n\n" +
            'Нажмите "OK", чтобы скопировать ссылку в буфер обмена.',
        );

        if (confirmed) {
          await navigator.clipboard.writeText(telegramLink);
          alert(
            "✅ Ссылка скопирована!\n\nОткройте Telegram и вставьте ссылку в любой чат, затем перейдите по ней.",
          );
        }
      }

      // Успешное уведомление
      setTimeout(() => {
        alert(
          "✅ Заявка сформирована!\n\n" +
            "Откройте Telegram и отправьте боту команду /start.\n" +
            "Заявка автоматически будет отправлена нашим менеджерам.",
        );
        setIsSubmitting(false);

        // Очищаем форму
        setFormData({
          name: "",
          phone: "",
          email: "",
          serviceType: "Кровельные работы",
          area: "",
          comment: "",
        });
      }, 500);
    } catch (error) {
      console.error("Ошибка отправки заявки:", error);
      alert(
        "❌ Произошла ошибка при формировании заявки.\n\nПопробуйте ещё раз или свяжитесь с нами по телефону.",
      );
      setIsSubmitting(false);
    }
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
              Заполните форму, и вы автоматически перейдёте в наш Telegram-бот
              для подтверждения заявки. Это быстро и удобно!
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
                  <CheckCircle size={16} />
                  <span>Заполните форму на сайте</span>
                </li>
                <li>
                  <CheckCircle size={16} />
                  <span>Автоматически откроется Telegram-бот</span>
                </li>
                <li>
                  <CheckCircle size={16} />
                  <span>Заявка придёт нашим менеджерам</span>
                </li>
                <li>
                  <CheckCircle size={16} />
                  <span>Мы свяжемся с вами в течение 24 часов</span>
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
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Телефон *</label>
                <input
                  id="phone"
                  required
                  className="input"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="input"
                  placeholder="example@mail.ru"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
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
                  <option>Кровельные работы</option>
                  <option>Фасадные работы</option>
                  <option>Замена покрытия</option>
                  <option>Кровля под ключ</option>
                  <option>Пристройка</option>
                  <option>Веранда</option>
                  <option>Терраса</option>
                  <option>Беседка</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="area">Площадь / размер</label>
              <input
                id="area"
                className="input"
                placeholder="100 м² или 3x4 м"
                value={formData.area}
                onChange={(e) => handleChange("area", e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            <div className="input-group">
              <label htmlFor="comment">Комментарий</label>
              <textarea
                id="comment"
                className="textarea"
                placeholder="Опишите вашу задачу, пожелания или вопросы..."
                value={formData.comment}
                onChange={(e) => handleChange("comment", e.target.value)}
                disabled={isSubmitting}
                maxLength={500}
              ></textarea>
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Формирование заявки..."
              ) : (
                <>
                  Отправить в Telegram <Send size={18} />
                </>
              )}
            </Button>

            <p className="form-note">
              Нажимая кнопку, вы перейдёте в Telegram для подтверждения заявки.
              Все данные передаются в зашифрованном виде.
            </p>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
}
