import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Mail, TrendingUp, ChevronRight, DollarSign } from 'lucide-react';
import SliderInput from '../components/SliderInput';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    emailVolume: 10000,
    averageRevenue: 100,
    deliveryRate: 85,
    improvedDeliveryRate: 98,
  });

  const [results, setResults] = useState({
    currentRevenue: 0,
    potentialRevenue: 0,
    additionalRevenue: 0,
    monthlyROI: 0,
    yearlyROI: 0,
  });

  useEffect(() => {
    const currentDelivered = (inputs.emailVolume * inputs.deliveryRate) / 100;
    const improvedDelivered = (inputs.emailVolume * inputs.improvedDeliveryRate) / 100;
    
    const currentRevenue = currentDelivered * (inputs.averageRevenue / 100);
    const potentialRevenue = improvedDelivered * (inputs.averageRevenue / 100);
    const additionalRevenue = potentialRevenue - currentRevenue;
    
    const chillreachCost = 500; // Base monthly cost
    const monthlyROI = additionalRevenue - chillreachCost;
    const yearlyROI = monthlyROI * 12;

    setResults({
      currentRevenue,
      potentialRevenue,
      additionalRevenue,
      monthlyROI,
      yearlyROI,
    });
  }, [inputs]);

  const ResultCard = ({ label, value, icon: Icon, description }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className="feature-card p-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <span className="text-gray-300 font-medium">{label}</span>
          {description && (
            <p className="text-sm text-gray-400 mt-1">{description}</p>
          )}
        </div>
        <Icon className="w-5 h-5 text-orange-500" />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="text-2xl font-bold text-gradient"
        >
          ${Math.round(value).toLocaleString()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );

  return (
    <div className="pt-16">
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ROI <span className="text-gradient">Calculator</span>
            </h1>
            <p className="text-xl text-gray-300">
              Calculate your potential return on investment with improved email deliverability
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <SliderInput
                label="Monthly Email Volume"
                icon={Mail}
                value={inputs.emailVolume}
                onChange={(value) => setInputs({ ...inputs, emailVolume: value })}
                unit="emails"
                min={1000}
                max={1000000}
                step={1000}
                tooltip="Total number of emails sent per month"
              />
              <SliderInput
                label="Revenue per Email"
                icon={DollarSign}
                value={inputs.averageRevenue}
                onChange={(value) => setInputs({ ...inputs, averageRevenue: value })}
                unit="¢"
                min={1}
                max={1000}
                step={1}
                tooltip="Average revenue generated per email in cents"
              />
              <SliderInput
                label="Current Delivery Rate"
                icon={Mail}
                value={inputs.deliveryRate}
                onChange={(value) => setInputs({ ...inputs, deliveryRate: value })}
                unit="%"
                min={0}
                max={100}
                step={1}
                tooltip="Your current email delivery success rate"
              />
              <SliderInput
                label="Expected Delivery Rate"
                icon={TrendingUp}
                value={inputs.improvedDeliveryRate}
                onChange={(value) => setInputs({ ...inputs, improvedDeliveryRate: value })}
                unit="%"
                min={0}
                max={100}
                step={1}
                tooltip="Expected delivery rate with ChillReach"
              />
            </div>

            <div className="space-y-6">
              <div className="feature-card p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Projected Results</h3>
                <div className="space-y-6">
                  <ResultCard
                    label="Current Monthly Revenue"
                    value={results.currentRevenue}
                    icon={Calculator}
                    description="Revenue with current delivery rate"
                  />
                  <ResultCard
                    label="Potential Monthly Revenue"
                    value={results.potentialRevenue}
                    icon={TrendingUp}
                    description="Revenue with improved delivery rate"
                  />
                  <ResultCard
                    label="Additional Monthly Revenue"
                    value={results.additionalRevenue}
                    icon={TrendingUp}
                    description="Extra revenue from improved deliverability"
                  />
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <p className="text-gray-300 mb-4">
                  Ready to improve your email deliverability and increase revenue?
                </p>
                <a 
                  href="https://calendly.com/chillreach" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center group"
                >
                  Schedule a Demo
                  <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ROICalculator;