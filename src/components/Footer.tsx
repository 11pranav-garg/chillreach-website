import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/60 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Send className="w-8 h-8 text-orange-500 mr-2" />
              <span className="text-gradient">ChillReach</span>
            </h3>
            <p className="text-gray-400">
              Maximizing email deliverability for your business success.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/dns-checker"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  DNS Checker
                </a>
              </li>
              <li>
                <a
                  href="/team"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:sai@chillreach.org"
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  sai@chillreach.org
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919392274091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 93922 74091
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919267951769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 92679 51769
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Vishakhapatnam,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Vishakhapatnam, India
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sai-vamsi-coldemail/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Chillreach
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Schedule</h4>
            <a
              href="https://cal.com/malyakula-saivamsi-gepsvn/general-query-meet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg inline-block transition-colors duration-300"
            >
              Book a Call
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ChillReach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
