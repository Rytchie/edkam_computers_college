
import React, { useState } from 'react';
import LoginPage from './LoginPage'; 
import DashboardPlaceholder from './DashboardPlaceholder'; 

interface StudentPortalPageProps {
  openApplicationModal: () => void;
}

const StudentPortalPage: React.FC<StudentPortalPageProps> = ({ openApplicationModal }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentIdentifier, setStudentIdentifier] = useState('');

  const handleLoginSuccess = (id: string) => {
    setStudentIdentifier(id);
    setIsLoggedIn(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setStudentIdentifier('');
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <section id="student-portal-page" className="py-8 md:py-12 bg-transparent min-h-[calc(100vh-10rem)] flex flex-col justify-center"> 
      <div className="container mx-auto px-4">
        {!isLoggedIn ? (
          <LoginPage onLoginSuccess={handleLoginSuccess} openApplicationModal={openApplicationModal} />
        ) : (
          <DashboardPlaceholder studentId={studentIdentifier} onLogout={handleLogout} />
        )}
      </div>
    </section>
  );
};

export default StudentPortalPage;
