import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Send, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => handleNavigation('/')} 
            className="flex items-center space-x-2"
          >
            <Send className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold">ChillReach</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className={`transition-colors duration-200 hover:text-orange-500 ${
                location.pathname === '/' ? 'text-orange-500' : 'text-gray-300'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/products')}
              className={`transition-colors duration-200 hover:text-orange-500 ${
                location.pathname === '/products' ? 'text-orange-500' : 'text-gray-300'
              }`}
            >
              Products
            </button>
            <button
              onClick={() => handleNavigation('/services')}
              className={`transition-colors duration-200 hover:text-orange-500 ${
                location.pathname === '/services' ? 'text-orange-500' : 'text-gray-300'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('/dns-checker')}
              className={`transition-colors duration-200 hover:text-orange-500 ${
                location.pathname === '/dns-checker' ? 'text-orange-500' : 'text-gray-300'
              }`}
            >
              Free DNS Checker
            </button>
            <button
              onClick={() => handleNavigation('/team')}
              className={`transition-colors duration-200 hover:text-orange-500 ${
                location.pathname === '/team' ? 'text-orange-500' : 'text-gray-300'
              }`}
            >
              Team
            </button>
            <a
              href="https://cal.com/malyakula-saivamsi-gepsvn/general-query-meet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-orange-500 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigation('/')}
                className={`transition-colors duration-200 hover:text-orange-500 text-left ${
                  location.pathname === '/' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/products')}
                className={`transition-colors duration-200 hover:text-orange-500 text-left ${
                  location.pathname === '/products' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => handleNavigation('/services')}
                className={`transition-colors duration-200 hover:text-orange-500 text-left ${
                  location.pathname === '/services' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => handleNavigation('/dns-checker')}
                className={`transition-colors duration-200 hover:text-orange-500 text-left ${
                  location.pathname === '/dns-checker' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                Free DNS Checker
              </button>
              <button
                onClick={() => handleNavigation('/team')}
                className={`transition-colors duration-200 hover:text-orange-500 text-left ${
                  location.pathname === '/team' ? 'text-orange-500' : 'text-gray-300'
                }`}
              >
                Team
              </button>
              <a
                href="https://cal.com/malyakula-saivamsi-gepsvn/general-query-meet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
