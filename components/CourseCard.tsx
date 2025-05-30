
import React from 'react';
import { Course } from '../types';
import Button from './Button';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-brand-accent-purple/30 hover:scale-[1.02] flex flex-col h-full animate-fade-in-up">
      <img src={course.image} alt={course.title} className="w-full h-56 object-cover"/>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-brand-accent-blue mb-3">
          {/* FIX: Corrected type assertion for React.cloneElement to accept className prop */}
          {course.icon && <div className="mr-2">{React.cloneElement(course.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-brand-accent-blue" })}</div>}
          <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
        </div>
        <p className="text-brand-secondary-text text-sm mb-4 flex-grow">{course.description}</p>
        <div className="mb-4">
            {course.tags.map(tag => (
                <span key={tag} className="inline-block bg-slate-700 text-brand-accent-purple text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                    {tag}
                </span>
            ))}
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700">
          <p className="text-sm text-brand-accent-purple font-medium">Duration: {course.duration}</p>
          <Button size="sm" variant="outline" onClick={() => window.location.href = '#contact'}>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
