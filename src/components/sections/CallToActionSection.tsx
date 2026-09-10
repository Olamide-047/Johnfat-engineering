import React from 'react';

export const CallToActionSection: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  return (
    <section className="py-24 px-8 bg-slate-950 text-center border-b border-slate-800">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-semibold text-white mb-4">Talk us through your ideas clearly.</h2>
        <p className="text-slate-400 mb-8">You'll get a clear understanding of cost range, timeline expectations, and what your space realistically requires.</p>
        <button 
          onClick={onContactClick} 
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-full transition"
        >
          Book a call →
        </button>
      </div>
    </section>
  );
};