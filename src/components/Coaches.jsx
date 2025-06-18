
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Coaches = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const coaches = [
    {
      name: "Cristian",
      position: "Director Técnico",
      experience: "15 años de experiencia",
      speciality: "Formación juvenil y táctica",
      achievements: ["Licencia UEFA B", "Ex-jugador profesional", "Campeón Liga Regional 2018"],
      description: "Especialista en desarrollo de jóvenes talentos con metodología europea."
    },
    {
      name: "Duglas",
      position: "Entrenadora Categorías Menores", 
      experience: "8 años de experiencia",
      speciality: "Desarrollo motriz y técnica básica",
      achievements: ["Licencia CONMEBOL", "Psicóloga Deportiva", "Mejor Entrenadora 2022"],
      description: "Experta en psicología deportiva y desarrollo integral de niños."
    },
    
    
    
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
          <h2 className="text-5xl md:text-6xl font-black notion-heading gradient-text mb-6">
            NUESTROS ENTRENADORES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un equipo de profesionales apasionados y altamente calificados
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
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
                         src="src/img/entrenador.png" />
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
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {coaches.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
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
              onClick={() => goToSlide(index)}
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
