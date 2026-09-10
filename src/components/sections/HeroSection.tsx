import React from "react";
import { HERO_DATA } from "../../data/landing.data";

export const HeroSection: React.FC<{ onContactClick: () => void }> = ({
  onContactClick,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 px-8 flex flex-col justify-center bg-slate-900 border-b border-slate-800 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(10, 37, 64, 0.9) 20%, rgba(10, 37, 64, 0.4) 100%), url('/bgo.jpg')`,
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <h1 className=" font-semibold text-[72px] md:text-[77px] sm:text-[45px] text-white drop-shadow-md leading-tight mb-6">
            Building your dream,{" "}
            <span className="text-amber-500">Cementing the future</span>.
          </h1>
          <p className="text-slate-300 text-[20px] font-gelix font-regular drop-shadow-md mb-8">
            {HERO_DATA.subtitle}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={onContactClick}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 rounded-full font-semibold transition"
            >
              {HERO_DATA.primaryCta} →
            </button>
            <a
              href="#projects"
              className="border border-slate-700 hover:border-amber-500 text-white px-6 py-3 rounded-full font-regular transition"
            >
              {HERO_DATA.secondaryCta} →
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl">
            <img
              src={HERO_DATA.backgroundImage}
              alt="Hero site preview"
              className="w-full h-80 object-cover"
            />
          </div>
          {/* <div className="absolute -bottom-6 -right-6 w-48 rounded-lg overflow-hidden border-2 border-amber-500 shadow-xl hidden md:block">
            <img
              src={HERO_DATA.previewImage}
              alt="Completed build"
              className="w-full h-32 object-cover"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
