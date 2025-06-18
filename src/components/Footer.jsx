
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1CSgy3dMdG/", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
    
  ];

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Nosotros", href: "#sobre-nosotros" },
    { name: "Categorías", href: "#categorias" },
    { name: "Entrenadores", href: "#entrenadores" },
    { name: "Inscripción", href: "#inscripcion" }
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-50 h-30 bg-gradient-to-r white to-yellow-600 rounded-full flex items-center justify-center">
                          <img 
                            src="/img/logo.png" // Ruta de la imagen de tu logo
                            alt="Logo" 
                            className="w-15 h-10 object-cover" // Ajusta el tamaño de la imagen y asegúrate de que cubra el contenedor
                          />
                        </div>
              <span className="text-2xl font-bold gradient-text">CACHORROS</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Formando campeones del futuro con pasión, disciplina y dedicación. 
              Más que una escuela de fútbol, somos una familia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2 }}
                  className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-yellow-400 mb-4 block">Enlaces Rápidos</span>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-yellow-400 mb-4 block">Contacto</span>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <p className="text-gray-300">Buenos Aires</p>
                  <p className="text-gray-300">Costa Rica</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <p className="text-gray-300">(+506) 8882-6308</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <p className="text-gray-300">info@cachorros.com</p>
              </div>
            </div>
          </motion.div>

          {/* Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-yellow-400 mb-4 block">Horarios</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300 font-medium">Lunes - Viernes</p>
                  <p className="text-gray-400 text-sm">3:00 PM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300 font-medium">Sábados</p>
                  <p className="text-gray-400 text-sm">8:00 AM - 12:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <p className="text-gray-300 font-medium">Domingos</p>
                  <p className="text-gray-400 text-sm">Cerrado</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Escuela de Fútbol Cachorros. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Formando campeones desde 2010 🏆
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
