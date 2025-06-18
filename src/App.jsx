
import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import MissionVision from '@/components/MissionVision';
import Categories from '@/components/Categories';
import Coaches from '@/components/Coaches';
import Achievements from '@/components/Achievements';
import Registration from '@/components/Registration';
import PaymentDates from '@/components/PaymentDates';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <MissionVision />
        <Categories />
        <Coaches />
        <Achievements />
        <Registration />
        <PaymentDates />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default App;
