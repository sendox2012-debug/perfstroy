import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export const SectionHeader = ({ tag, title, subtitle, className = "" }) => {
  return (
    <motion.div
      className={`section-header ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {tag && <span className="section-tag">{tag}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </motion.div>
  );
};
