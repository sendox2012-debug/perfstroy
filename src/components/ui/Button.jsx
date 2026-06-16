import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { easeOutExpo } from "../../utils/animations";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  as: Component = "button",
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
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: easeOutExpo }}
      style={{ display: "inline-flex" }}
    >
      <Component
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidthClass} ${className}`}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  );
};

export const LinkButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  to,
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
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: easeOutExpo }}
      style={{ display: "inline-flex" }}
    >
      <Link
        to={to}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidthClass} ${className}`}
        {...props}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export const ExternalLinkButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  href,
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
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: easeOutExpo }}
      style={{ display: "inline-flex" }}
    >
      <a
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidthClass} ${className}`}
        {...props}
      >
        {children}
      </a>
    </motion.div>
  );
};
