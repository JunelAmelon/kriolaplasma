
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
              src="/images/logo.png" 
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
                <Phone size={18} className="text-white" />
                <span className="text-gray-400">+33 6 29 50 03 38</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-white" />
                <span className="text-gray-400">contact@kriolaplasma.com</span>
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
                {/* Snap SVG - Logo officiel */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="snapchat-icon">
                  <path d="M12.206 0.543C12.067 0.533 11.933 0.533 11.794 0.543C9.683 0.543 7.8 2.426 7.8 4.537C7.8 4.537 7.8 6.994 7.8 7.2C7.8 7.406 7.594 7.612 7.389 7.612C7.183 7.612 5.143 7.612 5.143 7.612C4.731 7.612 4.32 8.023 4.32 8.434C4.32 8.434 4.32 8.434 4.32 8.434C4.32 8.846 4.731 9.257 5.143 9.257C5.143 9.257 7.183 9.257 7.389 9.257C7.594 9.257 7.8 9.463 7.8 9.669C7.8 9.669 7.8 9.874 7.8 10.08C7.8 10.697 7.183 11.314 6.566 11.726C5.949 12.137 5.143 12.137 4.526 12.137C4.114 12.137 3.703 12.549 3.703 12.96C3.703 13.372 4.114 13.783 4.526 13.783C4.526 13.783 4.526 13.783 4.526 13.783C5.143 13.783 6.377 14.194 7.183 14.606C7.8 15.017 7.8 15.634 7.8 16.046C7.8 16.663 7.8 17.486 7.389 18.103C6.977 18.72 6.36 19.337 5.537 19.749C5.126 19.954 4.909 20.366 4.909 20.777C4.909 21.189 5.32 21.6 5.731 21.6C5.731 21.6 5.731 21.6 5.731 21.6C6.977 21.6 8.417 20.777 9.446 19.749C10.474 18.72 11.091 17.28 11.091 15.84C11.091 15.429 11.503 15.017 11.914 15.017C11.914 15.017 12.086 15.017 12.086 15.017C12.497 15.017 12.909 15.429 12.909 15.84C12.909 17.28 13.526 18.72 14.554 19.749C15.583 20.777 17.023 21.6 18.269 21.6C18.269 21.6 18.269 21.6 18.269 21.6C18.68 21.6 19.091 21.189 19.091 20.777C19.091 20.366 18.874 19.954 18.463 19.749C17.64 19.337 17.023 18.72 16.611 18.103C16.2 17.486 16.2 16.663 16.2 16.046C16.2 15.634 16.2 15.017 16.817 14.606C17.623 14.194 18.857 13.783 19.474 13.783C19.474 13.783 19.474 13.783 19.474 13.783C19.886 13.783 20.297 13.372 20.297 12.96C20.297 12.549 19.886 12.137 19.474 12.137C18.857 12.137 18.051 12.137 17.434 11.726C16.817 11.314 16.2 10.697 16.2 10.08C16.2 10.08 16.2 9.669 16.2 9.669C16.2 9.463 16.406 9.257 16.611 9.257C16.611 9.257 18.651 9.257 18.651 9.257C19.063 9.257 19.474 8.846 19.474 8.434C19.474 8.434 19.474 8.434 19.474 8.434C19.474 8.023 19.063 7.612 18.651 7.612C18.651 7.612 16.611 7.612 16.406 7.612C16.2 7.612 15.994 7.406 15.994 7.2C15.994 6.994 15.994 4.537 15.994 4.537C16.2 2.426 14.317 0.543 12.206 0.543Z" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                title="TikTok"
              >
                {/* TikTok SVG - Logo officiel */}
                <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" className="tiktok-icon">
                  <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z"/>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;