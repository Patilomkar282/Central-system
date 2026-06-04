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
        <div className="flex-1 w-full bg-slate-100 border border-slate-200 rounded p-8 flex items-center justify-center shadow-inner min-h-[400px]">
           <div className="text-slate-400 font-medium flex flex-col items-center">
             <svg className="w-16 h-16 mb-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
             Data Analytics Visualization Region
           </div>
        </div>
      </div>
    </section>
  );
}