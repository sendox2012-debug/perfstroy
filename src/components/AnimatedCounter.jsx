import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export const AnimatedCounter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    let startTime;
    const duration = 2000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function (easeOutQuart)
      const eased = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(eased * numericValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericValue]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {count}
      {suffix}
    </span>
  );
};
