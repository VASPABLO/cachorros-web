import React from 'react';
import SEO from '@/components/SEO';
import Categories from '@/components/Categories';

const Categorias = () => {
  return (
    <>
      <SEO 
        title="Categorías"
        description="Conoce las 6 categorías de Proyecto Cachorros: Décima, Novena, Octava, Séptima, Sexta y Quinta. Programas especializados para cada etapa del desarrollo futbolístico desde 2008 hasta 2020."
        keywords="categorías fútbol, décima, novena, octava, séptima, sexta, quinta, fútbol menores, clases de fútbol, entrenamientos, Buenos Aires"
      />
      <div className="pt-16">
        <Categories />
      </div>
    </>
  );
};

export default Categorias;
