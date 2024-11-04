import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const results = [
  {
    id: 1,
    image: '/results/result1.png',
    alt: 'Results1'
  },
  {
    id: 2,
    image: '/results/result2.png',
    alt: 'Results2'
  },
  {
    id: 3,
    image: '/results/result3.png',
    alt: 'Results3'
  },
  {
    id: 4,
    image: '/results/result4.png',
    alt: 'Results4'
  },
{
    id: 5,
    image: '/results/result5.png',
    alt: 'Results5'
  }
];

const ShowcaseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + results.length) % results.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <div className="relative w-full max-w-6xl mx-auto aspect-[16/9]">
      {/* Navigation Buttons */}
      <button
        onClick={() => paginate(-1)}
        className="absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel */}
      <div className="relative w-full h-full overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={results[currentIndex].image}
              alt={results[currentIndex].alt}
              className="w-full h-full object-contain bg-black/40"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {results.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-orange-500' : 'bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCarousel;
