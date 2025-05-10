import { useState, useEffect } from 'react';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Détection du scroll pour changer l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    { path: '/services', label: 'Soins & Services' },
    { path: '/boutique', label: 'Boutique' },
    { path: '/formation', label: 'Formation' },
    { path: '/app', label: 'Web App' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-white py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main navbar */}
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="./images/logo.png" 
                  alt="Kriola Plasma Logo" 
                  className="navbar-logo" 
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-gray-700 hover:text-primary transition-colors ${
                    isActive(item.path) ? 'text-primary font-medium' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link 
                to="/reservation"
                className="ml-3 px-5 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                Réserver
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-primary transition-colors"
                aria-expanded="false"
              >
                <span className="sr-only">Ouvrir le menu</span>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                  <img src="./images/logo.png" alt="Kriola Plasma Logo" className="h-32 w-auto" />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-500"
                  aria-label="Fermer le menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="px-4 py-6">
                <div className="space-y-1">
                  {menuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className={`block px-4 py-3 text-base ${
                        isActive(item.path)
                          ? 'text-primary font-medium'
                          : 'text-gray-700'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <Link
                    to="/contact"
                    className="block w-full px-4 py-3 bg-primary text-white text-center rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    Réserver un rendez-vous
                  </Link>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm font-medium text-gray-500 mb-4">Contact</p>
                  <a href="tel:+33629500338" className="flex items-center text-gray-700 mb-3">
                    <Phone size={18} className="mr-3 text-primary" />
                    +33 6 29 50 03 38
                  </a>
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