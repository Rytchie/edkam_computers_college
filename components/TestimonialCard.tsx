
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-brand-accent-purple/30 animate-fade-in-up">
      <div className="flex-grow mb-6">
        <p className="text-brand-light-text italic">"{testimonial.feedback}"</p>
      </div>
      <div className="flex items-center mt-auto pt-6 border-t border-slate-700">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-brand-accent-purple object-cover"/>
        <div>
          <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
          <p className="text-sm text-brand-accent-purple">{testimonial.course}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
