import React from 'react';
import SEO from '../components/SEO';
import BlogList from '../components/BlogList';

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog - Consejos y Tips | Escuela de Fútbol Cachorros"
        description="Consejos de alimentación, ejercicios físicos, tácticos y recuperación muscular para futbolistas. Tips antes, durante y después de los partidos."
        keywords="consejos fútbol, alimentación deportiva, ejercicios físicos, tácticas fútbol, recuperación muscular, tips futbolistas, entrenamiento fútbol"
      />
      <BlogList />
    </>
  );
};

export default Blog;
