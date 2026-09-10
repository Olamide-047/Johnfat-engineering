import React from 'react';
import { TESTIMONIALS_DATA } from '../../data/landing.data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-slate-950 border-b border-slate-800">
      <div className="max-w-[1250px] mx-auto mb-12">
        <span className="text-[16px] font-regular text-amber-500 tracking-widest uppercase">Real Experiences</span>
        <h2 className="text-3xl md:text-6xl font-regular text-white mt-2">Testimonies from verified clients</h2>
      </div>
      <div className="max-w-312.5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS_DATA.map((t) => (
          <div key={t.id} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <p className="text-slate-300 italic text-[24px] font-gelix mb-6">"{t.quote}"</p>
            <div className="flex justify-between items-center text-sm">
              <div>
                <div className="font-semibold text-[20px] text-amber-500">{t.author}</div>
                <div className="text-slate-500 font-regular text-[16px]">{t.role}</div>
              </div>
              <div className="text-slate-400 text-[14px] font-gelix font-base">{t.timeline}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};