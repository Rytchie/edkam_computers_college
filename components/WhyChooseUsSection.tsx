
import React from 'react';
import { BENEFITS_DATA } from '../constants/constants';
import { Benefit } from '../types';

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text-light-primary dark:text-white">
            Why Choose <span className="text-brand-accent-blue">Edkam?</span>
          </h2>
          <p className="mt-4 text-lg text-brand-text-light-secondary dark:text-brand-secondary-text max-w-2xl mx-auto">
            We provide a transformative learning experience designed for your success in the tech industry.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS_DATA.map((benefit: Benefit, index: number) => (
            <div 
              key={benefit.id} 
              className="bg-brand-bg-light-card dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg dark:shadow-lg text-center transition-all duration-300 ease-in-out hover:shadow-brand-accent-blue/20 dark:hover:shadow-brand-accent-blue/30 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center items-center mb-6">
                <div className="p-4 bg-slate-100 dark:bg-slate-700 rounded-full">
                  {React.cloneElement(benefit.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-brand-text-light-primary dark:text-white mb-3">{benefit.title}</h3>
              <p className="text-brand-text-light-secondary dark:text-brand-secondary-text text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;