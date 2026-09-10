import React, { useState } from 'react';

interface NavbarProps {
  activePage: 'landing' | 'contact';
  setActivePage: (page: 'landing' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Helper to scroll to sections smoothly and close mobile menu
  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false); // Close mobile drawer on selection

    if (activePage !== 'landing') {
      setActivePage('landing');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    setMobileMenuOpen(false);
    setActivePage('contact');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-6 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Brand Logo */}
        <div 
          className="text-2xl font-bold tracking-wider text-amber-500 cursor-pointer select-none"
          onClick={() => handleNavClick('hero')}
        >
          JOHN-FAT
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-[16px] font-regular text-slate-300">
          <button 
            onClick={() => handleNavClick('hero')} 
            className="hover:text-amber-500 transition-colors"
          >
            Home
          </button>
          
          <button 
            onClick={() => handleNavClick('about')} 
            className="hover:text-amber-500 transition-colors"
          >
            About
          </button>

          <button 
            onClick={() => handleNavClick('services')} 
            className="hover:text-amber-500 transition-colors"
          >
            Services
          </button>

          <button 
            onClick={() => handleNavClick('projects')} 
            className="hover:text-amber-500 transition-colors"
          >
            Projects
          </button>

          <button 
            onClick={() => handleNavClick('why-us')} 
            className="hover:text-amber-500 transition-colors"
          >
            Why Choose Us
          </button>

          {/* Contact CTA Button */}
          <button 
            onClick={handleContactClick} 
            className={`font-semibold px-4 py-2 rounded-full transition-all ${
              activePage === 'contact' 
                ? 'bg-amber-600 text-slate-950 shadow-md shadow-amber-500/20' 
                : 'bg-amber-500 hover:bg-amber-600 text-slate-950'
            }`}
          >
            Contact →
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-amber-500 focus:outline-none p-2"
        >
          {mobileMenuOpen ? (
            /* Close Icon (X) */
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-4 pb-6 px-2 space-y-4 border-t border-slate-800/80 mt-4 flex flex-col items-start bg-slate-900/95">
          <button 
            onClick={() => handleNavClick('hero')} 
            className="w-full text-left py-2 text-slate-300 hover:text-amber-500 transition-colors"
          >
            Home
          </button>
          
          <button 
            onClick={() => handleNavClick('about')} 
            className="w-full text-left py-2 text-slate-300 hover:text-amber-500 transition-colors"
          >
            About
          </button>

          <button 
            onClick={() => handleNavClick('services')} 
            className="w-full text-left py-2 text-slate-300 hover:text-amber-500 transition-colors"
          >
            Services
          </button>

          <button 
            onClick={() => handleNavClick('projects')} 
            className="w-full text-left py-2 text-slate-300 hover:text-amber-500 transition-colors"
          >
            Projects
          </button>

          <button 
            onClick={handleContactClick} 
            className={`w-full text-center py-3 rounded-xl font-bold transition-all mt-2 ${
              activePage === 'contact' 
                ? 'bg-amber-600 text-slate-950' 
                : 'bg-amber-500 hover:bg-amber-600 text-slate-950'
            }`}
          >
            Contact →
          </button>
        </div>
      )}
    </nav>
  );
};