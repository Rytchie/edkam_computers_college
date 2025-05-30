
import React, { useState } from 'react';
import LoginPage from './LoginPage'; // Updated import path
import DashboardPlaceholder from './DashboardPlaceholder'; // Updated import path

const StudentPortalPage: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentIdentifier, setStudentIdentifier] = useState('');

  const handleLoginSuccess = (id: string) => {
    setStudentIdentifier(id);
    setIsLoggedIn(true);
     // Scroll to top after login might be good UX if content changes significantly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setStudentIdentifier('');
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top after logout
  };

  // The main tag in App.tsx already has pt-20. 
  // This container ensures the content inside StudentPortalPage also has some vertical padding.
  return (
    <section id="student-portal-page" className="py-8 md:py-12 bg-transparent min-h-[calc(100vh-10rem)] flex flex-col justify-center"> 
      <div className="container mx-auto px-4">
        {!isLoggedIn ? (
          <LoginPage onLoginSuccess={handleLoginSuccess} />
        ) : (
          <DashboardPlaceholder studentId={studentIdentifier} onLogout={handleLogout} />
        )}
      </div>
    </section>
  );
};

export default StudentPortalPage;