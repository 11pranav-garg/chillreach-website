import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Database,
  Eraser,
  Inbox,
  Share2,
  TestTube,
  Rocket,
} from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Pinpoint Your Perfect Customer',
    description:
      'Identify key traits like job titles, company sizes, industries, and locations that define your ideal clients.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Database,
    title: 'Gather Targeted Data',
    description:
      'Collect high-quality information from reputable sources that align with your customer profile',
    color: 'from-orange-600 to-orange-700',
  },
  {
    icon: Eraser,
    title: 'Cleanse Your Data',
    description:
      'Remove duplicates and correct inaccuracies to ensure your data is reliable and up-to-date.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Inbox,
    title: 'Prepare Your Inbox',
    description:
      'Use advanced tools to warm up your email inbox within 48 hours, enhancing your sending reputation.',
    color: 'from-orange-600 to-orange-700',
  },
  {
    icon: Share2,
    title: 'Distribute to Your Audience',
    description:
      'Share tailored content through selected marketing channels to effectively reach your target audience.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: TestTube,
    title: 'Test and Optimize Creatives',
    description:
      'Conduct A/B testing on different content elements and analyze performance to continuously improve your campaigns.',
    color: 'from-orange-600 to-orange-700',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description:
      'Your campaign takes off with optimized deliverability and maximum impact.',
    color: 'from-orange-500 to-orange-600',
  },
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
            Quick and efficient to get you more business without the typical
            agency song and dance.
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
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} 
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
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black/80 
                                  border border-orange-500 flex items-center justify-center 
                                  text-sm font-bold text-orange-500"
                    >
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

                    <h3 className="text-2xl font-bold mb-3 text-gradient">
                      {step.title}
                    </h3>
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
