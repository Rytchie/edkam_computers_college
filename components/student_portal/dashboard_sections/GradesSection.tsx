import React, { useState } from 'react';
import Button from '../../Button';
import { ChartBarIcon, AcademicCapIcon } from '../../../constants/constants';

const GradesSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'detailed' | 'gpa'>('overview');

  const dummyGrades = [
    { id: 'g1', course: 'Full-Stack Web Development', assignment: 'HTML Basics', score: 85, maxScore: 100, feedback: 'Good effort, minor CSS fixes needed.' },
    { id: 'g2', course: 'Full-Stack Web Development', assignment: 'JavaScript Quiz 1', score: 92, maxScore: 100, feedback: 'Excellent!' },
    { id: 'g3', course: 'Data Science & ML', assignment: 'Python Functions Task', score: 78, maxScore: 100, feedback: 'Review loops for efficiency.' },
  ];

  const renderSubTabContent = () => {
    switch (activeSubTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-bg-light-card dark:bg-slate-700/50 p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold text-brand-accent-purple mb-2">Overall Progress</h4>
                <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-6">
                  <div className="bg-brand-accent-blue h-6 rounded-full text-xs font-medium text-white text-center p-0.5 leading-none" style={{ width: '75%' }}>
                    75%
                  </div>
                </div>
                <p className="text-xs text-brand-text-light-secondary dark:text-brand-secondary-text mt-1">Across all courses.</p>
              </div>
              <div className="bg-brand-bg-light-card dark:bg-slate-700/50 p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold text-brand-accent-purple mb-2">Current GPA (Est.)</h4>
                <p className="text-3xl font-bold text-brand-text-light-primary dark:text-white">3.65 <span className="text-base font-normal">/ 4.0</span></p>
                <p className="text-xs text-brand-text-light-secondary dark:text-brand-secondary-text mt-1">Based on completed assignments.</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-brand-text-light-primary dark:text-white mb-2">Performance Trends</h4>
              <div className="bg-brand-bg-light-card dark:bg-slate-700/50 p-4 rounded-lg shadow min-h-[200px] flex items-center justify-center">
                <p className="text-brand-text-light-secondary dark:text-brand-secondary-text">
                  <ChartBarIcon className="w-12 h-12 text-brand-accent-blue mx-auto mb-2 opacity-50" />
                  Visual charts for performance trends coming soon.
                  <br /> (e.g., upward trend in recent assignments)
                </p>
              </div>
            </div>
          </div>
        );
      case 'detailed':
        return (
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold text-brand-text-light-primary dark:text-white mb-3">Detailed Grades</h4>
            <table className="min-w-full bg-brand-bg-light-card dark:bg-slate-700/50 shadow rounded-lg">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-brand-text-light-secondary dark:text-brand-secondary-text uppercase tracking-wider">Course</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-brand-text-light-secondary dark:text-brand-secondary-text uppercase tracking-wider">Assignment</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-brand-text-light-secondary dark:text-brand-secondary-text uppercase tracking-wider">Score</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-brand-text-light-secondary dark:text-brand-secondary-text uppercase tracking-wider">Max</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-brand-text-light-secondary dark:text-brand-secondary-text uppercase tracking-wider">Feedback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
                {dummyGrades.map(grade => (
                  <tr key={grade.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-brand-text-light-primary dark:text-brand-light-text">{grade.course}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-brand-text-light-primary dark:text-brand-light-text">{grade.assignment}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-semibold text-brand-accent-blue">{grade.score}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-brand-text-light-secondary dark:text-brand-secondary-text">{grade.maxScore}</td>
                    <td className="px-4 py-3 text-sm text-brand-text-light-secondary dark:text-brand-secondary-text">{grade.feedback}</td>
                  </tr>
                ))}
                 {dummyGrades.length === 0 && (
                    <tr>
                        <td colSpan={5} className="text-center py-4 text-sm text-brand-text-light-secondary dark:text-brand-secondary-text">No grades available yet.</td>
                    </tr>
                )}
              </tbody>
            </table>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg text-sm text-blue-700 dark:text-blue-300">
              Assignment score breakdowns and detailed feedback will be accessible here.
            </div>
          </div>
        );
      case 'gpa':
        return (
          <div className="text-center py-10">
            <AcademicCapIcon className="w-16 h-16 text-brand-accent-purple mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-brand-text-light-primary dark:text-white mb-2">GPA Calculator</h3>
            <p className="text-brand-text-light-secondary dark:text-brand-secondary-text mb-4">Estimate your Grade Point Average. Feature coming soon!</p>
            <div className="max-w-md mx-auto space-y-3">
                <input type="text" placeholder="Course 1 Credits (e.g., 3)" className="w-full p-2 border border-brand-border-light dark:border-slate-600 rounded bg-slate-100 dark:bg-slate-700 placeholder-slate-400 dark:placeholder-slate-500" />
                <input type="text" placeholder="Course 1 Grade (e.g., A, B+)" className="w-full p-2 border border-brand-border-light dark:border-slate-600 rounded bg-slate-100 dark:bg-slate-700 placeholder-slate-400 dark:placeholder-slate-500" />
                <Button variant="primary" onClick={() => alert('Calculate GPA (placeholder)')}>Calculate GPA</Button>
            </div>
          </div>
        );
      default: return null;
    }
  };

  const SubTabButton: React.FC<{tabId: 'overview' | 'detailed' | 'gpa', label: string}> = ({tabId, label}) => (
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
      <h2 className="text-2xl font-bold text-brand-text-light-primary dark:text-white mb-6">Grades & Progress</h2>
      <div className="mb-6 flex space-x-2 border-b border-brand-border-light dark:border-slate-700 pb-3">
        <SubTabButton tabId="overview" label="Overview" />
        <SubTabButton tabId="detailed" label="Detailed Grades" />
        <SubTabButton tabId="gpa" label="GPA Calculator" />
      </div>
      <div>
        {renderSubTabContent()}
      </div>
    </div>
  );
};

export default GradesSection;
