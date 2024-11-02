import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, HelpCircle } from 'lucide-react';

interface SliderInputProps {
  label: string;
  icon: LucideIcon;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  tooltip?: string;
}

const SliderInput: React.FC<SliderInputProps> = ({
  label,
  icon: Icon,
  value,
  onChange,
  unit = '',
  min = 0,
  max = 100000,
  step = 1,
  tooltip,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || 0;
    onChange(Math.min(Math.max(newValue, min), max));
  };

  const formatValue = (val: number) => {
    if (unit === 'emails') {
      return val.toLocaleString();
    }
    if (unit === '¢') {
      return val;
    }
    return val;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="feature-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2 flex-1 mr-4">
          <Icon className="w-5 h-5 text-orange-500 flex-shrink-0" />
          <label className="text-lg font-medium text-gray-300 flex-1">{label}</label>
          {tooltip && (
            <div className="relative">
              <HelpCircle
                className="w-4 h-4 text-gray-400 cursor-help"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              />
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 text-sm
                             bg-black/90 text-gray-200 rounded-lg shadow-lg"
                  >
                    {tooltip}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
        <div className="relative min-w-[140px] flex-shrink-0">
          <div className="relative">
            <input
              type="number"
              value={value}
              onChange={handleInputChange}
              className="w-full bg-black/40 border border-orange-500/20 rounded-lg px-4 py-2 text-white text-right
                       focus:outline-none focus:border-orange-500/50 transition-all duration-300"
              min={min}
              max={max}
              step={step}
            />
            {unit && (
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
                {unit}
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="h-2 bg-black/40 rounded-full relative">
          <div 
            className="absolute h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
            style={{ width: `${((value - min) / (max - min)) * 100}%` }}
          />
        </div>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <span>{formatValue(min)}{unit}</span>
          <span>{formatValue(max)}{unit}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderInput;