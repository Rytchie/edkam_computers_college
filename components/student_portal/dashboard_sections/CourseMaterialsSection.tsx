import React, { useState } from 'react';
import Button from '../../Button';
import { CalendarDaysIcon, DownloadIcon, BookOpenIcon, ChevronDownIcon } from '../../../constants/constants';

const CourseMaterialsSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'myCourses' | 'calendar' | 'deadlines'>('myCourses');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const dummyCourses = [
    { id: 'webdev', name: 'Full-Stack Web Development', instructor: 'Dr. Ada Lovelace', modules: ['Introduction to HTML & CSS', 'JavaScript Fundamentals', 'React Basics', 'Node.js & Express', 'MongoDB Essentials'] },
    { id: 'datasci', name: 'Data Science & Machine Learning', instructor: 'Prof. Alan Turing', modules: ['Python for Data Science', 'Statistics Core Concepts', 'Machine Learning Algorithms', 'Data Visualization with Matplotlib'] },
  ];

  const dummyDeadlines = [
    { id: 'd1', title: 'Web Dev - Assignment 1: Portfolio Page', date: '2024-11-15', course: 'Full-Stack Web Development' },
    { id: 'd2', title: 'Data Sci - Quiz 2: Probability', date: '2024-11-20', course: 'Data Science & ML' },
    { id: 'd3', title: 'Web Dev - Project Proposal', date: '2024-12-01', course: 'Full-Stack Web Development' },
  ];

  const toggleCourseModules = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };
  
  const renderSubTabContent = () => {
    switch (activeSubTab) {
      case 'myCourses':
        return (
          <div className="space-y-6">
            {dummyCourses.map(course => (
              <div key={course.id} className="bg-brand-bg-light-card dark:bg-slate-700/50 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-brand-accent-blue mb-1">{course.name}</h3>
                <p className="text-sm text-brand-text-light-secondary dark:text-brand-secondary-text mb-3">Instructor: {course.instructor}</p>
                <div className="flex space-x-3 mb-3">
                  <Button size="sm" variant="outline" onClick={() => alert('View Materials (placeholder)')} className="text-xs">
                    <BookOpenIcon className="w-4 h-4 mr-2" /> View Materials
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => alert('View Syllabus (placeholder)')} className="border-brand-accent-purple text-brand-accent-purple hover:bg-brand-accent-purple hover:text-white text-xs">
                    View Syllabus
                  </Button>
                </div>
                <button 
                  onClick={() => toggleCourseModules(course.id)}
                  className="w-full flex justify-between items-center text-left p-2 mt-2 rounded hover:bg-slate-200 dark:hover:bg-slate-600/50 transition-colors duration-150"
                  aria-expanded={expandedCourse === course.id}
                  aria-controls={`modules-${course.id}`}
                >
                  <span className="font-medium text-brand-text-light-primary dark:text-brand-light-text">Modules</span>
                  <ChevronDownIcon className={`w-5 h-5 text-brand-text-light-secondary dark:text-brand-secondary-text transform transition-transform duration-200 ${expandedCourse === course.id ? 'rotate-180' : ''}`} />
                </button>
                {expandedCourse === course.id && (
                  <ul id={`modules-${course.id}`} className="mt-2 space-y-1 pl-4 border-l-2 border-brand-accent-blue/50 ml-2">
                    {course.modules.map(module => (
                      <li key={module} className="text-sm text-brand-text-light-secondary dark:text-brand-secondary-text py-1">
                        {module} 
                        <a href="#" onClick={(e) => {e.preventDefault(); alert(`Download ${module} (placeholder)`)}} className="ml-2 text-brand-accent-blue hover:underline text-xs">
                           (<DownloadIcon className="w-3 h-3 inline -mt-0.5" /> Download)
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg text-sm text-blue-700 dark:text-blue-300">
              <p>File upload/download functionality will be available here for assignments and shared resources.</p>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div className="text-center py-10">
            <CalendarDaysIcon className="w-16 h-16 text-brand-accent-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-text-light-primary dark:text-white mb-2">Interactive Course Calendar</h3>
            <p className="text-brand-text-light-secondary dark:text-brand-secondary-text">Coming soon! View all your course schedules, events, and deadlines in one place.</p>
          </div>
        );
      case 'deadlines':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-text-light-primary dark:text-white mb-3">Upcoming Deadlines</h3>
            {dummyDeadlines.length > 0 ? (
              <ul className="space-y-3">
                {dummyDeadlines.map(deadline => (
                  <li key={deadline.id} className="p-3 bg-brand-bg-light-card dark:bg-slate-700/50 rounded-lg shadow flex justify-between items-center">
                    <div>
                      <p className="font-medium text-brand-text-light-primary dark:text-brand-light-text">{deadline.title}</p>
                      <p className="text-xs text-brand-accent-purple">{deadline.course}</p>
                    </div>
                    <span className="text-sm font-semibold text-red-500 dark:text-red-400">{deadline.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-brand-text-light-secondary dark:text-brand-secondary-text">No upcoming deadlines.</p>
            )}
          </div>
        );
      default: return null;
    }
  };

  const SubTabButton: React.FC<{tabId: 'myCourses' | 'calendar' | 'deadlines', label: string}> = ({tabId, label}) => (
    <button
        onClick={() => setActiveSubTab(tabId)}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150
        ${activeSubTab === tabId 
            ? 'bg-brand-accent-blue text-white shadow' 
            : 'text-brand-text-light-secondary dark:text-brand-secondary-text hover:bg-slate-200 dark:hover:bg-slate-700'
        }`}
    >
        {label}
    </button>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand-text-light-primary dark:text-white mb-6">Course Materials & Schedules</h2>
      <div className="mb-6 flex space-x-2 border-b border-brand-border-light dark:border-slate-700 pb-3">
        <SubTabButton tabId="myCourses" label="My Courses" />
        <SubTabButton tabId="calendar" label="Full Calendar" />
        <SubTabButton tabId="deadlines" label="Upcoming Deadlines" />
      </div>
      <div>
        {renderSubTabContent()}
      </div>
    </div>
  );
};

export default CourseMaterialsSection;
