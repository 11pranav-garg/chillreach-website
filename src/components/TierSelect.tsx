import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TierSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const TierSelect: React.FC<TierSelectProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const tiers = {
    basic: 'Basic Tier',
    advanced: 'Advanced Tier',
    premium: 'Premium Tier',
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setTimeout(() => setIsOpen(false), 200)}
        className="w-full px-4 py-2 bg-black/40 backdrop-blur-lg
          text-white rounded-lg cursor-pointer 
          border border-orange-500/10 hover:border-orange-500/30
          text-lg font-light transition-all duration-300
          focus:outline-none focus:border-orange-500/50
          flex items-center justify-between"
      >
        <span>{tiers[value]}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center ml-2"
        >
          <ChevronDown className="w-5 h-5 text-orange-800" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-1 bg-black/90 backdrop-blur-lg rounded-lg border border-orange-500/10
                     overflow-hidden shadow-lg"
          >
            {Object.entries(tiers).map(([key, label]) => (
              <div
                key={key}
                onClick={() => {
                  onChange(key);
                  setIsOpen(false);
                }}
                className={`px-4 py-2 cursor-pointer transition-all duration-200 text-lg font-light
                  ${
                    value === key
                      ? 'bg-orange-500/20 text-orange-500'
                      : 'text-white hover:bg-orange-500/10'
                  }`}
              >
                {label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TierSelect;
