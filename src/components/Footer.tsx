import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
  src="/images/logowhite.png" 
  alt="Kriola Plasma Logo White" 
  style={{ height: '139px', width: 'auto' }}
  className="mb-4"
/>
            <p className="text-gray-400">
              Expert en soins innovants par plasma froid russe pour la peau et les cheveux.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Soins & Services
                </Link>
              </li>
              <li>
                <Link to="/formations" className="text-gray-400 hover:text-primary transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/boutique" className="text-gray-400 hover:text-primary transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/app" className="text-gray-400 hover:text-primary transition-colors">
                  Web App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary" />
                <span className="text-gray-400">contact@kriola-plasma.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kriola Plasma. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;