
import React from 'react';
import { Course } from '../types';
import Button from './Button';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group [perspective:1000px] w-full h-full min-h-[480px]"> {/* Main flip container, ensure min-height for consistency */}
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:rotate-y-180 hover:shadow-brand-accent-purple/40 hover:scale-[1.03] rounded-xl">
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden flex flex-col [backface-visibility:hidden]">
          <img src={course.image} alt={course.title} className="w-full h-56 object-cover"/>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-start text-brand-accent-blue mb-3">
              {course.icon && <div className="mr-3 mt-1 shrink-0">{React.cloneElement(course.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-brand-accent-blue" })}</div>}
              <h3 className="text-2xl font-semibold text-white leading-tight">{course.title}</h3>
            </div>
            <p className="text-brand-secondary-text text-sm mb-4 flex-grow line-clamp-3">{course.description}</p>
            <div className="mb-4">
                {course.tags.map(tag => (
                    <span key={tag} className="inline-block bg-slate-700 text-brand-accent-purple text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700">
              <p className="text-sm text-brand-accent-purple font-medium">Duration: {course.duration}</p>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={(e) => { 
                  e.stopPropagation(); // Prevent card flip if button itself is clicked, and for future-proofing
                  window.location.href = '#contact';
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full bg-slate-800/80 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden flex flex-col p-6 [backface-visibility:hidden] rotate-y-180">
           <h3 className="text-2xl font-semibold text-white mb-2 flex-shrink-0">{course.title}</h3>
            <div className="text-sm text-brand-accent-purple font-medium mb-3 flex-shrink-0">Duration: {course.duration}</div>
           
           <div className="overflow-y-auto flex-grow custom-scrollbar-sm pr-2 space-y-3 text-sm">
              {course.detailedDescription && (
                <div>
                  <h4 className="text-md font-semibold text-brand-accent-purple mb-1">Overview:</h4>
                  <p className="text-brand-secondary-text">{course.detailedDescription}</p>
                </div>
              )}
              {course.learningOutcomes && course.learningOutcomes.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-brand-accent-purple mb-1 mt-2">What you'll learn:</h4>
                  <ul className="list-disc list-inside text-brand-secondary-text space-y-0.5 pl-1">
                    {course.learningOutcomes.map((outcome, index) => <li key={index}>{outcome}</li>)}
                  </ul>
                </div>
              )}
              {course.modulesCovered && course.modulesCovered.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-brand-accent-purple mb-1 mt-2">Modules Covered:</h4>
                  <ul className="list-disc list-inside text-brand-secondary-text space-y-0.5 pl-1">
                    {course.modulesCovered.map((mod, index) => <li key={index}>{mod}</li>)}
                  </ul>
                </div>
              )}
               {course.targetAudience && (
                <div>
                  <h4 className="text-md font-semibold text-brand-accent-purple mb-1 mt-2">Target Audience:</h4>
                  <p className="text-brand-secondary-text">{course.targetAudience}</p>
                </div>
              )}
              {course.prerequisites && course.prerequisites.length > 0 && (
                <div>
                  <h4 className="text-md font-semibold text-brand-accent-purple mb-1 mt-2">Prerequisites:</h4>
                  <ul className="list-disc list-inside text-brand-secondary-text space-y-0.5 pl-1">
                    {course.prerequisites.map((req, index) => <li key={index}>{req}</li>)}
                  </ul>
                </div>
              )}
           </div>
           <div className="mt-auto pt-4 border-t border-slate-700/50 flex justify-end flex-shrink-0">
             {/* Could add a button here, e.g., "Apply for this course" */}
              <Button 
                size="sm" 
                variant="secondary" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  window.location.href = '#apply'; // Example: Go to application form
                }}
              >
                Apply Now
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
