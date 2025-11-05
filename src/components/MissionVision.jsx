
import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Compass } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="mision-vision" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black notion-heading gradient-text mb-6">
            MISIÓN & VISIÓN
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nuestros pilares fundamentales que guían cada paso en la formación de nuestros cachorros
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="gradient-card p-8 rounded-2xl h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <Compass className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-4xl font-black notion-heading text-yellow-400">
                  MISIÓN
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Crear espacios deportivos para los niños y jóvenes del cantón de Buenos Aires 
                  mediante el aprovechamiento de actividades futbolísticas que brinden a los niños 
                  y jóvenes formación y actitud deportiva, así como planificar actividades 
                  internas y externas en el bienestar físico y hábitos saludables en el desarrollo 
                  de la comunidad, desde torneos, eventos y vinculación con el medio.
                </p>

                <div className="bg-black/30 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-400 font-semibold italic">
                    "Cada entrenamiento es una oportunidad de crecimiento"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="gradient-card p-8 rounded-2xl h-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mr-4">
                  <Eye className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-4xl font-black notion-heading text-yellow-400">
                  VISIÓN
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-yellow-400 font-bold mr-3 mt-1">1.</span>
                    <p className="text-gray-300 leading-relaxed">
                      Conformar categorías de liga menor según la programación del ente nacional 
                      que rige el fútbol de Liga Menor a nivel país.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <span className="text-yellow-400 font-bold mr-3 mt-1">2.</span>
                    <p className="text-gray-300 leading-relaxed">
                      Representar al Cantón en actividades futbolísticas.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <span className="text-yellow-400 font-bold mr-3 mt-1">3.</span>
                    <p className="text-gray-300 leading-relaxed">
                      Incentivar en los niños y jóvenes la participación en el deporte.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <span className="text-yellow-400 font-bold mr-3 mt-1">4.</span>
                    <p className="text-gray-300 leading-relaxed">
                      Mejorar la salud y el bienestar de los niños y jóvenes.
                    </p>
                  </div>

                  <div className="flex items-start">
                    <span className="text-yellow-400 font-bold mr-3 mt-1">5.</span>
                    <p className="text-gray-300 leading-relaxed">
                      Promover actividades extra deportivas que generen unión y sentido de 
                      pertenencia en los niños y jóvenes.
                    </p>
                  </div>
                </div>

                <div className="bg-black/30 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-yellow-400 font-semibold italic">
                    "Formando los campeones del mañana, hoy"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-yellow-400 mb-8">
            NUESTROS VALORES
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "RESPETO", desc: "Hacia compañeros, rivales y autoridades" },
              { title: "DISCIPLINA", desc: "Constancia y dedicación en cada entrenamiento" },
              { title: "TRABAJO EN EQUIPO", desc: "Juntos somos más fuertes" },
              { title: "PERSEVERANCIA", desc: "Nunca rendirse ante las dificultades" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center p-6 gradient-card rounded-xl"
              >
                <h4 className="text-xl font-bold text-yellow-400 mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
