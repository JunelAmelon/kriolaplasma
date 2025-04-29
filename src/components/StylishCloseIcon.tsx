import React from 'react';
import { motion } from 'framer-motion';

interface StylishCloseIconProps {
  onClick: () => void;
  className?: string;
}

const StylishCloseIcon: React.FC<StylishCloseIconProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-primary-light/10 hover:from-primary/20 hover:to-primary-light/20 transition-all duration-300 ${className}`}
      aria-label="Close Menu"
    >
      <div className="relative w-6 h-6">
        {/* First line */}
        <motion.div 
          className="absolute top-1/2 left-0 w-6 h-[3px] bg-gradient-to-r from-primary-dark to-primary rounded-full"
          style={{ transform: 'translateY(-50%) rotate(45deg)' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Second line */}
        <motion.div 
          className="absolute top-1/2 left-0 w-6 h-[3px] bg-gradient-to-r from-primary to-primary-light rounded-full"
          style={{ transform: 'translateY(-50%) rotate(-45deg)' }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      
      {/* Decorative circle */}
      <motion.div 
        className="absolute w-full h-full rounded-full border border-primary/30"
        initial={{ scale: 0.8, opacity: 0.5 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default StylishCloseIcon;
