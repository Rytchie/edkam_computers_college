
import React from 'react';
import { COURSES_DATA } from '../dist/assets/constants';
import CourseCard from './CourseCard';

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Explore Our <span className="text-brand-accent-purple">Programs</span>
          </h2>
          <p className="mt-4 text-lg text-brand-secondary-text max-w-2xl mx-auto">
            Choose from a variety of cutting-edge courses designed to equip you with in-demand tech skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {COURSES_DATA.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
