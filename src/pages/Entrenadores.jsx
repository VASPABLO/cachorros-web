import React from 'react';
import SEO from '@/components/SEO';
import Coaches from '@/components/Coaches';

const Entrenadores = () => {
  return (
    <>
      <SEO 
        title="Entrenadores"
        description="Conoce nuestro equipo de entrenadores profesionales: Lic. Cristian Quesada González (Licencia A), Douglas Ortíz Irigoyen (Licencia C), Oscar Espinoza Sibaja y Jean Paul Quirós (Especialista en Porteros)."
        keywords="entrenadores fútbol, coaches, licencia A fútbol, licencia C fútbol, entrenador porteros, profesionales fútbol, Buenos Aires"
      />
      <div className="pt-16">
        <Coaches />
      </div>
    </>
  );
};

export default Entrenadores;
