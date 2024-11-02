import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Send, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2">
            <Send className="w-8 h-8 text-orange-500" />
            <span className="text-xl font-bold">ChillReach</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
              }
            >
              Products
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/dns-checker" 
              className={({ isActive }) => 
                `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
              }
            >
              DNS Checker
            </NavLink>
            <NavLink 
              to="/team" 
              className={({ isActive }) => 
                `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
              }
            >
              Team
            </NavLink>
            <a 
              href="https://calendly.com/chillreach" 
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
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => 
                  `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Products
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink 
                to="/dns-checker" 
                className={({ isActive }) => 
                  `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
                }
                onClick={() => setIsOpen(false)}
              >
                DNS Checker
              </NavLink>
              <NavLink 
                to="/team" 
                className={({ isActive }) => 
                  `transition-colors duration-200 hover:text-orange-500 ${isActive ? 'text-orange-500' : 'text-gray-300'}`
                }
                onClick={() => setIsOpen(false)}
              >
                Team
              </NavLink>
              <a 
                href="https://calendly.com/chillreach" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
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