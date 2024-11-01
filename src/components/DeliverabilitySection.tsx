import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';

const DeliverabilitySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Email <span className="text-gradient">Deliverability</span> Matters
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            In today's digital landscape, reaching the inbox is more challenging than ever. 
            Poor deliverability can cripple your email campaigns before they even begin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="feature-card"
          >
            <AlertTriangle className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">The Cost of Poor Deliverability</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Lost revenue opportunities</li>
              <li>• Wasted marketing budget</li>
              <li>• Damaged sender reputation</li>
              <li>• Reduced campaign effectiveness</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="feature-card"
          >
            <CheckCircle className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">The ChillReach Advantage</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Direct Google Workspace access</li>
              <li>• Premium IP reputation</li>
              <li>• Advanced authentication setup</li>
              <li>• Proactive monitoring</li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="feature-card"
          >
            <TrendingUp className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-4">Measurable Results</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Higher Reply rates</li>
              <li>• Higher open rates</li>
              <li>• Improved click-through</li>
              <li>• Better conversion rates</li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't let poor deliverability hold your business back. With ChillReach's direct Google 
            Workspace integration and expert management, your emails will consistently reach the inbox, 
            not the spam folder.
          </p>
          <a 
            href="https://calendly.com/chillreach" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn inline-flex items-center"
          >
            Improve Your Deliverability Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeliverabilitySection;