import React from 'react';
import { STATS_DATA } from '../constants/constants';
import { StatItem } from '../types';

const AboutUsSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              About <span className="text-brand-accent-blue">Edkam Computers</span>
            </h2>
            <p className="text-lg text-brand-secondary-text mb-4">
              Edkam Computers Training College is a premier institution dedicated to providing high-quality education in the latest computer technologies. Our mission is to empower individuals with the skills and knowledge needed to thrive in the ever-evolving digital landscape.
            </p>
            <p className="text-lg text-brand-secondary-text mb-6">
              We believe in a practical, hands-on approach to learning, ensuring our students are not just theoretically sound but also job-ready. Our experienced instructors, state-of-the-art facilities, and strong industry connections make Edkam the ideal place to start or advance your tech career.
            </p>
            <img 
              src="/sessions_learning.jpg" 
              alt="College interior" 
              className="rounded-lg shadow-xl object-cover w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-6 md:gap-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {STATS_DATA.map((stat: StatItem) => (
              <div key={stat.label} className="bg-slate-800/70 p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-brand-accent-purple/30">
                <div className="text-4xl md:text-5xl font-bold text-brand-accent-purple mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-brand-light-text">{stat.label}</div>
              </div>
            ))}
            <div className="md:col-span-2 bg-slate-800/70 p-6 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105 hover:shadow-brand-accent-blue/30">
                <h3 className="text-xl font-semibold text-brand-accent-blue mb-2">Dedicated Faculty</h3>
                <p className="text-sm text-brand-secondary-text">Our team of passionate educators and industry experts are committed to your success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;