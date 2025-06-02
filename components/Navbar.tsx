
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants/constants';
import { NavLink } from '../types';
import ThemeToggleButton from './ThemeToggleButton'; // Import the toggle button

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false); 

    if (href.startsWith('#')) { 
      e.preventDefault(); 
      window.location.hash = href; 
    }
  };


  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out 
        ${isScrolled 
          ? 'bg-brand-bg-light/90 dark:bg-brand-dark-blue/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => handleNavClick(e, '#hero')}
              className="text-2xl font-bold text-brand-text-light-primary dark:text-white hover:text-brand-accent-purple transition-colors"
            >
              Edkam <span className="text-brand-accent-blue">Computers</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-1"> {/* Reduced space-x-4 to space-x-1 to accommodate button */}
            <div className="flex items-baseline space-x-4">
                {NAV_LINKS.map((link: NavLink) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-brand-text-light-secondary dark:text-gray-300 hover:bg-brand-accent-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
            </div>
            <div className="ml-3"> {/* Added margin for separation */}
                <ThemeToggleButton />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden items-center"> {/* Added items-center */}
             <div className="mr-2"> {/* Margin for toggle button on mobile */}
                <ThemeToggleButton />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-100 dark:bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-brand-text-light-primary dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-brand-accent-blue"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-bg-light dark:bg-brand-dark-blue/95">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-brand-text-light-secondary dark:text-gray-300 hover:bg-brand-accent-blue hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;