
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';
import Banners from './Banners';

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
        {/* Componente Banners */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Banners />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black notion-heading text-yellow-400 mb-6">
            SOBRE NOSOTROS
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            El Proyecto Cachorros se encuentra ubicado en el cantón de Buenos Aires de Puntarenas, se enfoca en el desarrollo deportivo por medio del fútbol en la formación deportiva de los niños y jóvenes del cantón de ambos géneros.
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
                className="w-full h-[500px] md:h-[600px] object-cover transform hover:scale-105 transition-transform duration-500" 
                alt="Equipo de fútbol Cachorros celebrando"
               src="img/galaria1.png" />
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
                Formando Campeones desde el 2022.
              </h3>
              <p className="text-lg text-white leading-relaxed">
                EActualmente se cuenta alrededor de 120 estudiantes, 
                donde en un porcentaje alto son de los alrededores del
                 centro de Buenos Aires pero también se cuenta con 
                 muchachos de comunidades como el Socorro, Peje, 
                 Santa Marta, Santa Rosa, Ujarras, Cabagra, 
                 Potrero Grande, Térraba, Boruca, Changuena entre otros.
              </p>
              <p className="text-lg text-white leading-relaxed">
                En cachorroas, nos especializamos en un enfoque personalizado 
                de enseñanza que garantiza que cada niño o niña reciba la 
                atención y el entrenamiento individualizado que necesita. 
                Sabemos que cada estudiante es único, con diferentes ritmos 
                y estilos de aprendizaje. Por eso, adaptamos nuestras estrategias 
                pedagógicas para ofrecer una experiencia educativa completa y 
                ajustada a las necesidades específicas de cada niño. 
                Nuestro objetivo es proporcionar un ambiente que fomente el 
                desarrollo de habilidades tanto académicas como sociales, 
                ayudando a cada estudiante a alcanzar su máximo potencial educativo
                 y personal. Gracias a este enfoque centrado en el alumno, 
                 aseguramos que cada niño o niña tenga las herramientas necesarias 
                 para sobresalir y crecer en todos los aspectos de su vida.
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
                    <p className="text-white">{feature.description}</p>
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
