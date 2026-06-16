export default function AIFeaturesSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">Technology</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-mmcoe-navy">Powered by Advanced Analytics</h2>
            <div className="w-24 h-1 bg-mmcoe-maroon mt-4"></div>
          </div>
          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="mt-1 w-12 h-12 bg-slate-100 border border-slate-200 text-mmcoe-navy rounded flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Automated Sentiment & Confidence Analysis</h4>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">Our proprietary AI evaluates vocal tone, speech rate, and facial expressions during mock interviews to provide objective feedback on soft skills.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mt-1 w-12 h-12 bg-slate-100 border border-slate-200 text-mmcoe-maroon rounded flex items-center justify-center shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-800">Smart Resume ATS Matching</h4>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed">Automatically parses resumes against corporate job descriptions, highlighting keyword gaps to ensure maximum Application Tracking System compatibility.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center p-4">
          {/* Main Dashboard Card */}
          <div className="w-full max-w-md bg-white border border-slate-200 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 relative z-10 hover:shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-500">
            {/* Top Header */}
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-bold text-slate-800 flex items-center gap-2">
                <svg className="w-5 h-5 text-mmcoe-maroon" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Real-time Analysis
              </h4>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Live
              </span>
            </div>

            {/* Content: 2 Columns */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Left Column: ATS Score */}
              <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 flex flex-col items-center justify-center text-center">
                <div className="relative w-16 h-16 flex items-center justify-center mb-2">
                  <svg className="absolute inset-0 w-full h-full text-slate-200" viewBox="0 0 36 36">
                    <path className="stroke-current" fill="none" strokeWidth="3" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <svg className="absolute inset-0 w-full h-full text-mmcoe-navy" viewBox="0 0 36 36" strokeDasharray="85, 100" strokeLinecap="round">
                    <path className="stroke-current" fill="none" strokeWidth="3" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span className="text-lg font-bold text-slate-800">85%</span>
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">ATS Match</span>
              </div>

              {/* Right Column: Sentiment Analysis */}
              <div className="bg-slate-50 border border-slate-100 rounded-lg p-4 flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 text-center">Sentiment Profile</span>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                      <span>Confidence</span>
                      <span className="text-mmcoe-navy">92%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-mmcoe-navy h-1.5 rounded-full w-[92%] relative">
                        <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                      <span>Clarity</span>
                      <span className="text-mmcoe-maroon">88%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-mmcoe-maroon h-1.5 rounded-full w-[88%] relative">
                         <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Speech Analysis Bars */}
            <div className="mt-4 bg-slate-50 border border-slate-100 rounded-lg p-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 block flex justify-between items-center">
                Speech Rate Analysis
                <svg className="w-3 h-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </span>
              <div className="flex items-end gap-1 h-12 justify-between px-1">
                {[40, 65, 85, 45, 90, 75, 55, 80, 60, 45, 70, 85, 50, 65, 90, 60, 45, 80, 55, 75].map((height, i) => (
                  <div key={i} className="w-1.5 bg-mmcoe-navy/10 rounded-t-sm" style={{ height: `${height}%` }}>
                    <div className="bg-mmcoe-navy w-full rounded-t-sm transition-all duration-1000" style={{ height: `${height * 0.7}%` }}></div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-mmcoe-navy/5 to-mmcoe-maroon/5 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-mmcoe-maroon/10 rounded-full blur-2xl pointer-events-none -z-10 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-mmcoe-navy/10 rounded-full blur-2xl pointer-events-none -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  );
}