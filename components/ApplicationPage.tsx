
import React from 'react';
import ApplicationForm from './ApplicationForm';

const ApplicationPage: React.FC = () => {
  return (
    <section id="application-page" className="py-12 md:py-16 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* The ApplicationForm component itself will be the styled "card" */}
        <ApplicationForm />
      </div>
    </section>
  );
};

export default ApplicationPage;
