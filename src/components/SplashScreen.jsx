import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = ({ onComplete }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Después de 4 segundos, ocultar el splash screen
    const timer = setTimeout(() => {
      setShowSplash(false);
      if (onComplete) onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black"
        >
          <div className="text-center px-4">
            {/* Logo Container con círculo girando */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative mx-auto mb-8"
              style={{ width: '250px', height: '250px' }}
            >
              {/* Círculo amarillo girando */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0"
              >
                <svg className="w-full h-full" viewBox="0 0 250 250">
                  <circle
                    cx="125"
                    cy="125"
                    r="120"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="4"
                    strokeDasharray="20 10"
                    opacity="0.8"
                  />
                </svg>
              </motion.div>

              {/* Círculo amarillo sólido de fondo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[220px] h-[220px] bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
              </div>

              {/* Logo/Escudo */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl bg-black/50">
                  <img
                    src="/img/hero.png"
                    alt="Escudo Proyecto Cachorros"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Texto de bienvenida */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-3xl md:text-4xl font-black text-yellow-400 notion-heading">
                ¡Bienvenidos!
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Hola, gracias por visitar nuestra web.
                <br />
                <span className="text-yellow-400 font-bold">Proyecto Cachorros</span> les saluda.
              </p>
            </motion.div>

            {/* Indicador de carga */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-12"
            >
              <div className="flex justify-center space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="w-3 h-3 bg-yellow-400 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
