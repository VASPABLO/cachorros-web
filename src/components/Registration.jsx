
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { User, Mail, Phone, Calendar, Users, FileText } from 'lucide-react';

const Registration = () => {
  const [formData, setFormData] = useState({
    playerName: '',
    playerAge: '',
    parentName: '',
    email: '',
    phone: '',
    category: '',
    experience: '',
    medicalConditions: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const categories = [
    'CACHORROS MINI (4-6 años)',
    'CACHORROS JUNIOR (7-9 años)', 
    'CACHORROS JUVENIL (10-12 años)',
    'CACHORROS CADETE (13-15 años)',
    'CACHORROS ELITE (16-18 años)'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.playerName || !formData.parentName || !formData.email || !formData.phone || !formData.category) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive"
      });
      return;
    }

    // Save to localStorage
    const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    const newRegistration = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    registrations.push(newRegistration);
    localStorage.setItem('registrations', JSON.stringify(registrations));

    toast({
      title: "¡Inscripción Exitosa!",
      description: "Hemos recibido tu solicitud. Te contactaremos pronto para confirmar la inscripción.",
    });

    // Reset form
    setFormData({
      playerName: '',
      playerAge: '',
      parentName: '',
      email: '',
      phone: '',
      category: '',
      experience: '',
      medicalConditions: '',
      emergencyContact: '',
      emergencyPhone: ''
    });
  };

  return (
    <section id="inscripcion" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black notion-heading gradient-text mb-6">
            INSCRIPCIÓN
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ¡Únete a la familia Cachorros! Completa el formulario y comienza tu aventura futbolística
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="gradient-card p-8 rounded-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Player Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400 flex items-center">
                <User className="w-6 h-6 mr-2" />
                Información del Jugador
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Nombre Completo del Jugador *
                  </label>
                  <input
                    type="text"
                    name="playerName"
                    value={formData.playerName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Nombre completo del jugador"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Edad del Jugador *
                  </label>
                  <input
                    type="number"
                    name="playerAge"
                    value={formData.playerAge}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Edad"
                    min="4"
                    max="18"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Categoría Deseada *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Selecciona una categoría</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Experiencia Previa en Fútbol
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Describe la experiencia previa del jugador (equipos, años jugando, etc.)"
                  rows="3"
                />
              </div>
            </div>

            {/* Parent/Guardian Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                Información del Padre/Tutor
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Nombre del Padre/Tutor *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Nombre completo del padre/tutor"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Número de teléfono"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400 flex items-center">
                <Phone className="w-6 h-6 mr-2" />
                Contacto de Emergencia
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Nombre del Contacto de Emergencia
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Nombre del contacto de emergencia"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">
                    Teléfono de Emergencia
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Teléfono de emergencia"
                  />
                </div>
              </div>
            </div>

            {/* Medical Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400 flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Información Médica
              </h3>
              
              <div>
                <label className="block text-white font-medium mb-2">
                  Condiciones Médicas o Alergias
                </label>
                <textarea
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-black/50 border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Describe cualquier condición médica, alergia o medicamento que debamos conocer"
                  rows="3"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-6"
            >
              <Button
                type="submit"
                size="lg"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 text-lg rounded-full"
              >
                ENVIAR INSCRIPCIÓN
              </Button>
            </motion.div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-black/30 rounded-lg border-l-4 border-yellow-400">
              <h4 className="text-yellow-400 font-bold mb-2">Información Importante:</h4>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>• La inscripción incluye evaluación gratuita</li>
                <li>• Se requiere certificado médico para participar</li>
                <li>• El equipamiento básico está incluido en la mensualidad</li>
                <li>• Nos pondremos en contacto contigo en 24-48 horas</li>
              </ul>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
