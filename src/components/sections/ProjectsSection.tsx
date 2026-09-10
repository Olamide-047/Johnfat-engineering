import React, { useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../../data/landing.data';
import type { ProjectItem } from '../../types/landing.types';

export const ProjectsSection: React.FC = () => {
  // State for tracking which project is open in the modal
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  
  // State for image indices: card level (by project ID) and active modal index
  const [cardImageIndices, setCardImageIndices] = useState<Record<string | number, number>>({});
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);

  // Helper to normalize images/media array for a project
  const getProjectMedia = (project: ProjectItem) => {
    if (project.images && project.images.length > 0) return project.images;
    if (project.imageUrl) return [project.imageUrl];
    return ["/images/project-placeholder.jpg"];
  };

  // Open modal handler
  const handleOpenModal = (project: ProjectItem) => {
    setSelectedProject(project);
    const currentCardIdx = cardImageIndices[project.id] || 0;
    setModalImageIndex(currentCardIdx);
  };

  // Card image navigation
  const handlePrevCardImage = (e: React.MouseEvent, project: ProjectItem) => {
    e.stopPropagation();
    const media = getProjectMedia(project);
    setCardImageIndices((prev) => {
      const current = prev[project.id] || 0;
      return { ...prev, [project.id]: current === 0 ? media.length - 1 : current - 1 };
    });
  };

  const handleNextCardImage = (e: React.MouseEvent, project: ProjectItem) => {
    e.stopPropagation();
    const media = getProjectMedia(project);
    setCardImageIndices((prev) => {
      const current = prev[project.id] || 0;
      return { ...prev, [project.id]: (current + 1) % media.length };
    });
  };

  // Modal image navigation
  const handlePrevModalImage = () => {
    if (!selectedProject) return;
    const media = getProjectMedia(selectedProject);
    setModalImageIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNextModalImage = () => {
    if (!selectedProject) return;
    const media = getProjectMedia(selectedProject);
    setModalImageIndex((prev) => (prev + 1) % media.length);
  };

  // Keyboard navigation for Modal (Escape, Arrow Left, Arrow Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === 'Escape') setSelectedProject(null);
      if (e.key === 'ArrowLeft') handlePrevModalImage();
      if (e.key === 'ArrowRight') handleNextModalImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 px-8 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-305 mx-auto mb-12">
        <span className="text-[16px] font-semibold text-amber-500 tracking-widest uppercase">Projects</span>
        <h2 className="text-3xl md:text-5xl font-regular text-white mt-2">
          Spaces designed around operational reality
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="max-w-305 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => {
          const mediaList = getProjectMedia(project);
          const activeCardIdx = cardImageIndices[project.id] || 0;
          const currentMedia = mediaList[activeCardIdx];

          return (
            <div 
              key={project.id} 
              className="group border border-slate-800 bg-slate-900 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              {/* Clickable Media Container with Carousel Controls */}
              <div 
                onClick={() => handleOpenModal(project)}
                className="relative h-56 w-full overflow-hidden bg-slate-950 cursor-pointer"
              >
                {project.videoUrl && activeCardIdx === 0 ? (
                  <video 
                    src={project.videoUrl} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <img 
                    src={currentMedia} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* Card Navigation Arrows (shown if multiple media exists) */}
                {mediaList.length > 1 && (
                  <>
                    <button
                      onClick={(e) => handlePrevCardImage(e, project)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-slate-950/70 text-white p-1.5 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={(e) => handleNextCardImage(e, project)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-slate-950/70 text-white p-1.5 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-colors opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                )}

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <span className="bg-amber-500 text-slate-950 text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    {project.videoUrl && activeCardIdx === 0 ? '▶ Play Video' : '🔍 View Gallery'}
                  </span>
                </div>

                {/* Category Badge (Top Right) */}
                <div className="absolute top-4 right-4 z-10 pointer-events-none">
                  <span className="text-[14px] px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-500 border border-amber-500/30">
                    {project.category}
                  </span>
                </div>

                {/* Image Indicator Dots (Bottom Center) */}
                {mediaList.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex space-x-1.5">
                    {mediaList.map((_, idx) => (
                      <span 
                        key={idx}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === activeCardIdx ? 'w-4 bg-amber-500' : 'w-1.5 bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-500 font-gelix font-regular text-[16px]">{project.number}</span>
                    <span className="text-slate-500 font-gelix font-regular text-[16px]">{project.year}</span>
                  </div>

                  <h3 
                    onClick={() => handleOpenModal(project)}
                    className="text-[24px] font-regular text-white group-hover:text-amber-500 transition-colors cursor-pointer mb-2"
                  >
                    {project.title}
                  </h3>

                  {project.description && (
                    <p className="text-slate-400 text-[16px] font-regular font-gelix line-clamp-2 mb-4">
                      {project.description}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => handleOpenModal(project)}
                  className="text-xs text-amber-500 hover:text-amber-400 font-semibold flex items-center space-x-1 pt-2"
                >
                  <span>View Full Details</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedProject && (() => {
        const modalMedia = getProjectMedia(selectedProject);
        const currentMedia = modalMedia[modalImageIndex];

        return (
          <div 
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative bg-slate-900 border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (X) */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 bg-slate-950/80 text-slate-300 hover:text-amber-500 p-2 rounded-full border border-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Media Carousel Area */}
              <div className="relative w-full h-64 md:h-105 bg-black flex items-center justify-center group/modal">
                {selectedProject.videoUrl && modalImageIndex === 0 ? (
                  <video 
                    src={selectedProject.videoUrl} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img 
                    src={currentMedia} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                )}

                {/* Modal Navigation Arrows */}
                {modalMedia.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevModalImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-slate-950/80 text-white hover:text-amber-500 p-3 rounded-full border border-slate-800 transition-colors"
                      aria-label="Previous slide"
                    >
                      ‹
                    </button>
                    <button
                      onClick={handleNextModalImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-slate-950/80 text-white hover:text-amber-500 p-3 rounded-full border border-slate-800 transition-colors"
                      aria-label="Next slide"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Modal Thumbnails (Scrollable Strip) */}
              {modalMedia.length > 1 && (
                <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center space-x-3 overflow-x-auto">
                  {modalMedia.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalImageIndex(idx)}
                      className={`relative shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        idx === modalImageIndex ? 'border-amber-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Modal Footer Info */}
              <div className="p-6 md:p-8 bg-slate-900 overflow-y-auto">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-amber-500 font-mono text-sm">{selectedProject.number}</span>
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-slate-800 text-amber-500 border border-amber-500/30">
                      {selectedProject.category}
                    </span>
                    <span className="text-slate-400 font-mono text-sm">{selectedProject.year}</span>
                  </div>
                </div>

                {selectedProject.description && (
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};