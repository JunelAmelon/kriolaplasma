
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
// Snap and TikTok are not in lucide-react, so we use SVG for them below.

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="/images/logowhite.png" 
              alt="Kriola Plasma Logo White" 
              className="h-32 mb-4"
            />
            <p className="text-gray-400">
              Expert en soins innovants par plasma froid russe pour la peau et les cheveux.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Soins & Services
                </Link>
              </li>
              <li>
                <Link to="/formation" className="text-gray-400 hover:text-primary transition-colors">
                  Formation
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
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
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
            <h4 className="text-lg font-semibold mb-4 text-primary">Suivez-nous</h4>
            <div className="flex flex-row items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                title="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                title="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://snapchat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                title="Snapchat"
              >
                {/* Snap SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="snapchat-icon">
                  <path d="M12 2c2.7 0 4.9 2.2 4.9 4.9 0 1.3-.5 2.5-1.3 3.4.8.2 1.6.5 2.4 1 .8.5 1.6 1.2 2.3 2.2-.7.2-1.5.4-2.4.6.3.5.5 1.1.5 1.7 0 1.2-.7 2.2-1.7 2.6.2.4.3.8.3 1.3 0 1.2-1 2.2-2.2 2.2-.7 0-1.3-.3-1.7-.8-.4.5-1 .8-1.7.8-1.2 0-2.2-1-2.2-2.2 0-.4.1-.8.3-1.3-1-.4-1.7-1.4-1.7-2.6 0-.6.2-1.2.5-1.7-.9-.2-1.7-.4-2.4-.6.7-1 1.5-1.7 2.3-2.2.8-.5 1.6-.8 2.4-1-.8-.9-1.3-2.1-1.3-3.4C7.1 4.2 9.3 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                title="TikTok"
              >
                {/* TikTok SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="tiktok-icon">
                  <path d="M9 3v12a4 4 0 1 0 4-4h-1" />
                  <path d="M16 3a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="flex justify-center space-x-4 mb-4">
            <Link to="/mentions-legales" className="hover:text-primary transition-colors">
              Mentions Légales
            </Link>
            <span>|</span>
            <Link to="/cgu" className="hover:text-primary transition-colors">
              CGU
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} Kriola Plasma. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Développé par Junel BOKO ASSOGBA</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;