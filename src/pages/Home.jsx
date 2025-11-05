import React from 'react';
import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';

const Home = () => {
  return (
    <>
      <SEO 
        title="Inicio"
        description="Proyecto Cachorros - Escuela de Fútbol en Buenos Aires. Formamos campeones del futuro con pasión, disciplina y dedicación. Categorías desde 2008 hasta 2020."
        keywords="escuela de fútbol, Cachorros, Buenos Aires, fútbol infantil, fútbol juvenil, entrenamiento fútbol, categorías menores, formación deportiva, Costa Rica"
      />
      <Hero />
      <AboutUs />
    </>
  );
};

export default Home;
