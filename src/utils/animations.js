export const easeOutExpo = [0.16, 1, 0.3, 1];
export const easeInOutExpo = [0.87, 0, 0.13, 1];
export const easeOutQuart = [0.25, 1, 0.5, 1];

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: easeInOutExpo },
  },
};

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
};

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOutExpo },
  },
};
