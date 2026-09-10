import React from 'react';
import { SERVICES_DATA } from '../../data/landing.data';

export const ServicesSection: React.FC = () => {
  return (
    <section id='services' className="py-20 px-8 bg-slate-900 border-b border-slate-800">
      <div className="max-w-300 mx-auto mb-12 flex justify-between items-end">
        <div>
          <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">Services</span>
          <h2 className="sm:text-[24px] md:text-[55px] font-regular text-white mt-6">
            Building the future, intentionally crafted.
          </h2>
        </div>
      </div>
      <div className="max-w-300 mx-auto space-y-8">
        {SERVICES_DATA.map((service) => (
          <div key={service.id} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img src={service.image} alt={service.title} className="rounded-xl w-130 h-120 object-cover" />
            <div>
              <h3 className="text-3xl font-semibold text-amber-500 mb-4">{service.title}</h3>
              <p className="font-gelix text-slate-400 font-regular text-[18px] mb-6">{service.description}</p>
              <h4 className="text-lg font-bold text-slate-300 uppercase mb-3">Project Scope:</h4>
              <ul className="space-y-2 mb-6">
                {service.scope.map((item, idx) => (
                  <li key={idx} className="font-gelix text-[18px] font-medium text-slate-400 flex items-center">
                    <span className="text-amber-500 mr-2">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};