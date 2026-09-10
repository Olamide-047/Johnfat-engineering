// src/components/Footer.tsx
import React from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../data/contact.data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-16 px-8 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold text-amber-500 mb-2">JOHN-FAT BUILDING ENGINEERING AND PLANNING LTD</h3>
          <p className="max-w-sm text-slate-500">
            Integrated architectural design, land surveying, and site supervision.
          </p>
        </div>

        <div className="text-[16px] space-y-3 flex flex-col md:items-end">
          <div>
            Contact:{' '}
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="text-slate-300 hover:text-amber-500 text-[16px] font-medium transition-colors"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="flex items-center space-x-7 pt-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="opacity-70 hover:opacity-100 hover:scale-110 transition-all"
              >
                <img 
                  src={social.iconPath} 
                  alt={`${social.platform} icon`} 
                  className="w-7 h-7 filter invert" 
                />
              </a>
            ))}
          </div>

          <div className="text-slate-600 text-[18px] pt-2">
            © 2026  JOHN-FAT BUILDING ENGINEERING LIMITED. <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};