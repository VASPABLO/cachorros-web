
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Users, Target } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Campeones Regionales",
      year: "2023",
      description: "Primer lugar en el torneo regional categoría juvenil",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Medal,
      title: "Subcampeones Nacionales", 
      year: "2022",
      description: "Segundo lugar en el campeonato nacional sub-15",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: Award,
      title: "Mejor Escuela Formativa",
      year: "2023",
      description: "Reconocimiento por excelencia en formación deportiva",
      color: "from-yellow-600 to-yellow-800"
    },
    {
      icon: Star,
      title: "15 Jugadores Profesionales",
      year: "2010-2023",
      description: "Cachorros que llegaron al fútbol profesional",
      color: "from-blue-400 to-purple-500"
    },
    {
      icon: Users,
      title: "500+ Estudiantes Formados",
      year: "Desde 2010",
      description: "Jóvenes que han pasado por nuestra escuela",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: Target,
      title: "95% Satisfacción",
      year: "2023",
      description: "Índice de satisfacción de padres y estudiantes",
      color: "from-red-400 to-pink-500"
    }
  ];

  const stats = [
    { number: "13", label: "Años de experiencia", suffix: "+" },
    { number: "100", label: "Estudiantes formados", suffix: "+" },
    { number: "5", label: "Jugadores profesionales", suffix: "" },
    { number: "25", label: "Trofeos ganados", suffix: "+" }
  ];

  return (
    <section id="logros" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black notion-heading gradient-text mb-6">
            NUESTROS LOGROS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Años de dedicación reflejados en el éxito de nuestros cachorros
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center gradient-card p-6 rounded-xl"
            >
              <div className="text-4xl lg:text-5xl font-black notion-heading text-yellow-400 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="gradient-card p-6 rounded-2xl relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mr-4`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-yellow-400">{achievement.year}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 notion-heading">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center text-yellow-400 mb-8">
            HISTORIAS DE ÉXITO
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="gradient-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <img  
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                  alt="Jugador profesional egresado"
                 src="img/jugador1.png" />
                <div>
                  <h4 className="text-xl font-bold text-white">Miguel Ángel Torres</h4>
                  <p className="text-yellow-400">Jugador Profesional - Liga Nacional</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Cachorros me dio las bases técnicas y los valores que me llevaron al fútbol profesional. 
                Siempre estaré agradecido con mis entrenadores."
              </p>
            </div>

            <div className="gradient-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <img  
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                  alt="Jugadora profesional egresada"
                 src="src/img/jugador2.png" />
                <div>
                  <h4 className="text-xl font-bold text-white">Carlos Ramirez Ramírez</h4>
                  <p className="text-yellow-400">Selección Nacional Sub-20</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "En Cachorros no solo aprendí fútbol, aprendí disciplina, respeto y a nunca rendirme. 
                Hoy represento a mi país gracias a esa formación."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
