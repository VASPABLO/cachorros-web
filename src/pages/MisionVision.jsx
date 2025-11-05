import React from 'react';
import SEO from '@/components/SEO';
import MissionVision from '@/components/MissionVision';

const MisionVision = () => {
  return (
    <>
      <SEO 
        title="Misión y Visión"
        description="Misión: Crear espacios deportivos para niños y jóvenes mediante actividades futbolísticas. Visión: Conformar categorías de liga menor, representar al Cantón, incentivar la participación deportiva y promover la salud."
        keywords="misión visión, valores deportivos, formación integral, desarrollo juvenil, liga menor, fútbol educativo, Buenos Aires"
      />
      <div className="pt-16">
        <MissionVision />
      </div>
    </>
  );
};

export default MisionVision;
