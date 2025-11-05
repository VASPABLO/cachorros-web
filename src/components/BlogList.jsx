import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Apple, Dumbbell, Brain, HeartPulse, X } from 'lucide-react';

const BlogList = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      category: 'Alimentación -- Leer blog --',
      icon: <Apple className="w-6 h-6" />,
      title: 'Nutrición para Jóvenes Futbolistas',
      excerpt: 'Una alimentación adecuada es fundamental para el rendimiento deportivo.',
      color: 'bg-black pt-8',
      content: {
        intro: 'La alimentación es clave para el desarrollo y rendimiento de jóvenes futbolistas. Una dieta balanceada proporciona la energía y nutrientes necesarios para entrenar y competir.',
        beforeMatch: [
          'Consumir una comida rica en carbohidratos 3-4 horas antes del partido',
          'Incluir proteínas magras (pollo, pescado, huevos)',
          'Evitar alimentos pesados o con mucha grasa',
          'Hidratarse constantemente con agua',
          'Un snack ligero 1 hora antes (banana, barra energética)'
        ],
        duringMatch: [
          'Beber agua cada 15-20 minutos en pequeños sorbos',
          'Consumir bebidas isotónicas si el partido dura más de 60 minutos',
          'Evitar bebidas muy frías',
          'Si hay oportunidad en el descanso, fruta fresca (naranja, sandía)'
        ],
        afterMatch: [
          'Rehidratarse inmediatamente después del partido',
          'Consumir proteínas y carbohidratos en los primeros 30 minutos',
          'Batido de recuperación o leche chocolatada',
          'Comida completa dentro de las 2 horas siguientes',
          'Incluir vegetales y frutas para vitaminas y minerales'
        ]
      }
    },
    {
      id: 2,
      category: 'Ejercicios Físicos -- Leer blog --',
      icon: <Dumbbell className="w-6 h-6" />,
      title: 'Preparación Física para el Fútbol',
      excerpt: 'Ejercicios específicos para mejorar velocidad, resistencia y fuerza.',
      color: 'bg-black pt-8',
      content: {
        intro: 'La preparación física es esencial para prevenir lesiones y mejorar el rendimiento en el campo. Estos ejercicios deben adaptarse a la edad y nivel del jugador.',
        beforeMatch: [
          'Calentamiento dinámico de 15-20 minutos',
          'Trote suave y progresivo',
          'Movilidad articular (tobillos, rodillas, cadera)',
          'Estiramientos dinámicos (no estáticos)',
          'Ejercicios de coordinación y agilidad',
          'Aceleraciones cortas progresivas'
        ],
        duringMatch: [
          'Mantener una postura corporal correcta',
          'Respiración controlada durante el esfuerzo',
          'Cambios de ritmo progresivos',
          'Atención a señales de fatiga muscular',
          'Aprovechar pausas para recuperar'
        ],
        afterMatch: [
          'Enfriamiento con trote suave 5-10 minutos',
          'Estiramientos estáticos de todos los grupos musculares',
          'Ejercicios de flexibilidad',
          'Rodillo de espuma (foam roller) para masaje muscular',
          'Descanso activo en los días siguientes'
        ]
      }
    },
    {
      id: 3,
      category: 'Ejercicios Tácticos -- Leer blog --',
      icon: <Brain className="w-6 h-6" />,
      title: 'Desarrollo Táctico y Estrategia',
      excerpt: 'Conceptos y ejercicios para mejorar la comprensión del juego.',
      color: 'bg-black pt-8',
      content: {
        intro: 'El aspecto táctico del fútbol es tan importante como el físico. Entender el juego, posicionarse correctamente y tomar decisiones rápidas marca la diferencia.',
        beforeMatch: [
          'Revisión del plan táctico del equipo',
          'Análisis del rival (fortalezas y debilidades)',
          'Practicar jugadas ensayadas (tiros libres, corners)',
          'Visualización mental del partido',
          'Rondos y ejercicios de posesión',
          'Definir roles y responsabilidades en el campo'
        ],
        duringMatch: [
          'Comunicación constante con compañeros',
          'Mantener la forma táctica del equipo',
          'Adaptarse a los cambios del rival',
          'Tomar decisiones rápidas y efectivas',
          'Aprovechar espacios y transiciones',
          'Seguir instrucciones del entrenador'
        ],
        afterMatch: [
          'Análisis del rendimiento táctico',
          'Revisar jugadas clave (éxitos y errores)',
          'Identificar áreas de mejora',
          'Feedback constructivo del entrenador',
          'Video análisis si está disponible',
          'Establecer objetivos para el próximo partido'
        ]
      }
    },
    {
      id: 4,
      category: 'Recuperación Muscular -- Leer blog --  ',
      icon: <HeartPulse className="w-6 h-6" />,
      title: 'Recuperación y Prevención de Lesiones',
      excerpt: 'Técnicas para recuperarse adecuadamente y prevenir lesiones.',
      color: 'bg-black pt-8',
      content: {
        intro: 'La recuperación muscular es tan importante como el entrenamiento. Una buena recuperación previene lesiones y mejora el rendimiento a largo plazo.',
        beforeMatch: [
          'Dormir 8-9 horas la noche anterior',
          'No entrenar intensamente 24 horas antes',
          'Masaje suave para activar la circulación',
          'Baño tibio para relajar músculos',
          'Revisión de cualquier molestia o dolor',
          'Vendajes preventivos si es necesario'
        ],
        duringMatch: [
          'Atención inmediata a cualquier dolor',
          'No forzar si hay molestias musculares',
          'Aplicar hielo en golpes inmediatamente',
          'Comunicar cualquier lesión al cuerpo técnico',
          'Evitar movimientos bruscos si hay fatiga extrema'
        ],
        afterMatch: [
          'Baño de contraste (agua fría y caliente alternadas)',
          'Masaje de descarga muscular',
          'Aplicar hielo en zonas sobrecargadas',
          'Elevación de piernas para mejorar circulación',
          'Compresión con vendajes si hay inflamación',
          'Descanso adecuado (8-9 horas de sueño)',
          'Día de recuperación activa (caminar, nadar suave)',
          'Hidratación continua 24-48 horas post-partido'
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Blog de Consejos
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Tips y recomendaciones para mejorar tu rendimiento en el fútbol
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10"
              onClick={() => setSelectedArticle(article)}
            >
              <div className={`${article.color} p-4 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    {article.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    {article.category}
                  </h3>
                </div>
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-yellow-400 mb-3">
                  {article.title}
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-black border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`${selectedArticle.color} p-6 sticky top-0 z-10`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-lg">
                      {selectedArticle.icon}
                    </div>
                    <div>
                      <p className="text-white/80 text-sm">{selectedArticle.category}</p>
                      <h2 className="text-2xl font-bold text-white">
                        {selectedArticle.title}
                      </h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 md:p-6 space-y-8">
                <p className="text-white text-base md:text-lg leading-relaxed">
                  {selectedArticle.content.intro}
                </p>

                {/* Tabla Responsiva */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left p-3 md:p-4 text-yellow-400 font-bold text-lg md:text-xl">
                          Antes del Encuentro
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedArticle.content.beforeMatch.map((tip, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-white/10 hover:bg-white/5"
                        >
                          <td className="p-3 md:p-4 text-white text-sm md:text-base">
                            <span className="flex items-start gap-2 md:gap-3">
                              <span className="text-yellow-400 font-bold mt-1 flex-shrink-0">•</span>
                              <span>{tip}</span>
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left p-3 md:p-4 text-yellow-400 font-bold text-lg md:text-xl">
                          Durante el Encuentro
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedArticle.content.duringMatch.map((tip, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-white/10 hover:bg-white/5"
                        >
                          <td className="p-3 md:p-4 text-white text-sm md:text-base">
                            <span className="flex items-start gap-2 md:gap-3">
                              <span className="text-yellow-400 font-bold mt-1 flex-shrink-0">•</span>
                              <span>{tip}</span>
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left p-3 md:p-4 text-yellow-400 font-bold text-lg md:text-xl">
                          Después del Encuentro
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedArticle.content.afterMatch.map((tip, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-white/10 hover:bg-white/5"
                        >
                          <td className="p-3 md:p-4 text-white text-sm md:text-base">
                            <span className="flex items-start gap-2 md:gap-3">
                              <span className="text-yellow-400 font-bold mt-1 flex-shrink-0">•</span>
                              <span>{tip}</span>
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogList;
