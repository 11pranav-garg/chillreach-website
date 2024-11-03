import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, InboxIcon, Check, ArrowRight, Users } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import TierSelect from '../components/TierSelect';

const monitoringTiers = {
  basic: {
    title: 'Basic Monitoring',
    price: 5,
    features: [
      'Monthly blacklist checks',
      'Basic DNS reporting',
      'Email support',
    ],
  },
  advanced: {
    title: 'Advanced Monitoring',
    price: 3.5,
    features: [
      'Bi-monthly blacklist checks',
      'Advanced DNS reporting',
      'Priority support',
      // 'Performance analytics',
    ],
  },
  premium: {
    title: 'Premium Monitoring',
    price: 3,
    features: [
      'Weekly blacklist checks',
      'Comprehensive reporting',
      // '24/7 priority support',
      'Priority support',
      // 'Custom dashboard',
    ],
  },
};

const ServiceCard = ({ title, price, features, icon: Icon, isInitialLoad }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="feature-card relative h-full overflow-hidden"
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-8 px-6 pb-6 flex flex-col h-full"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <Icon className="w-12 h-12 text-orange-500 mb-4" />
      </motion.div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="text-3xl font-bold mb-6">
        {typeof price === 'number' ? (
          <AnimatedCounter end={price} delay={isInitialLoad ? 800 : 0} />
        ) : (
          <span>{price}</span>
        )}
        <span className="text-sm text-gray-400">/month</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.ul
          key={
            typeof title === 'string'
              ? title
              : title.props?.children[0]?.props?.children
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-3 mb-8 flex-grow"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start text-gray-300"
            >
              <Check className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
      <motion.a
        href="https://cal.com/malyakula-saivamsi-gepsvn/inbox-monitoring"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full text-center py-3 rounded-lg transition-all duration-300 flex items-center justify-center group
          bg-gradient-to-r from-orange-500 to-orange-600 text-white
          hover:from-orange-600 hover:to-orange-700"
      >
        Learn More
        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
      </motion.a>
    </motion.div>
  </motion.div>
);

const Services = () => {
  const [selectedTier, setSelectedTier] = useState('basic');
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const currentTier = monitoringTiers[selectedTier];

  const handleTierChange = (tier) => {
    setSelectedTier(tier);
    setIsInitialLoad(false);
  };

  return (
    <div className="pt-16">
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive monitoring and management solutions
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title={
                <div className="flex flex-col space-y-4">
                  <span>Monitoring Service</span>
                  <TierSelect
                    value={selectedTier}
                    onChange={handleTierChange}
                  />
                </div>
              }
              price={currentTier.price}
              icon={Settings}
              features={currentTier.features}
              isInitialLoad={isInitialLoad}
            />

            <ServiceCard
              title="Inbox Management"
              price="Starts from $500"
              icon={InboxIcon}
              features={[
                'Master inbox handling',
                'Reply management',
                'Response categorization',
                'CRM integration',
                'Custom workflow setup',
                'Dedicated account manager',
              ]}
              isInitialLoad={isInitialLoad}
            />

            <ServiceCard
              title="Lead Generation"
              price="Starts from $700"
              icon={Users}
              features={[
                'Targeted prospect research',
                'Custom outreach campaigns',
                'Email sequence optimization',
                'Lead qualification',
                'Performance tracking',
                'Weekly reporting',
              ]}
              isInitialLoad={isInitialLoad}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="feature-card p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Need Custom Solutions?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can tailor our services to your specific
              needs
            </p>
            <motion.a
              href="https://cal.com/malyakula-saivamsi-gepsvn/general-query-meet"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center"
            >
              Schedule a Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
