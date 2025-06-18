
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CreditCard, AlertCircle, CheckCircle, Clock } from 'lucide-react';

const PaymentDates = () => {
  const paymentSchedule = [
    {
      month: "Los pagos se realizan los",
      dueDate: "15 del mes" ,
      status: "completed",
      amount: "Tadas las categorias"
    }
    
  ];

  const paymentMethods = [
    {
      method: "Transferencia Bancaria",
      details: "Banco Nacional - Cuenta: 123-456-789",
      icon: CreditCard
    },
    {
      method: "Pago en Efectivo",
      details: "En nuestras instalaciones durante horarios de oficina",
      icon: Calendar
    },
    {
      method: "Pago Móvil",
      details: "A través de aplicaciones bancarias móviles",
      icon: CreditCard
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'upcoming':
        return <Clock className="w-5 h-5 text-yellow-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-red-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'border-green-400 bg-green-400/10';
      case 'upcoming':
        return 'border-yellow-400 bg-yellow-400/10';
      default:
        return 'border-red-400 bg-red-400/10';
    }
  };

  return (
    <section id="fechas-pago" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black notion-heading gradient-text mb-6">
            FECHAS DE PAGO
          </h2>
        
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Schedule */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="gradient-card p-6 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center">
                <Calendar className="w-8 h-8 mr-3" />
               Recordatorio 
              </h3>
              
              <div className="space-y-4">
                {paymentSchedule.map((payment, index) => (
                  <motion.div
                    key={payment.month}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className={`p-4 rounded-lg border ${getStatusColor(payment.status)} transition-all duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(payment.status)}
                        <div>
                          <h4 className="text-lg font-bold text-white">{payment.month}</h4>
                          <p className="text-gray-300 text-xl ">{payment.dueDate}</p>
                        </div>
                      </div>
                      
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Payment Methods & Info */}
          <div className="space-y-6">
            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="gradient-card p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <CreditCard className="w-6 h-6 mr-2" />
                Métodos de Pago
              </h3>
              
              <div className="space-y-4">
                {paymentMethods.map((method, index) => (
                  <motion.div
                    key={method.method}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="p-4 bg-black/30 rounded-lg border border-gray-600 hover:border-yellow-400/50 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <method.icon className="w-5 h-5 text-yellow-400 mt-1" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">{method.method}</h4>
                        <p className="text-gray-300 text-sm">{method.details}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact for Payment */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="gradient-card p-6 rounded-2xl text-center"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                ¿Dudas sobre pagos?
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Contáctanos para resolver cualquier consulta sobre pagos y descuentos
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-white">📞 Sinpe (506) 8708-3040</p>
                <p className="text-white">📧 Laura Beita</p>
                <p className="text-white">🕒 15 de cada mes</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDates;
