import React from 'react';
import { motion } from 'framer-motion';

interface StylishBurgerIconProps {
  onClick: () => void;
  className?: string;
}

const StylishBurgerIcon: React.FC<StylishBurgerIconProps> = ({ onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary/10 to-primary-light/10 hover:from-primary/20 hover:to-primary-light/20 transition-all duration-300 ${className}`}
      aria-label="Menu"
    >
      <div className="flex flex-col items-center justify-center gap-[5px] group">
        {/* First line - shorter */}
        <motion.div 
          className="w-5 h-[2px] bg-gradient-to-r from-primary to-primary-light rounded-full"
          initial={{ x: 0 }}
          whileHover={{ x: -2 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Second line - longer */}
        <motion.div 
          className="w-6 h-[3px] bg-gradient-to-r from-primary-dark to-primary rounded-full"
          initial={{ x: 0 }}
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Third line - medium */}
        <motion.div 
          className="w-4 h-[2px] bg-gradient-to-r from-primary-light to-primary rounded-full"
          initial={{ x: 0 }}
          whileHover={{ x: -1 }}
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

export default StylishBurgerIcon;
