export default function ModulesSection({ handleModuleClick }) {
  const modules = [
    {
      id: 'alumni',
      title: 'Alumni Connection',
      shortDesc: 'Networking & Mentorship',
      description: 'Connect with MMCOE alumni, build your professional network, and receive invaluable career guidance from industry experts.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      url: 'http://localhost:5173'
    },
    {
      id: 'interviews',
      title: 'AI Mock Interviews',
      shortDesc: 'Automated Practice',
      description: 'Harness the power of AI to simulate real technical and HR interviews. Receive instant analytics on your communication and confidence.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      url: 'http://localhost:5175'
    },
    {
      id: 'gd',
      title: 'Group Discussions',
      shortDesc: 'Collaborative Learning',
      description: 'Participate in live virtual group discussions. Enhance your leadership skills with real-time qualitative feedback from moderators.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      url: 'http://localhost:5176'
    },
    {
      id: 'jobs',
      title: 'Job & Resume Matching',
      shortDesc: 'Smart Career Mapping',
      description: 'Upload your resume and let our intelligent algorithm match you with the perfect job opportunities tailored precisely to your skillset.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: 'http://localhost:5177'
    }
  ];

  return (
    <section id="modules" className="relative py-28 px-6 bg-[#f8fafc] overflow-hidden">
      {/* Subtle brand background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-mmcoe-navy/20 to-transparent"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-mmcoe-navy/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-mmcoe-maroon/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-mmcoe-navy/5 text-mmcoe-navy font-bold text-xs uppercase tracking-widest mb-6">
            Explore the ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-mmcoe-navy tracking-tight mb-6">
            Your Complete <span className="text-mmcoe-maroon">Preparation Hub</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            Seamlessly navigate between networking, interview prep, and career matching. One platform, infinite opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {modules.map((mod) => (
            <div 
              key={mod.id}
              onClick={() => handleModuleClick(mod.url)}
              className="group cursor-pointer glass-panel rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-mmcoe-navy/10 relative overflow-hidden"
            >
              {/* Dynamic Brand Top Border */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-mmcoe-maroon transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="flex flex-col sm:flex-row items-start gap-6 relative z-10">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-mmcoe-navy/5 text-mmcoe-navy group-hover:bg-mmcoe-maroon/10 group-hover:text-mmcoe-maroon transition-colors duration-300">
                  {mod.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest mb-1 text-slate-500 group-hover:text-mmcoe-maroon transition-colors duration-300">{mod.shortDesc}</p>
                    <h3 className="text-2xl font-black text-mmcoe-navy group-hover:text-mmcoe-navy-hover transition-colors">{mod.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed font-medium mb-8 text-[15px]">
                    {mod.description}
                  </p>
                  
                  {/* Action Button */}
                  <div className="inline-flex items-center">
                    <span className="font-bold text-mmcoe-navy text-sm tracking-wide group-hover:mr-4 group-hover:text-mmcoe-maroon transition-all duration-300">
                      Access Portal
                    </span>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-mmcoe-maroon text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 absolute right-8 bottom-8">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}