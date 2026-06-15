import { motion } from "framer-motion";
import { Wrench, Shield, Truck } from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { AnimatedCounter } from "../components/AnimatedCounter";
import {
  staggerContainer,
  staggerChild,
  easeOutExpo,
} from "../utils/animations";

export default function About() {
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
      <div className="section" style={{ paddingTop: "80px" }}>
        <div className="container">
          <SectionHeader
            tag="О компании"
            title="PerfStroy"
            subtitle="Работаем с 2014 года"
          />

          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
            >
              <h3>Кровля, фасады и строительство под ключ</h3>
              <p>
                PerfStroy — специализированная компания по кровельным и фасадным
                работам, а также строительству пристроек, веранд, террас и
                беседок.
              </p>
              <p>
                Работаем с современными материалами. Гарантия на все виды работ
                до 10 лет.
              </p>
              <div className="about-features">
                <motion.div
                  className="about-feature"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4, ease: easeOutExpo }}
                >
                  <div className="about-feature-icon">
                    <Wrench size={22} />
                  </div>
                  <div>
                    <h4>Собственные бригады</h4>
                    <p>Опытные кровельщики и строители</p>
                  </div>
                </motion.div>
                <motion.div
                  className="about-feature"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4, ease: easeOutExpo }}
                >
                  <div className="about-feature-icon">
                    <Shield size={22} />
                  </div>
                  <div>
                    <h4>Гарантия до 10 лет</h4>
                    <p>На кровлю и фасадные работы</p>
                  </div>
                </motion.div>
                <motion.div
                  className="about-feature"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.4, ease: easeOutExpo }}
                >
                  <div className="about-feature-icon">
                    <Truck size={22} />
                  </div>
                  <div>
                    <h4>Свои материалы</h4>
                    <p>Закупаем у производителей</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeOutExpo }}
            >
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Команда"
                loading="lazy"
              />
            </motion.div>
          </div>

          <motion.div
            className="about-stats"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={staggerChild} className="stat-card">
              <span className="stat-number">
                <AnimatedCounter value="300" suffix="+" />
              </span>
              <span className="stat-label">Объектов</span>
            </motion.div>
            <motion.div variants={staggerChild} className="stat-card">
              <span className="stat-number">
                <AnimatedCounter value="10" />
              </span>
              <span className="stat-label">Лет опыта</span>
            </motion.div>
            <motion.div variants={staggerChild} className="stat-card">
              <span className="stat-number">
                <AnimatedCounter value="10" />
              </span>
              <span className="stat-label">Лет гарантии</span>
            </motion.div>
            <motion.div variants={staggerChild} className="stat-card">
              <span className="stat-number">
                <AnimatedCounter value="98" suffix="%" />
              </span>
              <span className="stat-label">Довольных клиентов</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
