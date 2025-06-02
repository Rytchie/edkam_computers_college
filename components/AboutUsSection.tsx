
import React from 'react';
import { STATS_DATA } from '../constants/constants';
import { StatItem } from '../types';

const AboutUsSection: React.FC = () => {
  // Generate a random number to ensure a different image on each load if desired,
  // or use a fixed seed for a consistent "random" image.
  // For a truly different image on most reloads, Math.random() is fine.
  const randomImageQuery = Math.floor(Math.random() * 1000); // To vary the image

  return (
    <section 
      id="about" 
      className="py-16 md:py-24 bg-transparent"> {/* Changed background to transparent and adjusted padding */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Block - Centered, on gradient */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text-light-primary dark:text-white">
            About <span className="text-brand-accent-blue">Edkam Computers</span>
          </h2>
        </div>

        {/* Content Block - Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-start"> {/* items-start might be better if columns have varying content height */}
          {/* Left Column: Text and Image on a card/panel */}
          <div className="bg-brand-bg-light-card dark:bg-slate-800/60 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-xl dark:shadow-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <p className="text-lg text-brand-text-light-secondary dark:text-brand-secondary-text mb-4">
              Edkam Computers Training College is a premier institution dedicated to providing high-quality education in the latest computer technologies. Our mission is to empower individuals with the skills and knowledge needed to thrive in the ever-evolving digital landscape.
            </p>
            <p className="text-lg text-brand-text-light-secondary dark:text-brand-secondary-text mb-6">
              We believe in a practical, hands-on approach to learning, ensuring our students are not just theoretically sound but also job-ready. Our experienced instructors, state-of-the-art facilities, and strong industry connections make Edkam the ideal place to start or advance your tech career.
            </p>
            <img 
              src={`https://picsum.photos/seed/${randomImageQuery}/800/600`} 
              alt="Illustrative image for Edkam Computers" 
              className="rounded-lg shadow-lg object-cover w-full mt-6 aspect-[4/3]" // Added aspect ratio for consistency
            />
          </div>

          {/* Right Column: Stats Cards */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {STATS_DATA.map((stat: StatItem) => (
              <div key={stat.label} className="bg-brand-bg-light-card dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl dark:shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-brand-accent-purple/20 dark:hover:shadow-brand-accent-purple/30">
                <div className="text-4xl md:text-5xl font-bold text-brand-accent-purple mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-brand-text-light-primary dark:text-brand-light-text">{stat.label}</div>
              </div>
            ))}
            <div className="bg-brand-bg-light-card dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl shadow-xl dark:shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-brand-accent-blue/20 dark:hover:shadow-brand-accent-blue/30">
                <h3 className="text-xl font-semibold text-brand-accent-blue mb-2">Dedicated Faculty</h3>
                <p className="text-sm text-brand-text-light-secondary dark:text-brand-secondary-text">Our team of passionate educators and industry experts are committed to your success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
