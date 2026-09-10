import React from "react";
import { motion } from "framer-motion";

export const DeliveryMetricsSection: React.FC = () => {
  const metrics = [
    {
      value: "98%",
      title: "On-Time Completion",
      desc: "Projects delivered exactly on or ahead of contract schedule.",
    },
    {
      value: "2.4%",
      title: "Under Budget",
      desc: "Average cost savings achieved across our entire commercial portfolio.",
    },
    {
      value: "1.5M",
      title: "Safe Work Hours",
      desc: "Continuous operational hours without a single lost-time incident.",
    },
    {
      value: "85%",
      title: "Repeat Client Rate",
      desc: "Percentage of developers who trust us with multiple projects.",
    },
    {
      value: "45+",
      title: "Major Projects",
      desc: "Total number of successfully commissioned builds over the last decade.",
    },
  ];

  return (
    <section
      id="metrics"
      className="py-20 px-8 bg-slate-900 border-b border-slate-800 relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.92) 25%, rgba(15, 23, 42, 0.45) 100%), url('/delivery.webp')`,
      }}
    >
      <div className="max-w-305 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Heading & Messaging */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <span className="text-[16px] font-regular text-amber-500 tracking-widest uppercase">
            Delivery Metrics
          </span>
          <h2 className="text-3xl md:text-5xl font-regular text-white mt-2 mb-6 leading-tight drop-shadow-md">
            We build with <span className="text-amber-500">intent</span>, using
            proven methods that keep projects moving and clients fully informed.
          </h2>
        </motion.div>

        {/* Right Column: Dynamic Metrics Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {metrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`bg-slate-950/90 backdrop-blur-md border border-slate-800 p-6 rounded-2xl flex flex-col justify-between hover:border-amber-500/40 transition-colors ${
                idx === 4 ? "sm:col-span-2" : ""
              }`}
            >
              <div>
                <div className="text-3xl md:text-4xl font-semibold text-amber-500 mb-1 font-mono">
                  {item.value}
                </div>
                <h3 className="text-[20px] font-regular text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-[16px] font-base font-gelix leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
