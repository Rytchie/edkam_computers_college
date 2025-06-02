
import React, { useEffect, useState } from 'react';
import Button from './Button';

interface HeroSectionProps {
  openApplicationModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ openApplicationModal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section id="hero" className="relative bg-brand-bg-light dark:bg-brand-dark-blue min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-20">
        {/* Subtle background pattern or effect if desired */}
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className={`text-center md:text-left transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-text-light-primary dark:text-white leading-tight">
              Edkam Computers Training College: <span className="block text-brand-accent-purple animate-subtle-pulse">Ongoing Intake</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-brand-text-light-secondary dark:text-brand-secondary-text max-w-xl mx-auto md:mx-0">
              Unlock your potential with Edkam Computers Training College's ongoing intake. Explore our wide range of programs and elevate your skills for the digital age.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={openApplicationModal} 
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.hash = 'courses'}
                className="border-brand-accent-purple text-brand-accent-purple hover:bg-brand-accent-purple hover:text-white focus:ring-brand-accent-purple"
              >
                View Courses
              </Button>
            </div>
          </div>
          <div className={`relative mt-12 md:mt-0 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <img
              src="https://picsum.photos/seed/graduation/800/600" 
              alt="Edkam Computers Training College Campus"
              className="rounded-xl shadow-2xl object-cover w-full h-auto md:h-[500px] transform hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-light dark:from-brand-dark-blue via-transparent to-transparent opacity-50 dark:opacity-50 rounded-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-accent-purple opacity-10 dark:opacity-20 rounded-full filter blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-accent-blue opacity-10 dark:opacity-20 rounded-full filter blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;