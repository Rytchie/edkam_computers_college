
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-brand-bg-light-card dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl dark:shadow-xl h-full flex flex-col transition-shadow duration-300 ease-in-out hover:shadow-brand-accent-purple/20 dark:hover:shadow-brand-accent-purple/30 w-96 flex-shrink-0">
      <div className="flex-grow mb-6">
        <p className="text-brand-text-light-primary dark:text-brand-light-text italic text-base">"{testimonial.feedback}"</p>
      </div>
      <div className="flex items-center mt-auto pt-6 border-t border-brand-border-light dark:border-slate-700">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-brand-accent-purple object-cover"/>
        <div>
          <h4 className="text-lg font-semibold text-brand-text-light-primary dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-brand-accent-purple">{testimonial.course}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;