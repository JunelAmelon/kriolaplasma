import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X } from 'lucide-react';

interface SuccessToastProps {
  show: boolean;
  message: string;
  onClose: () => void;
  duration?: number; // Durée en millisecondes
}

const SuccessToast: React.FC<SuccessToastProps> = ({ 
  show, 
  message, 
  onClose, 
  duration = 5000 // 5 secondes par défaut
}) => {
  // Fermeture automatique après la durée spécifiée
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-20 left-0 right-0 mx-auto z-50 max-w-md w-[92%] sm:w-[450px] px-4 sm:px-0"
        >
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center p-4 border-b border-gray-100">
              <div className="flex-shrink-0 bg-green-50 p-2 rounded-full">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">Succès</p>
                <p className="text-sm text-gray-500">{message}</p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <span className="sr-only">Fermer</span>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="w-full bg-green-100">
              <motion.div 
                className="h-1 bg-green-500" 
                initial={{ width: '100%' }}
                animate={{ width: '0%' }}
                transition={{ duration: duration / 1000, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessToast;
