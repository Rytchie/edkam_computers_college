
import React from 'react';
import { TESTIMONIALS_DATA } from '../constants/constants';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  if (!TESTIMONIALS_DATA || TESTIMONIALS_DATA.length === 0) {
    return null; 
  }

  const duplicatedTestimonials = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-bg-light-section dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text-light-primary dark:text-white">
            Hear From Our <span className="text-brand-accent-purple">Alumni</span>
          </h2>
          <p className="mt-4 text-lg text-brand-text-light-secondary dark:text-brand-secondary-text max-w-2xl mx-auto">
            Our graduates are making an impact. See what they have to say about their journey with Edkam.
          </p>
        </div>
        
        <div 
          className="overflow-hidden relative group" 
          role="region" 
          aria-roledescription="carousel" 
          aria-label="Testimonials"
        >
          <div 
            className="flex animate-slide-infinite-horizontal group-hover:[animation-play-state:paused] will-change-transform"
            aria-live="off" 
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="px-3 py-4 flex-shrink-0" 
                role="group" 
                aria-roledescription="slide"
                aria-label={`Testimonial ${index + 1} of ${duplicatedTestimonials.length}`} 
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-brand-bg-light-section dark:from-slate-900/60 via-brand-bg-light-section/50 dark:via-slate-900/30 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-brand-bg-light-section dark:from-slate-900/60 via-brand-bg-light-section/50 dark:via-slate-900/30 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;