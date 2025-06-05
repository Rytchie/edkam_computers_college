
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CoursesSection from '../components/CoursesSection';
import AboutUsSection from '../components/AboutUsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
// ApplicationPage is removed
import StudentPortalPage from '../components/student_portal/StudentPortalPage';
import FAQSection from '../components/FAQSection';
import Chatbot from '../components/Chatbot';
import ApplicationModal from '../components/ApplicationModal'; // Import new modal

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.substring(1).split('?')[0] || 'hero');
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const openApplicationModal = () => setIsApplicationModalOpen(true);
  const closeApplicationModal = () => setIsApplicationModalOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1).split('?')[0];
      const newPath = newHash || 'hero';
      setCurrentPath(newPath);

      const mainPageSections = ['hero', 'courses', 'about', 'why-choose-us', 'faq', 'testimonials', 'contact'];
      
      if (mainPageSections.includes(newPath)) {
        setTimeout(() => {
          const element = document.getElementById(newPath); 
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (newPath === 'hero') { 
             window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else if (newPath === 'portal') { 
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange(); 
    window.addEventListener('hashchange', handleHashChange, false);
    return () => window.removeEventListener('hashchange', handleHashChange, false);
  }, []);

  const renderContent = () => {
    if (currentPath === 'portal') {
      return <StudentPortalPage openApplicationModal={openApplicationModal} />;
    }
    return (
      <>
        <HeroSection openApplicationModal={openApplicationModal} />
        <div className="bg-animated-gradient-light dark:bg-animated-gradient bg-400% animate-gradient-bg">
          <CoursesSection openApplicationModal={openApplicationModal} />
          <AboutUsSection />
          <WhyChooseUsSection />
          <FAQSection /> 
          <TestimonialsSection />
          <ContactSection />
        </div>
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg-light dark:bg-brand-dark text-brand-text-light-primary dark:text-brand-light-text">
      <Navbar />
      <main className="flex-grow pt-20"> 
        {renderContent()}
      </main>
      <Chatbot />
      <Footer />
      {isApplicationModalOpen && (
        <ApplicationModal 
          isOpen={isApplicationModalOpen} 
          onClose={closeApplicationModal} 
        />
      )}
    </div>
  );
};

export default App;