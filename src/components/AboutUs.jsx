
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Users,
      title: "Comunidad",
      description: "Una familia unida por la pasión del fútbol"
    },
    {
      icon: Target,
      title: "Excelencia",
      description: "Entrenamiento de alta calidad para todos los niveles"
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amor por el deporte y el desarrollo personal"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black notion-heading gradient-text mb-6">
            SOBRE NOSOTROS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos más que una escuela de fútbol, somos una familia que forma campeones dentro y fuera del campo
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img  
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500" 
                alt="Equipo de fútbol Cachorros celebrando"
               src="src/imgimg/quinta.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-yellow-400">
                Formando Campeones desde 2010
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                En Cachorros creemos que el fútbol es más que un deporte. Es una herramienta 
                poderosa para el desarrollo integral de nuestros jóvenes atletas. Combinamos 
                técnica, táctica y valores para formar no solo mejores jugadores, sino mejores personas.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nuestro enfoque personalizado garantiza que cada cachorro reciba la atención 
                y el entrenamiento que necesita para alcanzar su máximo potencial.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 gradient-card rounded-xl"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
