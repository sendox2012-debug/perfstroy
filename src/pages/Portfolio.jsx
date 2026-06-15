import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Clock, Grid3X3 } from "lucide-react";
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
                    {/* ВАЖНО: Путь начинается с /, что указывает на папку public */}
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="portfolio-gallery-main"
                      loading="lazy"
                    />
                    <div className="portfolio-gallery-count">
                      <Grid3X3 size={14} />
                      {project.images.length} фото
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-meta">
                      <div className="portfolio-meta-item">
                        <TrendingUp size={14} /> {project.area}
                      </div>
                      <div className="portfolio-meta-item">
                        <Clock size={14} /> {project.duration}
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
