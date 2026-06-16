import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { easeOutExpo } from "../utils/animations";
import { useEffect } from "react";

export const GalleryModal = ({ project, onClose }) => {
  // Блокируем скролл body при открытом модалке
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Закрытие по Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="gallery-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-title"
      >
        <motion.div
          className="gallery-modal-content"
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="gallery-modal-header">
            <h3 className="gallery-modal-title" id="gallery-title">
              {project.title}
            </h3>
            <button
              className="gallery-modal-close"
              onClick={onClose}
              aria-label="Закрыть галерею"
            >
              <X size={20} />
            </button>
          </div>
          <div className="gallery-modal-images">
            {project.images.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`${project.title} - фото ${idx + 1}`}
                loading="lazy"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                onError={(e) => {
                  e.target.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EФото не найдено%3C/text%3E%3C/svg%3E';
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
