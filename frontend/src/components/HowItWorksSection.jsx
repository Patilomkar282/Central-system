import { useEffect, useRef, useState } from 'react';

export default function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: 'Central Hub Access',
      desc: 'Securely authenticate into the unified ecosystem to unlock all preparation modules.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      )
    },
    {
      title: 'Alumni Connection',
      desc: 'Network with graduates, seek career guidance, and request valuable referrals.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'AI Mock Interviews',
      desc: 'Hone your technical and behavioral skills with highly realistic, AI-driven simulations.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      )
    },
    {
      title: 'Group Discussions',
      desc: 'Engage in live virtual GD rooms and receive qualitative peer and moderator feedback.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
    {
      title: 'Job Board Matching',
      desc: 'Browse tailored opportunities and let our intelligent algorithm match your resume.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Apply & Succeed',
      desc: 'Submit your profile, track application statuses, and step confidently into your career.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="roadmap" className="py-24 px-6 relative bg-[#f8fafc] overflow-hidden" ref={sectionRef}>
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-mmcoe-navy/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-mmcoe-maroon/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className={`inline-block py-1.5 px-4 rounded-full bg-mmcoe-navy/5 text-mmcoe-navy font-bold text-xs uppercase tracking-widest mb-6 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            The Process
          </span>
          <h2 className={`text-3xl md:text-5xl font-black text-mmcoe-navy mb-6 transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Student Journey <span className="text-mmcoe-maroon">Roadmap</span>
          </h2>
          <div className={`w-24 h-1.5 bg-mmcoe-maroon mx-auto rounded-full transition-all duration-700 delay-200 transform ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>
        
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-[15%] left-8 right-8 h-1 bg-gradient-to-r from-mmcoe-navy via-mmcoe-maroon to-mmcoe-navy opacity-20 rounded-full"></div>
          <div className="hidden md:block absolute top-[65%] left-8 right-8 h-1 bg-gradient-to-r from-mmcoe-navy via-mmcoe-maroon to-mmcoe-navy opacity-20 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`relative group transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: `${300 + (index * 150)}ms` }}
              >
                <div className="glass-panel bg-white/60 hover:bg-white p-8 rounded-3xl h-full border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-mmcoe-navy/5 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-mmcoe-navy/10 text-mmcoe-navy font-black flex items-center justify-center text-sm group-hover:bg-mmcoe-navy group-hover:text-white transition-colors duration-300">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto bg-slate-50 text-mmcoe-navy rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-slate-100 group-hover:bg-mmcoe-maroon/10 group-hover:text-mmcoe-maroon transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-black text-mmcoe-navy mb-4 group-hover:text-mmcoe-navy-hover transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 font-medium leading-relaxed text-[15px]">
                    {step.desc}
                  </p>

                  {/* Bottom Hover Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-mmcoe-maroon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>
                
                {/* Arrow Connector for Mobile (between cards) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6 text-mmcoe-navy/30">
                    <svg className="w-8 h-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}