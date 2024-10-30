import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Settings, Check, ArrowRight, InboxIcon } from 'lucide-react';

const PricingTier = ({ title, price, features, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="feature-card relative h-full"
  >
    <div className="pt-8 px-6 pb-6">
      <Icon className="w-12 h-12 text-orange-500 mb-4" />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-3xl font-bold mb-6">
        {typeof price === 'number' ? `$${price}` : price}
        {typeof price === 'number' && <span className="text-sm text-gray-400">/mailbox</span>}
      </p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <Check className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <a 
          href="https://calendly.com/chillreach" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full text-center py-3 rounded-lg transition-all duration-300 flex items-center justify-center group
            border border-orange-500/50 hover:border-orange-500 hover:bg-orange-500/10"
        >
          Get Started 
          <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  return (
    <div className="pt-16">
      {/* Products Hero */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your <span className="text-gradient">Solution</span>
          </h1>
          <p className="text-xl text-gray-300">
            Flexible pricing options designed to scale with your business
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <PricingTier 
              title="Google Workspace"
              price={4.50}
              icon={Mail}
              features={[
                "Direct Google inbox access",
                "Maximum deliverability",
                "No reseller markup",
                "Full account control",
                "24/7 priority support",
                "Setup assistance included"
              ]}
            />
            <PricingTier 
              title="Custom Mailbox"
              price={4.00}
              icon={Shield}
              features={[
                "Custom domain required",
                "Proven delivery rates",
                "Domain management",
                "Technical support included",
                "Spam protection",
                "Regular backups"
              ]}
            />
            <PricingTier 
              title="Monitoring Service"
              price={5.00}
              icon={Settings}
              features={[
                "Monthly blacklist checks",
                "DNS reporting",
                "Setup assistance",
                "Ongoing optimization",
                "Real-time alerts",
                "Performance analytics"
              ]}
            />
            <PricingTier 
              title="Inbox Management"
              price="Starts from $500"
              icon={InboxIcon}
              features={[
                "Master inbox handling",
                "Reply management",
                "Response categorization",
                "CRM integration",
                "Custom workflow setup",
                "Dedicated account manager"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Volume Pricing */}
      <section className="py-20 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Volume Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="feature-card text-center p-8"
              >
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-4xl font-bold text-orange-500 mb-2">$5.00</p>
                <p className="text-gray-400">Less than 200 inboxes</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="feature-card text-center p-8"
              >
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p className="text-4xl font-bold text-orange-500 mb-2">$3.50</p>
                <p className="text-gray-400">200-500 inboxes</p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="feature-card text-center p-8"
              >
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-4xl font-bold text-orange-500 mb-2">$3.00</p>
                <p className="text-gray-400">500+ inboxes</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;