import React from 'react';
import { 
  ABOUT_HERO, 
  OUR_STORY, 
  MISSION_VISION, 
  TEAM_MEMBERS, 
  CREDENTIALS 
} from '../../data/landing.data';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-8 bg-slate-950 border-b border-slate-800">
      <div className="max-w-312.5 mx-auto space-y-20">
        
        {/* 1. HERO STATEMENT */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-[15px] font-medium text-amber-500 tracking-widest uppercase">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-regular text-white mt-4 leading-tight">
            {ABOUT_HERO.headline}
          </h2>
          <p className="text-slate-400 text-base font-gelix text-[18px] font-gelix mt-6 leading-relaxed">
            {ABOUT_HERO.subtext}
          </p>
        </div>

        {/* 2. OUR STORY */}
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl md:text-4xl font-semibold text-amber-500 mb-4">Our Story</h3>
          <p className="text-slate-300 text-base md:text-[20px] font-gelix leading-relaxed mb-8">
            {OUR_STORY.overview}
          </p>

          {/* Key Milestones */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            {OUR_STORY.milestones.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-amber-500 font-mono text-[28px] font-semibold">{item.year}</span>
                <h4 className="text-white font-semibold text-[24px] ">{item.title}</h4>
                <p className="text-slate-400 text-[20px] font-gelix">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-3xl font-regular text-amber-500 mb-3">Our Mission</h3>
            <p className="text-slate-300 font-gelix font-base text-[20px] leading-relaxed">
              {MISSION_VISION.mission}
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
            <h3 className="text-3xl font-regular text-amber-500 mb-3">Our Vision</h3>
            <p className="text-slate-300 font-gelix font-base text-[20px] leading-relaxed">
              {MISSION_VISION.vision}
            </p>
          </div>
        </div>

        {/* 4. TEAM PROFILES */}
        <div>
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-regular text-white">Leadership & Engineering</h3>
            <p className="text-slate-400 font-gelix font-base text-[18px] mt-1">Lead architects, structural engineers, and site managers behind JOHN-FAT CONSTRUCTION LIMITED.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.id} 
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="h-110 w-130 bg-slate-950 overflow-hidden relative">
                  <img 
                    src={member.photoUrl} 
                    alt={member.name} 
                    className="w-130 h-130 object-cover object-center"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[28px] font-regular text-white">{member.name}</h4>
                    <span className="text-amber-500 text-[18px] font-medium uppercase tracking-wider block mb-3">
                      {member.role}
                    </span>
                    <p className="text-slate-400 text-[16px] font-regular font-gelix leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. CREDENTIALS */}
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-2xl">
          <h3 className="text-3xl font-semibold text-amber-500 mb-6">Licenses, Awards & Safety Records</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Licenses */}
            <div>
              <h4 className="text-white font-regular text-lg mb-3">Certified Licenses</h4>
              <ul className="space-y-2">
                {CREDENTIALS.licenses.map((license, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-slate-300 text-[18px] font-base font-gelix">
                    <span className="text-amber-500">✓</span>
                    <span>{license}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards & Safety */}
            <div>
              <h4 className="text-white font-regular text-lg mb-3">Recognitions & Safety Record</h4>
              <ul className="space-y-2">
                {CREDENTIALS.awardsAndSafety.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-2 font-base text-slate-300 text-[18px] font-gelix">
                    <span className="text-amber-500">★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};