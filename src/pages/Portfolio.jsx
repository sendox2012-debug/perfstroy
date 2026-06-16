import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Clock, Images } from "lucide-react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { GalleryModal } from "../components/GalleryModal";
import { portfolioProjects } from "../data/portfolio";
import {
  staggerContainer,
  staggerChild,
  easeOutExpo,
} from "../utils/animations";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.6, ease: easeOutExpo }}
        className="page"
      >
        <div className="portfolio-section">
          <div className="container">
            <SectionHeader
              tag="Портфолио"
              title="Наши работы"
              subtitle="Более 300 успешно выполненных проектов"
            />

            <motion.div
              className="portfolio-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-80px" }}
            >
              {portfolioProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={staggerChild}
                  className="portfolio-card"
                >
                  <div className="portfolio-gallery">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="portfolio-gallery-main"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%231a1a1a" width="400" height="300"/%3E%3Ctext fill="%23666" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EФото не найдено%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    <div className="portfolio-gallery-count">
                      <Images size={14} />
                      <span>{project.images.length} фото</span>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-meta">
                      <div className="portfolio-meta-item">
                        <TrendingUp size={14} />
                        <span>{project.area}</span>
                      </div>
                      <div className="portfolio-meta-item">
                        <Clock size={14} />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <button
                      className="portfolio-view-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      Смотреть все фото
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <GalleryModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
