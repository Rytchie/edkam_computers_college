import React, { useState } from 'react';
import Button from '../Button';
import CourseMaterialsSection from './dashboard_sections/CourseMaterialsSection';
import GradesSection from './dashboard_sections/GradesSection';
import AnnouncementsSection from './dashboard_sections/AnnouncementsSection';
import ProfileSection from './dashboard_sections/ProfileSection';
import { AcademicCapIcon, ChartBarIcon, BellIcon, UserCircleIcon, CogIcon } from '../../constants/constants';

interface DashboardPlaceholderProps {
  studentId: string;
  onLogout: () => void;
}

type ActiveTab = 'courses' | 'grades' | 'announcements' | 'profile';

const DashboardPlaceholder: React.FC<DashboardPlaceholderProps> = ({ studentId, onLogout }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('courses');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'courses':
        return <CourseMaterialsSection />;
      case 'grades':
        return <GradesSection />;
      case 'announcements':
        return <AnnouncementsSection />;
      case 'profile':
        return <ProfileSection studentId={studentId} />;
      default:
        return null;
    }
  };

  const TabButton: React.FC<{
    tabName: ActiveTab;
    label: string;
    icon: React.ReactNode;
  }> = ({ tabName, label, icon }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex-1 sm:flex-none flex sm:flex-col items-center justify-center sm:justify-start p-3 sm:p-4 rounded-lg transition-all duration-200 ease-in-out group hover:bg-brand-accent-blue/10 dark:hover:bg-brand-accent-blue/20 focus:outline-none focus:ring-2 focus:ring-brand-accent-blue focus:ring-offset-2 dark:focus:ring-offset-slate-800
        ${activeTab === tabName 
          ? 'bg-brand-accent-blue/10 dark:bg-brand-accent-blue/20 text-brand-accent-blue dark:text-brand-accent-blue shadow-md' 
          : 'text-brand-text-light-secondary dark:text-brand-secondary-text hover:text-brand-accent-blue'
        }`}
      aria-current={activeTab === tabName ? 'page' : undefined}
    >
      <div className={`mb-0 sm:mb-1 mr-2 sm:mr-0 transition-colors duration-200 ${activeTab === tabName ? 'text-brand-accent-blue' : 'text-gray-500 dark:text-gray-400 group-hover:text-brand-accent-blue'}`}>
        {icon}
      </div>
      <span className="text-sm font-medium">{label}</span>
    </button>
  );

  return (
    <div className="w-full max-w-6xl mx-auto bg-brand-bg-light-card dark:bg-slate-800/70 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl dark:shadow-2xl">
      <header className="mb-6 md:mb-8 pb-4 border-b border-brand-border-light dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-text-light-primary dark:text-white">
            Student Dashboard
          </h1>
          <p className="text-sm text-brand-text-light-secondary dark:text-brand-secondary-text mt-1">
            Welcome back, <span className="font-semibold text-brand-accent-purple">{studentId}</span>!
          </p>
        </div>
        <Button onClick={onLogout} variant="secondary" size="sm" className="mt-4 sm:mt-0">
          Logout
        </Button>
      </header>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Sidebar Navigation for larger screens, Tabs for smaller */}
        <nav className="md:w-1/4 lg:w-1/5 flex flex-row md:flex-col gap-2 sm:gap-3 overflow-x-auto pb-2 md:pb-0 custom-scrollbar-sm">
          <TabButton tabName="courses" label="Courses" icon={<AcademicCapIcon className="w-5 h-5 sm:w-6 sm:h-6" />} />
          <TabButton tabName="grades" label="Grades" icon={<ChartBarIcon className="w-5 h-5 sm:w-6 sm:h-6" />} />
          <TabButton tabName="announcements" label="Announcements" icon={<BellIcon className="w-5 h-5 sm:w-6 sm:h-6" />} />
          <TabButton tabName="profile" label="Profile" icon={<UserCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />} />
        </nav>

        {/* Main Content Area */}
        <main className="md:w-3/4 lg:w-4/5 bg-slate-50 dark:bg-slate-800/50 p-4 sm:p-6 rounded-lg shadow-inner min-h-[400px]">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardPlaceholder;
