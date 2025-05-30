
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import AboutUsSection from './components/AboutUsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ApplicationPage from './components/ApplicationPage';
import StudentPortalPage from './components/student_portal/StudentPortalPage'; // Updated Import Path

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.substring(1).split('?')[0] || 'hero');

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1).split('?')[0];
      const newPath = newHash || 'hero'; // Default to 'hero' if hash is empty
      setCurrentPath(newPath);

      if (newPath !== 'apply' && newPath !== 'portal' && newHash) {
        // Scroll to section on main page
        setTimeout(() => {
          const element = document.getElementById(newHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (newHash === 'hero') {
             window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else if (newPath === 'apply' || newPath === 'portal') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange(); 

    window.addEventListener('hashchange', handleHashChange, false);
    return () => window.removeEventListener('hashchange', handleHashChange, false);
  }, []);

  const renderContent = () => {
    if (currentPath === 'apply') {
      return <ApplicationPage />;
    }
    if (currentPath === 'portal') {
      return <StudentPortalPage />;
    }
    // Default to main page content
    return (
      <>
        <HeroSection />
        <div className="bg-animated-gradient bg-400% animate-gradient-bg">
          <CoursesSection />
          <AboutUsSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      <Navbar />
      <main className="flex-grow pt-20"> 
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;