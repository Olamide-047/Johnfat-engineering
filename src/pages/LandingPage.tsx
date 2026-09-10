import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { DeliveryMetricsSection } from '../components/sections/DeliveryMetricsSection';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FaqSection } from '../components/sections/FaqSection';
import { CallToActionSection } from '../components/sections/CallToActionSection';

export const LandingPage: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  return (
    <main>
      <HeroSection onContactClick={onContactClick} />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <DeliveryMetricsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <CallToActionSection onContactClick={onContactClick} />
    </main>
  );
};