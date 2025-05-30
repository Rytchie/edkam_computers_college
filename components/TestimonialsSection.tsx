
import React from 'react';
import { TESTIMONIALS_DATA } from '../dist/assets/constants';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Hear From Our <span className="text-brand-accent-purple">Alumni</span>
          </h2>
          <p className="mt-4 text-lg text-brand-secondary-text max-w-2xl mx-auto">
            Our graduates are making an impact. See what they have to say about their journey with Edkam.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TESTIMONIALS_DATA.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
