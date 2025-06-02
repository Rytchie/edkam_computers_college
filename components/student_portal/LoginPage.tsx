
import React, { useState } from 'react';
import Button from '../Button';

interface LoginPageProps {
  onLoginSuccess: (studentId: string) => void;
  openApplicationModal: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, openApplicationModal }) => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (studentId === 'student' && password === 'password') {
      onLoginSuccess(studentId);
    } else if (!studentId || !password) {
      setError('Please enter both Student ID and Password.');
    }
    else {
      setError('Invalid Student ID or Password.');
    }
  };

  const inputBaseClass = "w-full bg-slate-100 dark:bg-slate-700 border-brand-border-light dark:border-slate-600 rounded-md shadow-sm py-3 text-brand-text-light-primary dark:text-brand-light-text focus:ring-brand-accent-blue focus:border-brand-accent-blue sm:text-sm placeholder-slate-400 dark:placeholder-slate-500";
  const inputWithIconClass = `${inputBaseClass} pl-10`;
  const labelClass = "block text-sm font-medium text-brand-text-light-secondary dark:text-brand-secondary-text mb-1";


  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-brand-bg-light-card dark:bg-slate-800/70 backdrop-blur-md p-8 sm:p-10 rounded-xl shadow-2xl dark:shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-brand-text-light-primary dark:text-white">
            Student Portal Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="p-3 bg-red-100 dark:bg-red-600/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-500 rounded-md text-sm" role="alert">
              {error}
            </div>
          )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="studentId" className={labelClass}>
                Student ID
              </label>
              <div className="relative mt-1">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400 dark:text-gray-500">
                        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
                    </svg>
                 </div>
                <input
                  id="studentId"
                  name="studentId"
                  type="text"
                  autoComplete="username"
                  required
                  aria-required="true"
                  className={inputWithIconClass}
                  placeholder="Enter your Student ID"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                />
              </div>
            </div>
            <div className="pt-4">
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
               <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-400 dark:text-gray-500">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                    </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  aria-required="true"
                  className={inputWithIconClass}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-sm">
              <a href="#" className="font-medium text-brand-accent-blue hover:text-blue-400 dark:hover:text-blue-300">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
         <p className="mt-4 text-center text-sm text-brand-text-light-secondary dark:text-brand-secondary-text">
            New student?{' '}
            <button 
              onClick={(e) => {
                e.preventDefault(); 
                openApplicationModal();
              }} 
              className="font-medium text-brand-accent-purple hover:text-purple-400 dark:hover:text-purple-300 underline"
            >
              Apply for admission
            </button>
          </p>
      </div>
    </div>
  );
};

export default LoginPage;