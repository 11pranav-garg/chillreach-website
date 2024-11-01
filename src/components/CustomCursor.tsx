import React from 'react';
import { motion } from 'framer-motion';

interface CustomCursorProps {
  position: { x: number; y: number };
}

const CustomCursor: React.FC<CustomCursorProps> = ({ position }) => {
  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "tween",
          duration: 0.05  // Reduced from 0.1
        }}
      />
      <motion.div
        className="cursor"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
        }}
        transition={{
          type: "tween",
          duration: 0.08  // Reduced from 0.15
        }}
      />
    </>
  );
};

export default CustomCursor;