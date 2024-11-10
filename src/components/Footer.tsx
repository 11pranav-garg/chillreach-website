import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  const trackOutboundLink = (label: string) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': label,
      });
    }
  };

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
                  href="/?utm_source=footer&utm_medium=quicklinks&utm_campaign=internal"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products?utm_source=footer&utm_medium=quicklinks&utm_campaign=internal"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/services?utm_source=footer&utm_medium=quicklinks&utm_campaign=internal"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/dns-checker?utm_source=footer&utm_medium=quicklinks&utm_campaign=internal"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  Free DNS Checker
                </a>
              </li>
              <li>
                <a
                  href="/team?utm_source=footer&utm_medium=quicklinks&utm_campaign=internal"
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
                  onClick={() => trackOutboundLink('email')}
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  sai@chillreach.org
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919392274091?utm_source=website&utm_medium=footer&utm_campaign=contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundLink('whatsapp_1')}
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +91 93922 74091
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919267951769?utm_source=website&utm_medium=footer&utm_campaign=contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundLink('whatsapp_2')}
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
                  onClick={() => trackOutboundLink('location')}
                  className="flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-300"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Vishakhapatnam, India
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sai-vamsi-coldemail/?utm_source=website&utm_medium=footer&utm_campaign=social"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackOutboundLink('linkedin')}
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
              href="https://cal.com/malyakula-saivamsi-gepsvn/general-query-meet?utm_source=website&utm_medium=footer&utm_campaign=booking"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackOutboundLink('calendar')}
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
