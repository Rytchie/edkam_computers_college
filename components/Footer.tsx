
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const SocialIcon: React.FC<{ href: string; path: string; }> = ({ href, path }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-brand-accent-purple transition-colors">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
  
  return (
    <footer className="bg-slate-100 dark:bg-brand-dark-blue border-t border-brand-border-light dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <SocialIcon href="#" path="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.59-1.37 1.92-2.38-.84.5-1.78.86-2.79 1.07A4.38 4.38 0 0016.39 4c-2.45 0-4.44 1.99-4.44 4.44 0 .35.04.69.11 1.02-3.68-.18-6.94-1.95-9.13-4.62-.38.66-.6 1.43-.6 2.25 0 1.54.78 2.89 1.97 3.68-.72-.02-1.4-.22-2-.55v.05c0 2.15 1.53 3.94 3.56 4.35-.37.1-.76.15-1.16.15-.28 0-.56-.03-.83-.08.57 1.76 2.21 3.04 4.16 3.08-1.52 1.19-3.44 1.9-5.52 1.9-.36 0-.71-.02-1.06-.06 1.97 1.27 4.3 2.01 6.79 2.01 8.15 0 12.61-6.75 12.61-12.61 0-.19 0-.38-.01-.57.86-.62 1.62-1.4 2.22-2.28z" /> {/* Twitter/X */}
          <SocialIcon href="#" path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v2h-2v-2zm0 4h2v6h-2v-6z" /> {/* Placeholder, e.g., LinkedIn */}
          <SocialIcon href="#" path="M12 2.04c-2.83 0-3.16.01-4.28.06-1.1.05-1.86.22-2.52.49-.67.28-1.21.63-1.75 1.17S2.8 5.15 2.52 5.82c-.27.66-.44 1.42-.49 2.52C2.01 8.84 2 9.17 2 12s.01 3.16.06 4.28c.05 1.1.22 1.86.49 2.52.28.67.63 1.21 1.17 1.75s1.08.89 1.75 1.17c.66.27 1.42.44 2.52.49 1.12.05 1.45.06 4.28.06s3.16-.01 4.28-.06c1.1-.05 1.86-.22 2.52-.49.67-.28 1.21-.63 1.75-1.17s.89-1.08 1.17-1.75c.27-.66.44-1.42.49-2.52.05-1.12.06-1.45.06-4.28s-.01-3.16-.06-4.28c-.05-1.1-.22-1.86-.49-2.52-.28-.67-.63-1.21-1.17-1.75S19.16 2.8 18.48 2.52c-.66-.27-1.42-.44-2.52-.49C15.16 2.01 14.83 2 12 2.04zm0 1.62c2.76 0 3.08.01 4.17.06 1.04.05 1.61.21 2.02.37.5.2.85.44 1.22.82s.62.72.82 1.22c.16.41.32.98.37 2.02.05 1.09.06 1.41.06 4.17s-.01 3.08-.06 4.17c-.05 1.04-.21 1.61-.37 2.02-.2.5-.44.85-.82 1.22s-.72.62-1.22.82c-.41.16-.98.32-2.02.37-1.09.05-1.41.06-4.17.06s-3.08-.01-4.17-.06c-1.04-.05-1.61-.21-2.02-.37-.5-.2-.85-.44-1.22-.82s-.62-.72-.82-1.22c-.16-.41-.32-.98-.37-2.02C3.67 15.08 3.66 14.76 3.66 12s.01-3.08.06-4.17c.05-1.04.21 1.61.37-2.02.2-.5.44-.85.82-1.22s.72-.62 1.22-.82c.41-.16.98.32 2.02-.37C8.92 3.67 9.24 3.66 12 3.66zm0 4.41a3.94 3.94 0 100 7.88 3.94 3.94 0 000-7.88zm0 6.26a2.32 2.32 0 110-4.64 2.32 2.32 0 010 4.64zM17.78 5.22a.95.95 0 100 1.9.95.95 0 000-1.9z" /> {/* Instagram */}
        </div>
        <p className="text-brand-text-light-secondary dark:text-brand-secondary-text text-sm">
          &copy; {currentYear} Edkam Computers Training College. All rights reserved.
        </p>
        <p className="text-brand-text-light-secondary dark:text-brand-secondary-text text-sm mt-1">
          Developed by <a href="https://github.com/rytchie" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-accent-blue hover:underline">rytchie</a>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;