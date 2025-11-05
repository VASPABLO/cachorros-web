
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Coaches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const coaches = [
    {
      name: "Lic. Cristian Quesada González",
      position: "Docente MEP Educación Física",
      experience: "Licencia A Fútbol",
      speciality: "Formación integral y desarrollo técnico-táctico",
      achievements: ["Licencia A Fútbol", "Docente MEP Educación Física", "Formación profesional en desarrollo deportivo"],
      description: "Profesional con amplia formación académica y deportiva, especializado en la enseñanza de educación física y desarrollo futbolístico de alto nivel."
    },
    {
      name: "Douglas Ortíz Irigoyen",
      position: "Entrenador", 
      experience: "Licencia C Fútbol",
      speciality: "Desarrollo técnico y táctico",
      achievements: ["Licencia C Fútbol", "Entrenamiento de categorías menores", "Formación continua en metodologías deportivas"],
      description: "Entrenador certificado con experiencia en formación de futbolistas jóvenes y desarrollo de habilidades técnicas."
    },
    {
      name: "Oscar Espinoza Sibaja",
      position: "Entrenador", 
      experience: "Licencia Fútbol en trámite",
      speciality: "Formación y desarrollo de jugadores",
      achievements: ["Licencia Fútbol en proceso de certificación", "Experiencia práctica en entrenamiento", "Compromiso con la formación deportiva"],
      description: "Entrenador en proceso de certificación profesional, con pasión por la formación integral de jóvenes futbolistas."
    },
    {
      name: "Jean Paul Quirós",
      position: "Entrenador de Porteros", 
      experience: "Especialista en arqueros",
      speciality: "Técnica y psicología de porteros",
      achievements: ["Especialización en entrenamiento de porteros", "Técnicas avanzadas de arquería", "Desarrollo físico y mental de guardametas"],
      description: "Especialista dedicado al entrenamiento específico de porteros, enfocado en técnica, reflejos y aspectos psicológicos del arquero."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % coaches.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + coaches.length) % coaches.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Cambiar cada 5 segundos

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  return (
    <section id="entrenadores" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black notion-heading text-yellow-400 mb-6">
            NUESTROS ENTRENADORES
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Un equipo de profesionales apasionados y altamente calificados
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="gradient-card p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Coach Image */}
                    <div className="relative">
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <img  
                          className="w-full h-full object-cover" 
                          alt={`Entrenador ${coaches[currentIndex].name}`}
                         src="img/entrenadores1.png" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="w-8 h-8 text-black fill-current" />
                      </div>
                    </div>

                    {/* Coach Info */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-4xl font-black notion-heading text-yellow-400 mb-2">
                          {coaches[currentIndex].name}
                        </h3>
                        <p className="text-xl text-gray-300 font-semibold">
                          {coaches[currentIndex].position}
                        </p>
                        <p className="text-lg text-gray-400">
                          {coaches[currentIndex].experience}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Especialidad:</h4>
                          <p className="text-gray-300">{coaches[currentIndex].speciality}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">Descripción:</h4>
                          <p className="text-gray-300">{coaches[currentIndex].description}</p>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-white mb-3">Logros y Certificaciones:</h4>
                          <div className="space-y-2">
                            {coaches[currentIndex].achievements.map((achievement, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <Award className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              prevSlide();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 10000);
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              nextSlide();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 10000);
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {coaches.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Coach Cards Preview */}
        <div className="mt-12 grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onClick={() => {
                goToSlide(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000);
              }}
              className={`cursor-pointer p-4 rounded-xl transition-all duration-300 ${
                index === currentIndex 
                  ? 'gradient-card border-yellow-400' 
                  : 'bg-black/30 hover:bg-black/50 border border-transparent hover:border-yellow-400/30'
              }`}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-black font-bold text-lg">
                    {coach.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{coach.name}</h4>
                <p className="text-xs text-gray-400">{coach.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
