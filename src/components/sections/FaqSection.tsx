import React, { useState } from 'react';
import { FAQ_DATA } from '../../data/landing.data';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section className="py-20 px-8 bg-slate-900 border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <span className="text-[14px] font-semibold text-amber-500 tracking-widest uppercase">Common Questions</span>
        <h2 className="text-3xl md:text-5xl font-regular text-white mt-2 mb-8">
          Clarity before anything gets demolished.
        </h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => (
            <div key={faq.id} className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full text-left p-6 font-regular text-[22px] text-white flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="text-amber-500">{openId === faq.id ? "−" : "+"}</span>
              </button>
              {openId === faq.id && (
                <div className="p-6 pt-6 text-slate-300 text-[18px] font-gelix font-base border-t border-slate-800/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};