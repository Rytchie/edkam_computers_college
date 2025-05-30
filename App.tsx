
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import AboutUsSection from './components/AboutUsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="bg-animated-gradient bg-400% animate-gradient-bg">
          <CoursesSection />
          <AboutUsSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
