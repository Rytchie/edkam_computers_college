
import React, { useEffect } from 'react';
import ApplicationForm from './ApplicationForm';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; 
      window.addEventListener('keydown', handleEscKey);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center z-[1001] p-4"
      onClick={onClose} 
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-modal-title" 
    >
      <div
        className="bg-brand-bg-light-card dark:bg-brand-dark-blue p-6 sm:p-8 rounded-xl shadow-2xl dark:shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up custom-scrollbar-sm border border-brand-border-light dark:border-slate-700"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 dark:text-gray-400 hover:text-brand-text-light-primary dark:hover:text-white transition-colors z-10 p-2 bg-slate-200/50 dark:bg-slate-700/50 hover:bg-slate-300/70 dark:hover:bg-slate-600/70 rounded-full"
          aria-label="Close application form"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ApplicationForm onCloseModal={onClose} />
      </div>
    </div>
  );
};

export default ApplicationModal;