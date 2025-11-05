
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Categories = () => {
  const swiperRef = useRef(null);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (category) => {
    setModalImage(category);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const categories = [
    {
      name: "Décima",
      age: "2018-2019-2020",
      schedule: "2 veces a la semana",
      color: "from-yellow-400 to-orange-500",
      image: "/img/decima.jpg"
    },
    {
      name: "Novena",
      age: "2016-2017", 
      schedule: "2 veces a la semana",
      color: "from-orange-500 to-red-500",
      image: "/img/galeria2.png"
    },
    {
      name: "Octava",
      age: "2014-2015",
      schedule: "2 veces a la semana", 
      color: "from-red-500 to-purple-500",
      image: "/img/octava.png"
    },
    {
      name: "Séptima",
      age: "2012-2013",
      schedule: "2 veces a la semana",
      color: "from-purple-500 to-blue-500",
      image: "/img/septima.png"
    },
    {
      name: "Sexta",
      age: "2010-2011",
      schedule: "2 veces a la semana",
      color: "from-blue-500 to-green-500",
      image: "/img/sexta.png"
    },
    {
      name: "Quinta",
      age: "2008-2009",
      schedule: "2 veces a la semana",
      color: "from-green-500 to-teal-500",
      image: "/img/quinta.png"
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
          <h2 className="text-5xl md:text-6xl font-black notion-heading text-yellow-400 mb-6">
            CATEGORÍAS
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Programas especializados para cada etapa del desarrollo futbolístico
          </p>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="gradient-card p-6 rounded-xl text-center">
            <p className="text-lg md:text-xl text-gray-300">
              <span className="text-yellow-400 font-bold">Edades</span> • <span className="text-yellow-400 font-bold">Entrenamientos</span> 
            </p>
          </div>
        </motion.div>

        {/* Categories Table */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          {/* Desktop Table */}
          <div className="hidden md:block gradient-card rounded-2xl p-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-yellow-400/30">
                  <th className="text-left p-4 text-yellow-400 font-bold text-lg">CATEGORÍA</th>
                  <th className="text-left p-4 text-yellow-400 font-bold text-lg">EDAD</th>
                  <th className="text-left p-4 text-yellow-400 font-bold text-lg">Entrenamientos</th>
            
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <motion.tr
                    key={category.name}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="border-b border-white/10 hover:bg-black/50 transition-all duration-300"
                  >
                    <td className="p-4 text-yellow-400 font-bold text-xl">
                      {category.name}
                    </td>
                    <td className="p-4 text-white font-medium">{category.age}</td>
                    <td className="p-4 text-white">{category.schedule}</td>
                    <td className="p-4 text-white font-bold text-xl">{category.price}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="gradient-card rounded-xl p-5 border border-white/10"
              >
                <div className="text-2xl font-bold text-yellow-400 mb-4">
                  {category.name}
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-yellow-400 font-semibold">Edad:</span>
                    <span className="text-white">{category.age}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-white/10">
                    <span className="text-yellow-400 font-semibold">Entrenamientos:</span>
                    <span className="text-white">{category.schedule}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Slider de Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8">
            GALERÍA DE CATEGORÍAS
          </h3>
          
          <div className="relative px-4 py-8">
            <Swiper
              ref={swiperRef}
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: true,
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
              className="w-full max-w-5xl mx-auto"
            >
              {categories.map((category, index) => (
                <SwiperSlide 
                  key={index}
                  className="!w-[280px] sm:!w-[350px] md:!w-[450px] lg:!w-[500px]"
                >
                  <div 
                    className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4] cursor-pointer hover:shadow-yellow-400/50 transition-shadow duration-300 group"
                    onClick={() => openModal(category)}
                  >
                    <img
                      src={category.image}
                      alt={`Categoría ${category.name}`}
                      className="w-full h-full object-contain bg-black"
                      onError={(e) => {
                        e.target.src = '/img/galaria1.png'; // Imagen por defecto si falla
                      }}
                    />
                    
                    {/* Overlay con "Ver imagen" */}
                    <div className="absolute inset-0 bg-gray-400/0 group-hover:bg-gray-400/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3 shadow-xl">
                          <p className="text-black font-bold text-lg">Ver imagen</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                      <h4 className="text-3xl font-bold mb-1 text-white">
                        {category.name}
                      </h4>
                      <p className="text-lg font-normal text-white">{category.age}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-all shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-all shadow-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal para ver imagen completa */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-all shadow-lg z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Imagen en modal */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={modalImage.image}
                  alt={`Categoría ${modalImage.name}`}
                  className="w-full h-auto max-h-[85vh] object-contain"
                  onError={(e) => {
                    e.target.src = '/img/galaria1.png';
                  }}
                />
              </div>

              {/* Instrucción de cerrar */}
              <p className="text-center text-gray-400 mt-4 text-sm">
                Haz clic fuera de la imagen o en el botón X para cerrar
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Categories;
