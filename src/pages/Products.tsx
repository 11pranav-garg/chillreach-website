import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Check, ArrowRight } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';

const ProductCard = ({ title, price, features, icon: Icon }) => (
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
      <div className="text-3xl font-bold mb-6">
        <AnimatedCounter end={price} />
        <span className="text-sm text-gray-400">/mailbox</span>
      </div>
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
          href="https://cal.com/malyakula-saivamsi-gepsvn/15min"
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
            Our <span className="text-gradient">Products</span>
          </h1>
          <p className="text-xl text-gray-300">
            Premium email infrastructure solutions for optimal deliverability
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <ProductCard
              title="Google Workspace"
              price={4.5}
              icon={Mail}
              features={[
                'Direct Google inbox access',
                'Maximum deliverability',
                'No reseller markup',
                'Full account control',
                // '24/7 priority support',
                'Setup assistance included',
              ]}
            />
            <ProductCard
              title="Custom Mailbox"
              price={4.0}
              icon={Shield}
              features={[
                'Custom domain required',
                'Proven delivery rates',
                'Domain management',
                'Technical support included',
                'Spam protection',
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="feature-card p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a call with our team to find the perfect solution for
              your needs
            </p>
            <a
              href="https://cal.com/malyakula-saivamsi-gepsvn/15min"
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

export default Products;
