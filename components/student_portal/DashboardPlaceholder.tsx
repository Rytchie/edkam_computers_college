
import React from 'react';
import Button from '../Button'; // Updated import path

interface DashboardPlaceholderProps {
  studentId: string;
  onLogout: () => void;
}

const DashboardPlaceholder: React.FC<DashboardPlaceholderProps> = ({ studentId, onLogout }) => {
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8 bg-slate-800/70 backdrop-blur-md p-8 sm:p-10 rounded-xl shadow-2xl text-center">
        <h2 className="text-3xl font-extrabold text-white">
          Welcome, <span className="text-brand-accent-blue">{studentId}</span>!
        </h2>
        <p className="text-brand-secondary-text text-lg">
          This is your Student Portal dashboard.
        </p>
        <div className="bg-slate-700/50 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-semibold text-brand-accent-purple mb-3">Coming Soon!</h3>
            <p className="text-brand-light-text">
                We're working hard to bring you features like:
            </p>
            <ul className="list-disc list-inside text-brand-secondary-text mt-2 space-y-1 text-left max-w-md mx-auto">
                <li>Course Materials &amp; Schedules</li>
                <li>Grades &amp; Progress Tracking</li>
                <li>Announcements &amp; Notifications</li>
                <li>Profile Management</li>
                <li>And much more!</li>
            </ul>
        </div>
        <div className="mt-8">
          <Button onClick={onLogout} variant="secondary" size="md">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPlaceholder;