import React from 'react';
import { motion } from 'framer-motion';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-20 px-8 bg-slate-900 border-b border-slate-800">
      
      {/* Animated Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-312.5 mx-auto mb-12 text-center"
      >
        <span className="text-[16px] font-regular text-amber-500 tracking-widest uppercase">Why Choose Us</span>
        <h2 className="text-3xl md:text-5xl font-regular text-white mt-2">
          What separates controlled builds from chaos.
        </h2>
      </motion.div>

      {/* Grid Container */}
      <div className="max-w-312.5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Topic 1: Quality Construction */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-slate-950 border border-slate-800 p-6 rounded-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-[28px] font-regular text-amber-500 mb-2">Quality Construction</h3>
            <p className="text-slate-400 text-[18px] font-regular font-gelix">
              Rigorous material standards and precise structural oversight ensure durable, long-lasting builds.
            </p>
          </div>
        </motion.div>

        {/* Topic 2: Professional Excellence */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-slate-950 border border-slate-800 p-6 rounded-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-[28px] font-regular text-amber-500 mb-2">Professional Excellence</h3>
            <p className="text-slate-400 text-[18px] font-regular font-gelix">
              Licensed architectural, surveying, planning, and engineering expertise backing every phase of execution.
            </p>
          </div>
        </motion.div>

        {/* Topic 3: Integrity & Reliability */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-slate-950 border border-slate-800 p-6 rounded-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-[28px] font-regular text-amber-500 mb-2">Integrity & Reliability</h3>
            <p className="text-slate-400 text-[18px] font-regular font-gelix">
              Transparent cost estimates, honest site assessments, and zero hidden delays throughout delivery.
            </p>
          </div>
        </motion.div>

        {/* Topic 4: Client Satisfaction */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-slate-950 border border-slate-800 p-6 rounded-xl flex flex-col justify-between"
        >
          <div>
            <h3 className="text-[28px] font-regular text-amber-500 mb-2">Client Satisfaction</h3>
            <p className="text-slate-400 text-[18px] font-regular font-gelix">
              Dedicated communication channels ensuring your project vision is strictly met from design to handover.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};