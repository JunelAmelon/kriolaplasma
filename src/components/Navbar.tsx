import { useState } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import StylishBurgerIcon from './StylishBurgerIcon';
import StylishCloseIcon from './StylishCloseIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/services', label: 'Soins & Services' },
    { path: '/boutique', label: 'Boutique' },
    { path: '/app', label: 'Web App' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed w-full bg-white z-50 shadow-sm py-2 md:py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-28 md:h-32">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                {/* Replace with your actual logo image */}
                <div className="flex items-center justify-center">
                  <img 
                    src="./images/logo.png" 
                    alt="Kriola Plasma Logo" 
                    className="navbar-logo" />
                </div>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-4 py-2 text-gray-700 hover:text-primary relative group rounded-full transition-all duration-300 ${
                    isActive(item.path) ? 'text-primary' : ''
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                    isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
              <Link
                to="/reservation"
                className="ml-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
              >
                Réserver
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <StylishBurgerIcon onClick={() => setIsOpen(true)} />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Left Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link to="/" className="flex items-center gap-2">
                    {/* Replace with your actual logo image */}
                    <div className="relative flex items-center justify-center overflow-visible">
                      <img src="./images/logo.png" alt="Kriola Plasma Logo" className="navbar-logo-large" />
                    </div>
                  </Link>
                  <StylishCloseIcon onClick={() => setIsOpen(false)} />
                </div>

                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-xl group transition-all duration-300 ${
                        isActive(item.path) ? 'bg-primary/5 text-primary' : 'text-gray-700 hover:bg-primary/5'
                      }`}
                    >
                      <span className="group-hover:text-primary transition-colors">{item.label}</span>
                      <ChevronRight
                        size={18}
                        className={`text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all ${
                          isActive(item.path) ? 'text-primary translate-x-1' : ''
                        }`}
                      />
                    </Link>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <Link
                    to="/reservation"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors duration-300 text-center"
                  >
                    Réserver maintenant
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors duration-300 text-center"
                  >
                    Contactez-nous
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <p className="text-sm text-gray-500">
                    Besoin d'aide ? Appelez-nous au
                    <a href="tel:+33123456789" className="text-primary ml-1">
                      01 23 45 67 89
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;