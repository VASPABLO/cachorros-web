
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/toaster';
import SplashScreen from '@/components/SplashScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Pages
import Home from '@/pages/Home';
import Categorias from '@/pages/Categorias';
import Entrenadores from '@/pages/Entrenadores';
import MisionVision from '@/pages/MisionVision';
import Blog from '@/pages/Blog';
import Inscripcion from '@/pages/Inscripcion';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <HelmetProvider>
      <BrowserRouter>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}

      <div className="min-h-screen bg-black text-white scroll-smooth">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mision" element={<MisionVision />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/entrenadores" element={<Entrenadores />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
