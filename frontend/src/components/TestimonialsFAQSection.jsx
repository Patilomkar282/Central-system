export default function TestimonialsFAQSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">Feedback</h3>
        <h2 className="text-3xl font-bold text-mmcoe-navy mb-8">Student Experiences</h2>
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 border-l-4 border-mmcoe-maroon">
            <p className="text-slate-700 italic mb-4 text-sm">"The strict technical environment of SmartPrep helped me acclimate to actual corporate interview stress. The precise feedback on my tone was invaluable."</p>
            <h5 className="font-bold text-slate-900 text-sm">Siddharth K.</h5>
            <p className="text-xs text-slate-500">Computer Engineering</p>
          </div>
          <div className="bg-slate-50 p-6 border-l-4 border-mmcoe-navy">
            <p className="text-slate-700 italic mb-4 text-sm">"Connecting with MMCOE alumni working at top MNCs gave me the exact roadmap I needed for my final year preparations."</p>
            <h5 className="font-bold text-slate-900 text-sm">Priya M.</h5>
            <p className="text-xs text-slate-500">Information Technology</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">Information</h3>
        <h2 className="text-3xl font-bold text-mmcoe-navy mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'Who is eligible to use SmartPrep?', a: 'SmartPrep is exclusively available for current students and verified alumni of MMCOE. Registration requires administrative validation.' },
            { q: 'How does the Central Hub handle security?', a: 'The Hub utilizes JSON Web Tokens (JWT) and an OTP-based authentication model, ensuring enterprise-grade data protection within the college ecosystem.' },
            { q: 'Can I access the modules directly?', a: 'No. All modules require authentication through this Central Hub to guarantee security and proper data synchronization.' }
          ].map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded bg-white p-5">
              <h4 className="text-sm font-bold text-slate-800 mb-2">{faq.q}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}