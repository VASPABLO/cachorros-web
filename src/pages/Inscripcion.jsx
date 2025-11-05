import React from 'react';
import SEO from '@/components/SEO';
import Registration from '@/components/Registration';

const Inscripcion = () => {
  return (
    <>
      <SEO 
        title="Inscripción"
        description="Inscríbete en Proyecto Cachorros. Mensualidad de ₡3000, entrenamientos 2 veces por semana. Formulario de inscripción online para todas nuestras categorías de fútbol."
        keywords="inscripción fútbol, registro cachorros, matrícula fútbol, costo mensualidad, inscribirse fútbol infantil, Buenos Aires"
      />
      <div className="pt-16">
        <Registration />
      </div>
    </>
  );
};

export default Inscripcion;
