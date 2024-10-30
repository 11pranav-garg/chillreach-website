import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import DeliverabilitySection from '../components/DeliverabilitySection';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="feature-card p-8"
  >
    <Icon className="w-12 h-12 text-orange-500 mb-6" />
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gradient">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Maximize Your Email <span className="text-gradient">Deliverability</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Direct Google Workspace access and expert inbox management for optimal email performance.
            No resellers, just pure deliverability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://calendly.com/chillreach" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule a Demo
            </a>
            <a 
              href="/products" 
              className="px-6 py-3 border border-orange-500/50 rounded-lg hover:bg-orange-500/10 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient">ChillReach</span>?
            </h2>
            <p className="text-xl text-gray-300">
              Direct access to premium email infrastructure without the middleman markup
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Mail}
              title="Direct Google Access"
              description="Skip the resellers and get direct access to Google Workspace at unbeatable prices."
            />
            <FeatureCard 
              icon={Shield}
              title="Premium Protection"
              description="Advanced security measures and monitoring to maintain your sender reputation."
            />
            <FeatureCard 
              icon={TrendingUp}
              title="Proven Results"
              description="Consistently high delivery rates and improved campaign performance."
            />
          </div>
        </div>
      </section>

      {/* Deliverability Section */}
      <DeliverabilitySection />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="feature-card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Maximize Your Email Deliverability?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of successful businesses who trust ChillReach for their email infrastructure.
            </p>
            <a 
              href="https://calendly.com/chillreach" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              Schedule a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;