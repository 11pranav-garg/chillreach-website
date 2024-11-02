import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Database,
  Eraser,
  Inbox,
  Share2,
  TestTube,
  Rocket
} from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Define Your ICP',
    description: 'First we identify your ideal customer profile. It may contain, job title, company size, industry, location etc...',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Database,
    title: 'Pull Data',
    description: 'Next we dig deep into all major data sources to extract a narrow and broad reach for your ICP.',
    color: 'from-orange-600 to-orange-700'
  },
  {
    icon: Eraser,
    title: 'Clean Lists',
    description: 'Even the best data sources are not 100% accurate. We test every email safely before sending and only use clean data.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Inbox,
    title: 'Prep Inboxes',
    description: 'Sophisticated AI systems simulate ideal sending behavior on each inbox to improve inbox and domain sending score.',
    color: 'from-orange-600 to-orange-700'
  },
  {
    icon: Share2,
    title: 'Audience Distribution',
    description: 'We match your ICP data across all marketing channels to increase the exposure your ICP has to your brand.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: TestTube,
    title: 'Test Creative',
    description: 'With perfect emails maximized for each subsegment we create automated email sequences customized to each segment.',
    color: 'from-orange-600 to-orange-700'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Your campaign takes off with optimized deliverability and maximum impact.',
    color: 'from-orange-500 to-orange-600'
  }
];

const ProcessRoadmap = () => {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quick and efficient to get you more business without the typical agency song and dance.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-orange-500/30" />

          {/* Steps */}
          <div className="relative space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row relative`}
                >
                  {/* Connecting Line */}
                  <div 
                    className={`absolute top-1/2 ${
                      isEven ? 'left-[calc(50%-1px)]' : 'right-[calc(50%-1px)]'
                    } w-[calc(50%-4rem)] h-px border-t-2 border-dashed border-orange-500/30`}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} 
                                  flex items-center justify-center relative
                                  shadow-lg shadow-orange-500/20
                                  border border-orange-400/20 backdrop-blur-sm`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      {/* Decorative corners */}
                      <div className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-orange-500/50" />
                      <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-orange-500/50" />
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-orange-500/50" />
                      <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-orange-500/50" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black/80 
                                  border border-orange-500 flex items-center justify-center 
                                  text-sm font-bold text-orange-500">
                      {index + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`flex-1 feature-card p-6 backdrop-blur-lg relative
                              ${isEven ? 'text-left' : 'text-right'}
                              max-w-lg transform hover:shadow-orange-500/10
                              border border-orange-500/20`}
                  >
                    {/* Decorative corners */}
                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-orange-500/50" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-orange-500/50" />
                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-orange-500/50" />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-orange-500/50" />
                    
                    <h3 className="text-2xl font-bold mb-3 text-gradient">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessRoadmap;