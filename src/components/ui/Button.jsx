import { motion } from "framer-motion";
import { easeOutExpo } from "../../utils/animations";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };
  const sizeClasses = {
    md: "",
    large: "btn-large",
  };
  const fullWidthClass = fullWidth ? "btn-full" : "";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidthClass} ${className}`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.3, ease: easeOutExpo }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const LinkButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    outline: "btn-outline",
    ghost: "btn-ghost",
  };
  const sizeClasses = {
    md: "",
    large: "btn-large",
  };
  const fullWidthClass = fullWidth ? "btn-full" : "";

  return (
    <motion.a
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidthClass} ${className}`}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: easeOutExpo }}
      {...props}
    >
      {children}
    </motion.a>
  );
};
