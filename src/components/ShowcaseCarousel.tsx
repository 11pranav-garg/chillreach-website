import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const results = [
  {
    id: 1,
    image: '/results/result1.png',
    alt: 'Results1',
  },
  {
    id: 2,
    image: '/results/result2.png',
    alt: 'Results2',
  },
  {
    id: 3,
    image: '/results/result3.png',
    alt: 'Results3',
  },
  {
    id: 4,
    image: '/results/result4.png',
    alt: 'Results4',
  },
  {
    id: 5,
    image: '/results/result5.png',
    alt: 'Results5',
  },
];

const ShowcaseCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const paginate = useCallback((newDirection: number) => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + results.length) % results.length
    );
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
        className="absolute top-1/2 -translate-y-1/2 left-4 z-10 p-2 rounded-full 
                 bg-black/50 hover:bg-black/70 text-white transition-all duration-300
                 border border-orange-500/20 hover:border-orange-500/40
                 backdrop-blur-sm group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:text-orange-500 transition-colors duration-300" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute top-1/2 -translate-y-1/2 right-4 z-10 p-2 rounded-full 
                 bg-black/50 hover:bg-black/70 text-white transition-all duration-300
                 border border-orange-500/20 hover:border-orange-500/40
                 backdrop-blur-sm group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:text-orange-500 transition-colors duration-300" />
      </button>

      {/* Carousel */}
      <div className="relative w-full h-full overflow-hidden rounded-2xl 
                    border border-orange-500/20 bg-black/40 backdrop-blur-sm
                    shadow-lg shadow-orange-500/10">
        {/* Decorative corners */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-orange-500/30" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-orange-500/30" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-orange-500/30" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-orange-500/30" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 p-4"
          >
            <img
              src={results[currentIndex].image}
              alt={results[currentIndex].alt}
              className="w-full h-full object-contain rounded-xl
                       transition-transform duration-300 hover:scale-[1.02]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {results.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
                      border ${
                        index === currentIndex
                          ? 'bg-orange-500 border-orange-500 scale-110'
                          : 'bg-black/40 border-orange-500/30 hover:border-orange-500/60'
                      }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCarousel;
