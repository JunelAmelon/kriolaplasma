import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    // Safety timeout in case of bug
    const hardTimeout = setTimeout(() => {
      setLoading(false);
      console.log('Preloader forced to close after 3.5s');
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hardTimeout);
    };
  }, []);

  if (!loading) {
    console.log('Preloader hidden, app should display.');
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Beauty-themed animation */}
            <div className="relative w-32 h-32 mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0.3 }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.3, 1, 0.3],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full border-4 border-primary opacity-30"
              />
              <motion.div
                initial={{ scale: 0.6, opacity: 0.5 }}
                animate={{
                  scale: [0.6, 1, 0.6],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3
                }}
                className="absolute inset-0 rounded-full border-4 border-primary-light opacity-50"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-3xl font-bold text-primary">KP</div>
              </motion.div>
              
              {/* Sparkle effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [0, (i % 2 === 0 ? 1 : -1) * Math.random() * 50],
                    y: [0, (i % 2 === 0 ? -1 : 1) * Math.random() * 50],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-primary rounded-full"
                  style={{ filter: 'blur(1px)' }}
                />
              ))}
            </div>
            
            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold text-primary mb-2">Kriola Plasma</h2>
              <p className="text-gray-500">Révélez votre beauté naturelle</p>
            </motion.div>
            
            {/* Loading bar */}
            <div className="w-48 h-1 bg-gray-200 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.3, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary to-primary-light"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
