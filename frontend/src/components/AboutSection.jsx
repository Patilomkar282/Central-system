import { useState } from 'react';

export default function AboutSection({ setIsLoginModalOpen }) {
  const [activeYear, setActiveYear] = useState('BE');

  const journeyData = [
    {
      id: 'FE',
      title: 'First Year (FE)',
      subtitle: 'Foundation & Exploration',
      points: ['Profile & Resume Building', 'Communication Skills', 'Basic Logic & Aptitude']
    },
    {
      id: 'SE',
      title: 'Second Year (SE)',
      subtitle: 'Skill Development',
      points: ['Core Technical Skills', 'Mini-Projects', 'Early Alumni Networking']
    },
    {
      id: 'TE',
      title: 'Third Year (TE)',
      subtitle: 'Pre-Placement Prep',
      points: ['Advanced Aptitude', 'Group Discussions', 'Domain-Specific Mocks']
    },
    {
      id: 'BE',
      title: 'Final Year (BE)',
      subtitle: 'Placement Ready',
      points: ['AI Mock Interviews', 'Company-Specific Prep', 'Intelligent Job Matching']
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#022b76 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Hub Introduction - Split Layout */}
        <div className="grid xl:grid-cols-2 gap-16 items-center mb-32 mt-8">
          
          {/* Left Side: Text and CTA */}
          <div className="flex flex-col items-start text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-mmcoe-maroon/10 text-mmcoe-maroon font-bold text-xs tracking-widest uppercase mb-6 border border-mmcoe-maroon/20">
              <span className="w-2 h-2 rounded-full bg-mmcoe-maroon animate-pulse"></span>
              Training & Placement Cell
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
              SmartPrep <span className="text-mmcoe-maroon bg-clip-text text-transparent bg-gradient-to-r from-mmcoe-maroon to-red-600">Central Hub</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              The official unified ecosystem for MMCOE students. Access AI-driven mock interviews, group discussions, alumni mentorship, and intelligent job matching through a single secure gateway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={() => setIsLoginModalOpen(true)} className="px-8 py-4 text-sm md:text-base font-bold text-white bg-mmcoe-maroon rounded-lg shadow-[0_8px_20px_-6px_rgba(133,0,19,0.5)] hover:bg-mmcoe-maroon-hover hover:-translate-y-0.5 transition-all uppercase tracking-wider flex items-center justify-center gap-2">
                Access Ecosystem
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
              <a href="#modules" className="px-8 py-4 text-sm md:text-base font-bold text-slate-700 bg-white border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50 hover:-translate-y-0.5 transition-all uppercase tracking-wider text-center">
                Explore Modules
              </a>
            </div>
          </div>

          {/* Right Side: Interactive Journey Graphic */}
          <div className="relative w-full max-w-lg mx-auto xl:mx-0 xl:ml-auto">
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-mmcoe-navy/5 blur-3xl rounded-full -z-10"></div>
            
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-mmcoe-maroon/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                <h3 className="text-xl font-extrabold text-slate-800">Your Placement Journey</h3>
                <span className="text-xs font-bold text-mmcoe-navy bg-mmcoe-navy/10 px-3 py-1 rounded-full">Interactive</span>
              </div>
              
              <div className="relative">
                {/* Vertical connecting line */}
                <div className="absolute left-[19px] top-6 bottom-8 w-1 bg-gradient-to-b from-slate-100 via-slate-200 to-slate-100 rounded-full"></div>
                
                <div className="flex flex-col gap-5">
                  {journeyData.map((year) => {
                    const isActive = activeYear === year.id;
                    return (
                      <div 
                        key={year.id} 
                        className={`relative flex gap-6 cursor-pointer group transition-all duration-300 ease-in-out ${isActive ? 'opacity-100 scale-[1.02]' : 'opacity-50 hover:opacity-80'}`}
                        onMouseEnter={() => setActiveYear(year.id)}
                      >
                        {/* Circle Node */}
                        <div className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-4 transition-colors duration-300 flex-shrink-0 bg-white ${isActive ? 'border-mmcoe-maroon shadow-md' : 'border-slate-200 group-hover:border-slate-300'}`}>
                          {isActive ? (
                             <div className="w-2.5 h-2.5 rounded-full bg-mmcoe-maroon"></div>
                          ) : (
                             <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-slate-300 transition-colors"></div>
                          )}
                        </div>
                        
                        {/* Text Content */}
                        <div className={`flex-1 transition-all duration-300 bg-white rounded-xl ${isActive ? '-mt-2 p-5 border border-mmcoe-maroon/20 shadow-[0_4px_20px_-4px_rgba(133,0,19,0.1)] ring-1 ring-mmcoe-maroon/5 bg-gradient-to-br from-white to-red-50/30' : 'pt-2'}`}>
                          <h4 className={`font-bold transition-colors ${isActive ? 'text-mmcoe-maroon text-lg' : 'text-slate-700'}`}>
                            {year.title}
                          </h4>
                          
                          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                            <p className="text-sm font-semibold text-slate-800 mb-3">{year.subtitle}</p>
                            <ul className="space-y-2">
                              {year.points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                                  <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                  {point}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* The Objective & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 items-start pt-16 border-t border-slate-200/60">
          
          {/* Text Content */}
          <div className="text-left">
            <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">The Objective</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-mmcoe-navy mb-6 leading-tight">Bridging the Gap Between Education & Industry</h2>
            <div className="w-20 h-1.5 bg-mmcoe-maroon mb-8"></div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              The primary objective of the SmartPrep Central Hub is to combat the common challenges faced by students during placement season. By centralizing our resources, we provide a structured, data-driven approach to technical preparation, communication improvement, and professional networking, ensuring every student is corporate-ready.
            </p>

            <h3 className="text-xl font-bold text-slate-800 mb-6 mt-8 border-b border-slate-200 pb-2">Our 5-Year Strategic Targets</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-mmcoe-maroon/10 flex items-center justify-center border border-mmcoe-maroon/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-mmcoe-maroon"></div>
                </div>
                <p className="text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">100% Placement Readiness:</strong> Ensure every eligible student is fully equipped to secure high-quality job offers or paid internships.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-mmcoe-maroon/10 flex items-center justify-center border border-mmcoe-maroon/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-mmcoe-maroon"></div>
                </div>
                <p className="text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">500+ Corporate Partners:</strong> Expand our trusted network to include top-tier MNCs and high-growth startups for direct recruitment.</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-mmcoe-maroon/10 flex items-center justify-center border border-mmcoe-maroon/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-mmcoe-maroon"></div>
                </div>
                <p className="text-slate-600 leading-relaxed"><strong className="text-slate-900 font-bold">Active Alumni Ecosystem:</strong> Connect 10,000+ active alumni mentors with current students for continuous industry guidance.</p>
              </li>
            </ul>
          </div>

          {/* Image Collage */}
          <div className="grid grid-cols-2 gap-4 md:gap-6 relative">
            {/* Left Column */}
            <div className="flex flex-col gap-4 md:gap-6 pt-12">
              <img src="/labs.png" alt="Students in Lab" className="w-full h-[200px] lg:h-[240px] object-cover rounded-xl shadow-md border border-slate-200 transition-transform hover:-translate-y-1 duration-300" />
              
              <img src="/Project.png" alt="Student Project Presentation" className="w-full h-[240px] lg:h-[280px] object-cover rounded-xl shadow-lg border border-slate-200 transition-transform hover:-translate-y-1 duration-300" />
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-4 md:gap-6 pb-12 relative z-10">
              <img src="/placement.png" alt="Corporate Placement Drive" className="w-full h-[260px] lg:h-[300px] object-cover rounded-xl shadow-xl border border-slate-200 transition-transform hover:-translate-y-1 duration-300" />
              
              <img src="/ppt.png" alt="Presentation Session" className="w-full h-[180px] lg:h-[220px] object-cover rounded-xl shadow-md border border-slate-200 transition-transform hover:-translate-y-1 duration-300" />
            </div>
            
            {/* Decorative background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-mmcoe-maroon/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}