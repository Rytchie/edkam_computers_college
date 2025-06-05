
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants/constants';
import type { FAQItem } from '../types';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text-light-primary dark:text-white">
            Frequently Asked <span className="text-brand-accent-purple">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-brand-text-light-secondary dark:text-brand-secondary-text max-w-2xl mx-auto">
            Find answers to common questions about Edkam Computers Training College.
          </p>
        </div>
        <div className="space-y-6">
          {FAQ_DATA.map((item: FAQItem) => (
            <div key={item.id} className="bg-brand-bg-light-card dark:bg-slate-800/60 backdrop-blur-sm rounded-xl shadow-lg dark:shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-brand-accent-purple/20 dark:hover:shadow-brand-accent-purple/30">
              <button
                onClick={() => toggleFAQ(item.id)}
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                aria-expanded={activeIndex === item.id}
                aria-controls={`faq-answer-${item.id}`}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-brand-text-light-primary dark:text-white">{item.question}</h3>
                <span className={`transform transition-transform duration-300 ${activeIndex === item.id ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-6 h-6 text-brand-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${item.id}`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === item.id ? 'max-h-[500px] opacity-100 animate-faq-expand' : 'max-h-0 opacity-0 animate-faq-collapse'}`}
              >
                <p className="text-brand-text-light-secondary dark:text-brand-secondary-text p-6 pt-0 text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;