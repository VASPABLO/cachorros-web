
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar, Trophy } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      name: "Decima",
      age: "2018-2019-2020",
      schedule: "Sábados 9:00 AM",
      players: "12 jugadores",
      focus: "Desarrollo motriz básico",
      price: "¢3000/mes",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Novena",
      age: "2016 - 2017", 
      schedule: "Martes y Jueves 4:00 PM",
      players: "12-14 jugadores",
      focus: "Fundamentos técnicos",
      price: "¢3000/mes",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Octava",
      age: "2014 - 2015",
      schedule: "Lunes, Miércoles y Viernes 5:00 PM", 
      players: "16-18 jugadores",
      focus: "Técnica y táctica básica",
      price: "¢3000/mes",
      color: "from-red-500 to-purple-500"
    },
    {
      name: "Setima",
      age: "2012- 2013 ",
      schedule: "Lunes a Viernes 6:00 PM",
      players: "18-20 jugadores", 
      focus: "Competencia y estrategia",
      price: "¢3000/mes",
      color: "from-purple-500 to-blue-500"
    },
    {
      name: "Sexta",
      age: "2010 -2011",
      schedule: "Entrenamientos diarios",
      players: "22-25 jugadores",
      focus: "Alto rendimiento",
      price: "¢3000/mes",
      color: "from-blue-500 to-green-500"
    },
    {
      name: "Quinta",
      age: "2008 -2009",
      schedule: "Entrenamientos diarios",
      players: "22-25 jugadores",
      focus: "Alto rendimiento",
      price: "¢3000/mes",
      color: "from-blue-500 to-green-500"
    },
    {
      name: "Cuarta",
      age: "2006 -2007",
      schedule: "Entrenamientos diarios",
      players: "22-25 jugadores",
      focus: "Alto rendimiento",
      price: "¢3000/mes",
      color: "from-blue-500 to-green-500"
    }
  ];

  return (
    <section id="categorias" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black notion-heading gradient-text mb-6">
            CATEGORÍAS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Programas especializados para cada etapa del desarrollo futbolístico
          </p>
        </motion.div>

        {/* Categories Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-full gradient-card rounded-2xl p-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Header */}
              <div className="hidden lg:grid lg:grid-cols-6 gap-4 pb-4 border-b border-yellow-400/30">
                <div className="text-yellow-400 font-bold text-lg">CATEGORÍA</div>
                <div className="text-yellow-400 font-bold text-lg">EDAD</div>
                <div className="text-yellow-400 font-bold text-lg">HORARIOS</div>
                <div className="text-yellow-400 font-bold text-lg">JUGADORES</div>
                <div className="text-yellow-400 font-bold text-lg">ENFOQUE</div>
                <div className="text-yellow-400 font-bold text-lg">PRECIO</div>
              </div>

              {/* Rows */}
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="lg:grid lg:grid-cols-6 gap-4 p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-all duration-300 border border-transparent hover:border-yellow-400/30"
                >
                  {/* Mobile Layout */}
                  <div className="lg:hidden space-y-3">
                    <div className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.name}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{category.age}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{category.schedule}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{category.players}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-yellow-400" />
                        <span className="text-gray-300">{category.focus}</span>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-yellow-400">{category.price}</div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden lg:block text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.name}
                  </div>
                  <div className="hidden lg:block text-gray-300 font-medium">{category.age}</div>
                  <div className="hidden lg:block text-gray-300">{category.schedule}</div>
                  <div className="hidden lg:block text-gray-300">{category.players}</div>
                  <div className="hidden lg:block text-gray-300">{category.focus}</div>
                  <div className="hidden lg:block text-xl font-bold text-yellow-400">{category.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="gradient-card p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              ¿No encuentras tu categoría ideal?
            </h3>
            <p className="text-gray-300 mb-4">
              Contáctanos y te ayudaremos a encontrar el programa perfecto para ti
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>✓ Evaluación gratuita</span>
              <span>✓ Clases de prueba</span>
              <span>✓ Descuentos familiares</span>
              <span>✓ Equipamiento incluido</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
