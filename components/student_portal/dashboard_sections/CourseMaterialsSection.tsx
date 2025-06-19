import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../../Button';
import { CalendarDaysIcon, DownloadIcon, BookOpenIcon, ChevronDownIcon, ExclamationTriangleIcon } from '../../../constants/constants';

interface Course {
  id: string;
  name: string;
  instructor: string;
  modules: string[];
}

interface Deadline {
  id: string;
  title: string;
  date: string;
  courseId: string; // Matched to backend
  courseName: string; // Matched to backend
}

const CourseMaterialsSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'myCourses' | 'calendar' | 'deadlines'>('myCourses');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoadingCourses, setIsLoadingCourses] = useState(true);
  const [errorCourses, setErrorCourses] = useState<string | null>(null);

  const [deadlines, setDeadlines] = useState<Deadline[]>([]);
  const [isLoadingDeadlines, setIsLoadingDeadlines] = useState(true);
  const [errorDeadlines, setErrorDeadlines] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      setIsLoadingCourses(true);
      setErrorCourses(null);
      try {
        const response = await axios.get<Course[]>('http://localhost:3001/api/courses');
        setCourses(response.data);
      } catch (err) {
        console.error("Error fetching courses:", err);
        setErrorCourses('Failed to load courses. Please try again.');
      } finally {
        setIsLoadingCourses(false);
      }
    };

    const fetchDeadlines = async () => {
      setIsLoadingDeadlines(true);
      setErrorDeadlines(null);
      try {
        const response = await axios.get<Deadline[]>('http://localhost:3001/api/deadlines');
        setDeadlines(response.data);
      } catch (err) {
        console.error("Error fetching deadlines:", err);
        setErrorDeadlines('Failed to load deadlines. Please try again.');
      } finally {
        setIsLoadingDeadlines(false);
      }
    };

    fetchCourses();
    fetchDeadlines();
  }, []);

  const toggleCourseModules = (courseId: string) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };
  
  const renderSubTabContent = () => {
    switch (activeSubTab) {
      case 'myCourses':
        if (isLoadingCourses) return <p className="text-center text-brand-text-light-secondary dark:text-brand-secondary-text">Loading courses...</p>;
        if (errorCourses) return <p className="text-center text-red-500 bg-red-100 dark:bg-red-700/30 p-3 rounded-md">{errorCourses}</p>;
        if (courses.length === 0) return <p className="text-center text-brand-text-light-secondary dark:text-brand-secondary-text">No courses available at the moment.</p>;

        return (
          <div className="space-y-6">
            {courses.map(course => (
              <div key={course.id} className="bg-brand-bg-light-card dark:bg-slate-700/50 p-4 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-brand-accent-blue mb-1">{course.name}</h3>
                <p className="text-sm text-brand-text-light-secondary dark:text-brand-secondary-text mb-3">Instructor: {course.instructor}</p>
                {course.modules && course.modules.length > 0 ? (
                  <>
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
                  </>
                ) : (
                  <p className="text-sm text-brand-text-light-secondary dark:text-brand-secondary-text italic">No modules listed for this course.</p>
                )}
              </div>
            ))}
            {courses.length > 0 && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg text-sm text-blue-700 dark:text-blue-300">
                <p>File upload/download functionality will be available here for assignments and shared resources.</p>
              </div>
            )}
          </div>
        );
      case 'calendar':
        // Placeholder, no data fetching for calendar in this step
        return (
          <div className="text-center py-10">
            <CalendarDaysIcon className="w-16 h-16 text-brand-accent-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-text-light-primary dark:text-white mb-2">Interactive Course Calendar</h3>
            <p className="text-brand-text-light-secondary dark:text-brand-secondary-text">Coming soon! View all your course schedules, events, and deadlines in one place.</p>
          </div>
        );
      case 'deadlines':
        if (isLoadingDeadlines) return <p className="text-center text-brand-text-light-secondary dark:text-brand-secondary-text">Loading deadlines...</p>;
        if (errorDeadlines) return <p className="text-center text-red-500 bg-red-100 dark:bg-red-700/30 p-3 rounded-md">{errorDeadlines}</p>;

        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-brand-text-light-primary dark:text-white mb-3">Upcoming Deadlines</h3>
            {deadlines.length > 0 ? (
              <ul className="space-y-3">
                {deadlines.map(deadline => (
                  <li key={deadline.id} className="p-3 bg-brand-bg-light-card dark:bg-slate-700/50 rounded-lg shadow flex justify-between items-center">
                    <div>
                      <p className="font-medium text-brand-text-light-primary dark:text-brand-light-text">{deadline.title}</p>
                      <p className="text-xs text-brand-accent-purple">{deadline.courseName}</p>
                    </div>
                    <span className="text-sm font-semibold text-red-500 dark:text-red-400">{deadline.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
               <div className="text-center py-10">
                <ExclamationTriangleIcon className="w-16 h-16 text-yellow-500 mx-auto mb-4 opacity-70" />
                <p className="text-brand-text-light-secondary dark:text-brand-secondary-text">No upcoming deadlines found.</p>
              </div>
            )}
          </div>
        );
      default: return null; // Should not happen
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
