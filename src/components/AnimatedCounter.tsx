import React, { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

export const AnimatedCounter = ({ end, duration = 150, delay = 500 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timeoutId = setTimeout(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / duration, 1);
          
          // More aggressive random fluctuation during animation
          const randomFactor = percentage < 1 ? (Math.random() * end * 1.5) : 0;
          setCount(Math.floor(end * percentage + randomFactor));

          if (percentage < 1) {
            animationFrame = requestAnimationFrame(animate);
          } else {
            setCount(end); // Ensure we end on exact number
          }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [end, duration, delay, isInView]);

  return <span ref={ref}>${count}</span>;
};