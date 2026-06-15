import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { easeOutExpo } from "../utils/animations";

export const GalleryModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="gallery-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="gallery-modal-content"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.4, ease: easeOutExpo }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="gallery-modal-header">
            <h3 className="gallery-modal-title">{project.title}</h3>
            <button className="gallery-modal-close" onClick={onClose}>
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
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
