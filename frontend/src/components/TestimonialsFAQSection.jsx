export default function TestimonialsFAQSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h3 className="text-sm font-bold text-mmcoe-maroon tracking-widest uppercase mb-3">Feedback</h3>
        <h2 className="text-3xl font-bold text-mmcoe-navy mb-8">Student Experiences</h2>
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 border-l-4 border-mmcoe-maroon">
            <p className="text-slate-700 italic mb-4 text-sm">"Practicing with the AI mock interviews really helped me get over my interview anxiety. The feedback it gave on my speaking style was surprisingly helpful for the real thing."</p>
            <h5 className="font-bold text-slate-900 text-sm">Siddharth K.</h5>
            <p className="text-xs text-slate-500">Computer Engineering</p>
          </div>
          <div className="bg-slate-50 p-6 border-l-4 border-mmcoe-navy">
            <p className="text-slate-700 italic mb-4 text-sm">"Talking to MMCOE seniors who are already working in the industry helped me figure out exactly what I needed to focus on to get placed."</p>
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
            { q: 'Who can use SmartPrep?', a: 'It\'s exclusively for MMCOE students and alumni right now. Your account will need to be verified by the college before you can log in.' },
            { q: 'Is my data safe here?', a: 'Absolutely. We use secure login methods and OTPs (One Time Passwords) so your personal info and interview data stay private.' },
            { q: 'Do I have to log in here to use the other tools?', a: 'Yes, the Central Hub is the main starting point. You log in here once, and it securely logs you into all the other modules like the Alumni network and AI interviews.' }
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